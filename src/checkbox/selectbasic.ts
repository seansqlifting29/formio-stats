type singleDistributionOutput = [string, number]
export const distribution: (formioSubmissions: any, selectBoxId: string) => singleDistributionOutput[]
    = function (formioSubmissions: any, selectBoxId: string) {
        var tupleArr: [string, number][] = []
        let elementCnt3: any = [];
        var result: any[] = []
        var categoryCount = 0
        formioSubmissions.forEach(function () {categoryCount++;})
        for (var key in formioSubmissions) {
            var choices = formioSubmissions[key].data
            for (var sub_key in choices) {
                if (selectBoxId === sub_key) {
                    Object.entries(choices[sub_key]).forEach(function ([key]) {
                        var trueCount = 0;
                        var falseCount = 0;
                        if (choices[sub_key][key] === false) {
                            falseCount++;
                        }
                        if (choices[sub_key][key] === true) {
                            trueCount++;
                        }
                        Object.entries(choices[sub_key]).forEach(function ([keys]) {
                            var calcs = (trueCount * 100) / (trueCount + falseCount)
                            if (choices[sub_key][keys] === true) {
                                tupleArr.push([keys, calcs]);
                            }
                        })
                        let elementCnt: any = [];
                        tupleArr.forEach((val) => {
                            elementCnt[val[0]] = (elementCnt[val[0]] || 0) + (val[1]);
                            elementCnt3[val[0]] = Math.round((elementCnt[val[0]]) * (1 / categoryCount));
                        });
                    })
                }
            }
        }
        return Object.entries(elementCnt3);
    }  






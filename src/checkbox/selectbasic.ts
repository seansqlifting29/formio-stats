type singleDistributionOutput = [string, number]
export const distribution: (formioSubmissions: any, selectBoxId: string) => singleDistributionOutput[]
    = function (formioSubmissions: any, selectBoxId: string) {
        var tupleArr: [string, number][] = [] //Array<[TYPE, TYPE]> or foreach() keep looking into the suggestions from intellisense
        for (var key in formioSubmissions) {
            var choices = formioSubmissions[key].data
            for (var sub_key in choices) {
                var trueCount = 0;
                var falseCount = 0;
                Object.entries(choices[sub_key]).forEach(function ([key]) {
                    if (choices[sub_key][key] === false) {
                        falseCount++;
                    }
                    if (choices[sub_key][key] === true) {
                        trueCount++;
                    }
                })
                Object.entries(choices[sub_key]).forEach(function ([key]) {
                    const filteredArray = [];
                    if (choices[sub_key][key] === true) {
                        tupleArr.push([key, (trueCount * 100) / (trueCount + falseCount)]);
                        Object.entries(tupleArr).forEach(function ([i]) {
                            if (choices[sub_key][key][i] === choices[sub_key][key][i + 1]) {
                                filteredArray.push([i]);
                            }
                        })//const filteredArray = arrayOfArrays.filter(array => {
                    }
                })
            }
        }
        return tupleArr;
    }
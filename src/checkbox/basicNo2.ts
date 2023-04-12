export const distribution = function (formioSubmissions: any, checkBoxId: string[]) {
    var trueArr = []
    var falseArr = []
    for (var cbox in checkBoxId) {
        var trueCount = 0;
        var falseCount = 0;
        for (var key in formioSubmissions) {
            for (var sub_key in formioSubmissions[key].data) {
                    if (formioSubmissions[key].data[sub_key] === true && sub_key === checkBoxId[cbox]) {
                        trueCount++;
                    }
                    if (formioSubmissions[key].data[sub_key] === false && sub_key === checkBoxId[cbox]) {
                        falseCount++;
                    }
            }
        }
        trueArr.push((trueCount * 100) / (trueCount + falseCount));
        falseArr.push((falseCount * 100) / (trueCount + falseCount))
    }
    return {
        trueArr,
        falseArr
    }
}
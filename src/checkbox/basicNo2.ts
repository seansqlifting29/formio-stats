export const distribution = function(formioSubmissions: any, checkBoxId: Array<string>) {
    var trueCount = 0;                    
    var falseCount = 0;
    for (var key in formioSubmissions) {           
        for (var sub_key in formioSubmissions[key].data) { 
            for (var cbox in checkBoxId) {
                if (formioSubmissions[key].data[sub_key] === true && sub_key === checkBoxId) {
                    trueCount++;
                }
                if (formioSubmissions[key].data[sub_key] === false && sub_key === checkBoxId) {
                    falseCount++;
                }
            }
        }
    }
    return {
        percentageOfTrue: (trueCount * 100) / (trueCount + falseCount),
        percentageOfFalse: (falseCount * 100) / (trueCount + falseCount)
    }
}
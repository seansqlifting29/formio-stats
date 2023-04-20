type singleDistributionOutput = [string, number]
export const distribution: (formioSubmissions: any, selectBoxId: string) => singleDistributionOutput[]
    = function (formioSubmissions: any, selectBoxId: string) {
        var trueCount = 0;
        var falseCount = 0;
        var arr = {} //Array<[TYPE, TYPE]> or foreach() keep looking into the suggestions from intellisense
        for (var key in formioSubmissions) {
            for (var sub_key in formioSubmissions[key].data) {
                for (var quests in formioSubmissions[key].data[sub_key]) {
                    if (formioSubmissions[key].data[sub_key] === true) {
                        trueCount++
                    }
                    if (formioSubmissions[key].data[sub_key] === false) {
                        falseCount++
                    }
                }
            }
        }
        return [
            ['rich', 25],
            ['poor', 25],
            ['median', 25],
            ['neutral', 25]
        ]
    }
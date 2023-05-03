import {distribution} from './selectbasic'
import { equal } from 'assert'

var formioResult1 = {
        "data": {
            "howDoYouFeel": {
                "veryHappy": true,
                "happy": false,
                "notHappy": false,
                "sad": false,
                "angry": false
            },
            "whatIsYourIncome": {
                "income30000": false,
                "income50000": false,
                "income80000": true,
                "income100000": false,
                "income20000": false
            },
            "whichCountryAreYouFrom": {
                "unitedStates": false,
                "france": false,
                "spain": false,
                "canada": false,
                "australia": true,
                "germany": false,
                "switzerland": false
            },
            "whatIsYourAgeRange": {
                "1721": false,
                "2124": true,
                "2430": false,
                "3040": false,
                "4060": false
            },
            "submit": true
        },
        "metadata": {
            "timezone": "Asia/Singapore",
            "offset": 480,
            "origin": "https://formio.github.io",
            "referrer": "https://www.google.com/",
            "browserName": "Netscape",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
            "pathName": "/formio.js/app/builder",
            "onLine": true
        },
        "state": "submitted",
        "_vnote": ""
    }
var formioResult2 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": false,
            "happy": true,
            "notHappy": false,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": true,
            "income80000": false,
            "income100000": false,
            "income20000": false
        },
        "whichCountryAreYouFrom": {
            "unitedStates": true,
            "france": false,
            "spain": false,
            "canada": false,
            "australia": false,
            "germany": false,
            "switzerland": false
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": false,
            "2430": false,
            "3040": true,
            "4060": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Asia/Singapore",
        "offset": 480,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Netscape",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}
var formioResult3 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": false,
            "happy": false,
            "notHappy": true,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": true,
            "income80000": false,
            "income100000": false,
            "income20000": false
        },
        "whichCountryAreYouFrom": {
            "unitedStates": false,
            "france": true,
            "spain": false,
            "canada": false,
            "australia": false,
            "germany": false,
            "switzerland": false
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": false,
            "2430": false,
            "3040": true,
            "4060": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "America/New_York",
        "offset": -240,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Chrome",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}

var formioResult4 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": true,
            "happy": false,
            "notHappy": false,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": true,
            "income50000": false,
            "income80000": false,
            "income100000": false,
            "income20000": false
        },
        "whichCountryAreYouFrom": {
            "unitedStates": false,
            "france": false,
            "spain": false,
            "canada": false,
            "australia": false,
            "germany": false,
            "switzerland": true
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": true,
            "2430": false,
            "3040": false,
            "4060": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Europe/Berlin",
        "offset": 120,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Firefox",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}

var formioResult5 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": false,
            "happy": false,
            "notHappy": true,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": true,
            "income80000": false,
            "income100000": false,
            "income20000": false
        },
        "whichCountryAreYouFrom": {
            "unitedStates": false,
            "france": false,
            "spain": true,
            "canada": false,
            "australia": false,
            "germany": false,
            "switzerland": false
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": false,
            "2430": false,
            "3040": true,
            "4060": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Europe/London",
        "offset": 60,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Chrome",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}

var formioResult6 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": false,
            "happy": true,
            "notHappy": false,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": true,
            "income80000": false,
            "income100000": false,
            "income20000": false
        },
        "whichCountryAreYouFrom": {
            "unitedStates": false,
            "france": true,
            "spain": false,
            "canada": false,
            "australia": false,
            "germany": false,
            "switzerland": false
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": true,
            "2430": false,
            "3040": false,
            "4060": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "America/New_York",
        "offset": -300,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Firefox",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}

var formioResult7 = {
    "data": {
        "howDoYouFeel": {
            "veryHappy": false,
            "happy": false,
            "notHappy": false,
            "sad": false,
            "angry": true
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": false,
            "income80000": false,
            "income100000": false,
            "income20000": true
        },
        "whichCountryAreYouFrom": {
            "unitedStates": false,
            "france": false,
            "spain": false,
            "canada": true,
            "australia": false,
            "germany": false,
            "switzerland": false
        },
        "whatIsYourAgeRange": {
            "1721": false,
            "2124": false,
            "2430": false,
            "3040": false,
            "4060": true
        },
        "submit": true
    },
    "metadata": {
        "timezone": "America/New_York",
        "offset": -300,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Firefox",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}



describe('test formio stats', () => {
    it('properly gives checkbox statistics', () => {
        const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4, formioResult5, formioResult6, formioResult7], 'question2')
        // 2 rich - 1 poor - 1 median [4 samples] ___ 50% rich, 25% poor, 25% median
        console.log(res)
        equal(res.length, 17)
        let casesTested = 0
        res.forEach(singleResult => {
            if (singleResult[0] === 'rich') {
                equal(singleResult[1], 25)
                casesTested++
            }
            if (singleResult[0] === 'poor') {
                equal(singleResult[1], 25)
                casesTested++
            }
            if (singleResult[0] === 'median') {
                equal(singleResult[1], 25)
                casesTested++
            }
            if (singleResult[0] === 'neutral') {
                equal(singleResult[1], 25)
                casesTested++
            }
        })
        equal(casesTested, 0)
    })
})

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
            "veryHappy": false,
            "happy": true,
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
            "notHappy": false,
            "sad": false,
            "angry": true
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
            "happy": false,
            "notHappy": false,
            "sad": true,
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
            "notHappy": true,
            "sad": false,
            "angry": false
        },
        "whatIsYourIncome": {
            "income30000": false,
            "income50000": false,
            "income80000": false,
            "income100000": true,
            "income20000": false
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
        const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4, formioResult5, formioResult6, formioResult7], "howDoYouFeel")
        // 7 veryHappy - 0 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 100% veryHappy, 0% happy, 0% notHappy 0% sad 0% angry - passed
        // 6 veryHappy - 1 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 86% veryHappy, 14% happy, 0% notHappy 0% sad 0% angry - passed
        // 5 veryHappy - 2 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 71% veryHappy, 29% happy, 0% notHappy 0% sad 0% angry - passed
        // 4 veryHappy - 3 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 57% veryHappy, 43% happy, 0% notHappy 0% sad 0% angry - passed
        // 3 veryHappy - 4 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 43% veryHappy, 57% happy, 0% notHappy 0% sad 0% angry - passed
        // 2 veryHappy - 5 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 29% veryHappy, 71% happy, 0% notHappy 0% sad 0% angry - passed
        // 1 veryHappy - 6 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 14% veryHappy, 86% happy, 0% notHappy 0% sad 0% angry - passed
        // 1 veryHappy - 5 happy - 1 notHappy - 0 sad - 0 angry [5 samples] ___ 14% veryHappy, 71% happy, 14% notHappy 0% sad 0% angry - passed
        // 1 veryHappy - 4 happy - 1 notHappy - 1 sad - 0 angry [5 samples] ___ 14% veryHappy, 57% happy, 14% notHappy 14% sad 0% angry - passed
        // 1 veryHappy - 4 happy - 1 notHappy - 1 sad - 0 angry [5 samples] ___ 14% veryHappy, 43% happy, 14% notHappy 14% sad 14% angry - passed
        console.log(res)
        equal(res.length, 5)
        let casesTested = 0
        res.forEach(singleResult => {
            if (singleResult[0] === 'veryHappy') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'happy') {
                equal(singleResult[1], 43)
                casesTested++
            }
            if (singleResult[0] === 'notHappy') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'sad') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'angry') {
                equal(singleResult[1], 14)
                casesTested++
            }
        })
        equal(casesTested, 5)
    })
})
describe('test formio stats', () => {
    it('properly gives checkbox statistics', () => {
        const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4], "whatIsYourIncome")
        // 7 income30000 - 0 income50000 - 0 income80000 - 0 income100000 - 0 income20000 [5 samples] ___ 100% veryHappy, 0% happy, 0% notHappy 0% sad 0% angry - tbd
        // 6 veryHappy - 1 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 86% veryHappy, 14% happy, 0% notHappy 0% sad 0% angry - tbd
        // 5 veryHappy - 2 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 71% veryHappy, 29% happy, 0% notHappy 0% sad 0% angry - tbd
        // 4 veryHappy - 3 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 57% veryHappy, 43% happy, 0% notHappy 0% sad 0% angry - tbd
        // 3 veryHappy - 4 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 43% veryHappy, 57% happy, 0% notHappy 0% sad 0% angry - tbd
        // 2 veryHappy - 5 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 29% veryHappy, 71% happy, 0% notHappy 0% sad 0% angry - tbd
        // 1 veryHappy - 6 happy - 0 notHappy - 0 sad - 0 angry [5 samples] ___ 14% veryHappy, 86% happy, 0% notHappy 0% sad 0% angry - tbd
        // 1 veryHappy - 5 happy - 1 notHappy - 0 sad - 0 angry [5 samples] ___ 14% veryHappy, 71% happy, 14% notHappy 0% sad 0% angry - tbd
        // 1 veryHappy - 4 happy - 1 notHappy - 1 sad - 0 angry [5 samples] ___ 14% veryHappy, 57% happy, 14% notHappy 14% sad 0% angry - tbd
        // 1 veryHappy - 4 happy - 1 notHappy - 1 sad - 0 angry [5 samples] ___ 14% veryHappy, 43% happy, 14% notHappy 14% sad 14% angry - tbd"whatIsYourIncome": {
        console.log(res)
        equal(res.length, 5)
        let casesTested = 0
        res.forEach(singleResult => {
            if (singleResult[0] === 'veryHappy') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'happy') {
                equal(singleResult[1], 43)
                casesTested++
            }
            if (singleResult[0] === 'notHappy') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'sad') {
                equal(singleResult[1], 14)
                casesTested++
            }
            if (singleResult[0] === 'angry') {
                equal(singleResult[1], 14)
                casesTested++
            }
        })
        equal(casesTested, 5)
    })
})



import {distribution} from './selectbasic'
import { equal } from 'assert'

var formioResult1 = {
    "data": {
        "selectBoxes": {
            "iAmHappy": true,
            "iAmNotHappy": false,
            "iAmModeratelyHappy": true,
            "iAmExtremelyHappy": false
        },
        "question2": {
            "rich": true,
            "poor": false,
            "median": false,
            "neutral": false
        },
        "question3": {
            "option1": true,
            "option2": true,
            "option3": false
        },
        "submit": false
    },
    "metadata": {
        "timezone": "Asia/Singapore",
        "offset": 480,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Netscape",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}
var formioResult2 = {
    "data": {
        "selectBoxes": {
            "iAmHappy": false,
            "iAmNotHappy": true,
            "iAmModeratelyHappy": false,
            "iAmExtremelyHappy": true
        },
        "question2": {
            "rich": true,
            "poor": false,
            "median": false,
            "neutral": false
        },
        "question3": {
            "option1": true,
            "option2": false,
            "option3": false
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Asia/Singapore",
        "offset": 480,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Netscape",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}
var formioResult3 = {
    "data": {
        "selectBoxes": {
            "iAmHappy": false,
            "iAmNotHappy": true,
            "iAmModeratelyHappy": true,
            "iAmExtremelyHappy": true
        },
        "question2": {
            "rich": false,
            "poor": true,
            "median": false,
            "neutral": false
        },
        "question3": {
            "option1": false,
            "option2": false,
            "option3": true
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Asia/Singapore",
        "offset": 480,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Netscape",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}
var formioResult4 = {
    "data": {
        "selectBoxes": {
            "iAmHappy": true,
            "iAmNotHappy": true,
            "iAmModeratelyHappy": true,
            "iAmExtremelyHappy": true
        },
        "question2": {
            "rich": false,
            "poor": false,
            "median": true,
            "neutral": false
        },
        "question3": {
            "option1": true,
            "option2": true,
            "option3": true
        },
        "submit": true
    },
    "metadata": {
        "timezone": "Asia/Singapore",
        "offset": 480,
        "origin": "https://formio.github.io",
        "referrer": "https://www.google.com/",
        "browserName": "Netscape",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        "pathName": "/formio.js/app/builder",
        "onLine": true
    },
    "state": "submitted",
    "_vnote": ""
}

describe('test formio stats', () => {
  it('properly gives checkbox statistics', () => {
      const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4], 'question2')
    // 2 rich - 1 poor - 1 median [4 samples] ___ 50% rich, 25% poor, 25% median
      console.log(res)
      equal(res.length, 4)
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
      equal(casesTested, 4)
  })
    it('properly gives checkbox statistics', () => {
        const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4], 'question3')
        // 2 rich - 1 poor - 1 median [4 samples] ___ 50% rich, 25% poor, 25% median
        console.log(res)
        equal(res.length, 4)
        let casesTested = 0
        res.forEach(singleResult => {
            if (singleResult[0] === 'rich') {
                equal(singleResult[1], 50)
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
                equal(singleResult[1], 0)
                casesTested++
            }
        })
        equal(casesTested, 4)
    })
    it('properly gives checkbox statistics', () => {
        const res = distribution([formioResult1, formioResult2, formioResult3, formioResult4], 'question3')
        equal(res.arr, [])

})

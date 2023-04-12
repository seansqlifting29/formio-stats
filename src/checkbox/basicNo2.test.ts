import {distribution} from './basicNo2'
import { equal } from 'assert'
import { expect } from '@jest/globals';

describe('test formio stats', () => {
    it('properly gives checkbox statistics for multiple attributes in and out of the order they occur wtih one or more JSON objects,and adds Math.round() to original function', () => {

        var formioResult1 = {
            "data": {
                "under18": false,
                "male": true,
                "female": false,
                "haveEpilepsy": false,
                "married": false,
                "single": true,
                "under30": false,
                "over50": true,
                "underlyingHealthConditions": true,
                "textArea": "",
                "submit": false
            },
            "metadata": {}
        }
        var formioResult2 = {
            "data": {
                "under18": false,
                "male": true,
                "female": false,
                "haveEpilepsy": true,
                "married": true,
                "single": false,
                "under30": false,
                "over50": false,
                "underlyingHealthConditions": true,
                "textArea": "Need updates on programs",
                "submit": false
            },
            "metadata": {}
        }
        var formioResult3 = {
            "data": {
                "under18": true,
                "male": true,
                "female": false,
                "haveEpilepsy": true,
                "married": true,
                "single": false,
                "under30": false,
                "over50": false,
                "underlyingHealthConditions": false,
                "textArea": "Need updates on programs",
                "submit": false
            },
            "metadata": {}
        }
        var formioResult4 = {
            "data": {
                "under18": true,
                "male": true,
                "female": false,
                "haveEpilepsy": true,
                "married": true,
                "single": false,
                "under30": false,
                "over50": false,
                "underlyingHealthConditions": false,
                "textArea": "Need updates on programs",
                "submit": false
            },
            "metadata": {}
        }
        const res = distribution([formioResult1], ["under18", "male", "female", "haveEpilepsy", "married", "single", "under30", "over50","underlyingHealthConditions"])
       expect.arrayContaining(res.trueArr)
        expect([0, 100, 0, 0, 0, 100, 0, 100, 100]).toEqual(expect.arrayContaining(res.trueArr));
       expect.arrayContaining(res.falseArr)
        expect([100, 0, 100, 100, 100, 100, 100, 0, 0]).toEqual(expect.arrayContaining(res.falseArr));
    })
})
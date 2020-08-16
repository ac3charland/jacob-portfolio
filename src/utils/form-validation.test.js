import {validateName, validateEmail, validateRequiredString} from './form-validation'

describe('validateName', () => {
    [
        {desc: 'string', value: 'Clem Fandango', expected: true},
        {desc: 'string with periods, dashes and apostrophes', value: 'Mr. Clem Mother-Lovin\' Fandango', expected: true},
        {desc: 'string with other symbols', value: 'Cl3m +$>d@ngo', expected: false},
        {desc: 'empty string', value: '', expected: false},
        {desc: 'number', value: 12345, expected: false},
        {desc: 'boolean', value: true, expected: false},
        {desc: 'object', value: {a: 'b'}, expected: false},
        {desc: 'array', value: [1, 2, 3], expected: false},
        {desc: 'null', value: null, expected: false},
        {desc: 'undefined', value: undefined, expected: false},
    ].forEach(test => {
        it(`returns ${test.expected} for ${test.desc}`, () => {
            expect(validateName(test.value)).toEqual(test.expected)
        })
    })
})

describe('validateEmail', () => {
    [
        {desc: '.com email', value: 'clem@fandango.com', expected: true},
        {desc: '.co email', value: 'clem@fandango.co', expected: true},
        {desc: '.edu email', value: 'clem@fandango.edu', expected: true},
        {desc: '.gov email', value: 'clem@fandango.gov', expected: true},
        {desc: '.nz email', value: 'clem@fandango.nz', expected: true},
        {desc: '.junk email', value: 'clem@fandango.junk', expected: true},
        {desc: 'email with odd symbols in address', value: 'cl3+f#n}an/o@g3mail.com', expected: true},
        {desc: 'email with odd symbols in site', value: 'clemfandango@g3m+il.com', expected: false},
        {desc: 'email with odd symbols in domain', value: 'clemfandango@geemail.c0m', expected: false},
        {desc: 'email without domain', value: 'clem@fandango', expected: false},
        {desc: 'email without @ symbol', value: 'clemfandango.com', expected: false},
        {desc: 'email without @ symbol or domain', value: 'clemfandango', expected: false},
        {desc: 'email with spaces', value: 'clem fandango@geemail.com', expected: false},
        {desc: 'empty string', value: '', expected: false},
        {desc: 'number', value: 123456, expected: false},
        {desc: 'boolean', value: true, expected: false},
        {desc: 'object', value: {a: 'b'}, expected: false},
        {desc: 'array', value: [1, 2, 3], expected: false},
        {desc: 'null', value: null, expected: false},
        {desc: 'undefined', value: undefined, expected: false},
    ].forEach(test => {
        it(`returns ${test.expected} for ${test.desc}`, () => {
            expect(validateEmail(test.value)).toEqual(test.expected)
        })
    })
})

describe('validateRequiredString', () => {
    [
        {desc: 'string', value: 'Clem Fandango', expected: true},
        {desc: 'string with symbols', value: 'Cl"3-m +$>d@n\'go', expected: true},
        {desc: 'empty string', value: '', expected: false},
        {desc: 'number', value: 12345, expected: false},
        {desc: 'boolean', value: true, expected: false},
        {desc: 'object', value: {a: 'b'}, expected: false},
        {desc: 'array', value: [1, 2, 3], expected: false},
        {desc: 'null', value: null, expected: false},
        {desc: 'undefined', value: undefined, expected: false},
    ].forEach(test => {
        it(`returns ${test.expected} for ${test.desc}`, () => {
            expect(validateRequiredString(test.value)).toEqual(test.expected)
        })
    })
})

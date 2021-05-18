import { checkScore } from '../src/client/js/formHandler'

describe("Testing the score functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkScore() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(checkScore).toBeDefined();
    })
    test("Testing the checkScore() for P+", () => {
        
        expect(checkScore('P+')).toBe('VERY POSITIVE');
    })
    test("Testing the checkScore() for P", () => {
        
        expect(checkScore('P')).toBe('POSITIVE');
    })
    test("Testing the checkScore() for NEW", () => {
        
        expect(checkScore('NEW')).toBe('NEUTRAL');
    })
    test("Testing the checkScore() for N", () => {
        
        expect(checkScore('N')).toBe('NEGATIVE');
    })
    test("Testing the checkScore() for N+", () => {
        
        expect(checkScore('N+')).toBe('VERY NEGATIVE');
    })
    test("Testing the checkScore() for NONE", () => {
        
        expect(checkScore('NONE')).toBe('NO SENTIMENT');
    })

});
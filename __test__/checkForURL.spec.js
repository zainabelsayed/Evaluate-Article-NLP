import { checkForURL } from '../src/client/js/checkURL'
 
describe("Testing the input URL functionality", () => {

    test("Testing the checkForURL() function", () => {
          
           expect(checkForURL).toBeDefined();

        })
        test("Testing the checkURL()", () => {
            const URL = 'https://www.grammarly.com/blog/articles/'
            expect(checkForURL(URL)).toBe(true);
        })
        test("Testing the checkURL()", () => {
            const URL = 'test'
            expect(checkForURL(URL)).toBe(false);
        })
});
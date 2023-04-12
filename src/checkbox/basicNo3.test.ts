import {distribution} from './basicNo3'
import { equal } from 'assert'
const fs = require('fs');

// Create an empty object to hold the imported results
const importedResults: any = [];

// Define the number of results to imports up to 1000. limits to 7 for convenience of unit testing
const NUM_RESULTS = 7;

// Loop through each result file, store in a variable, and add it to the object
for (let i = 0; i < NUM_RESULTS; i++) {
    const filePath = `md/result${i + 1}.json`;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const varName = `result${i + 1}`;
    importedResults[varName] = JSON.parse(fileContents);
}
// Log the resulting array to the console
console.log(importedResults);
describe('test formio stats', () => {
  it('properly gives checkbox statistics when pulling from a folder titled md inside this directory. However, these unit tests will limit NUM_RESULTS to 7 for convenience.', () => {

      const res = distribution(importedResults, 'assignment_requirements_met')
    equal(res.percentageOfTrue, 57)
    equal(res.percentageOfFalse, 43)
  })
})

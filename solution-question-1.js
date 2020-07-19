/**
 * @author miracoly <https://github.com/miracoly>
 */
const example = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const answer = array => {
    // Sort array. Output: [1,1,1,1,2,2,2,4,5,10,20,20,391,392,591]
    array = [...array].sort((a, b) => a < b ? -1:1);
    // Create return array
    const orderedArray = [];
    // Iterate through array while its not empty
    while (array.length > 0) {
        // Get first number to compare with
        const ref = array[0];
        // Filter all numbers which equals ref and put it into sameNum
        const sameNum = array.filter(num => num === ref);
        // Remove brackets [] if its only one number
        if (sameNum.length === 1) {
            orderedArray.push(sameNum[0]);
        } else {
            orderedArray.push(sameNum);  
        }
        // Remove all found numbers from input array
        for (let i = 0; i < sameNum.length; i++) {
            array.shift();
        }
    }
    return orderedArray;
}
// Call function and print solution
console.log("Solution:", answer(example));
/* function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  } */
  const numbers = [1, 2, 3, 4, 5];
let x = sumOfTripledEvens(numbers);
console.log(x);

const evenNumbers = numbers.filter(num=> num%2==0)
console.log(evenNumbers)
const tripledNumbers = evenNumbers.map((num => num*3))
console.log(tripledNumbers)
const sum = tripledNumbers.reduce((acc, num) => acc+num,0)
console.log(sum)




console.log("====================")

const sumMapped = numbers.map((num => num%2===0? num*3 :0))
const suma = sumMapped.reduce((acc, num)=> acc +num,0 )
console.log("ee: "+sumMapped)
console.log("ee2: "+suma)

console.log("+===================")
function sumOfTripledEvens(array) {
return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }
  console.log(sumOfTripledEvens(numbers))
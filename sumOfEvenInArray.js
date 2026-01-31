function EvenSum(num) {
  console.log(num);
  let evenSum = 0;
  for (let i = 0; i < num.length; i++){
    if (num[i] % 2 === 0) {
      evenSum = evenSum + num[i];
    }
  }
  return evenSum;
}

const numbers = [23, 43, 564, 76, 78, 89,343,54, 43, 34, 233];
const Sum = EvenSum(numbers);

console.log("The sum of the array is:",Sum);
// let number = [232, 34, 54, 65, 67, 87, 98, 34];
function sumOfArray(number) {
  // console.log(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++){
    sum = sum + number[i];
  }
  return sum;
}

const numbs = [12, 23, 43, 45, 65,23,534,56];

const sum = sumOfArray(numbs);
console.log(sum);
let arr = [23, 43, 54, 67, 78, 233, 34, 5, 44];

function Big(){
  let big = arr[0];

for (let i = 0; i < arr.length; i++){
  if (arr[i] > big) {
    big = arr[i];
  }
 }
  return big;
}

const max = console.log(Big());
console.log(max);
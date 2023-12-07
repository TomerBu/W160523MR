// pure
function sortAndPrint(arr) {
  const copy = [...arr];
  console.log(copy.sort((a, b) => a - b));
}

// pure:
function print(arr: number[]) {
  console.log(arr);
}

// array is an object:
const arr = [4, 1, 3, 2, 0, 10];

// non-pure - can change the array!!!!!!
sortAndPrint(arr); //[0, 1, 10, 2, 3, 4]
//pure:
print(arr); //[0, 1, 10, 2, 3, 4]

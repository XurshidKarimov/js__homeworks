function firstLast6(arr){
    return (arr[0] == 6 || arr.at(-1) == 6) ? true : false;
}

// console.log(firstLast6([2,3,5,4,6]));

function sameFirstLast(arr) {
  return ((arr.length >= 1) && (arr[0] == arr.at(-1))) ? true : false;
}

// console.log(sameFirstLast([1,3,4,1]));

function makePi() {
  return [3,1,4];
}

// console.log(makePi());

function commonEnd(arr1, arr2) {
  return arr1[0] == arr2[0] || arr1.at(-1) == arr2.at(-1) ? true : false;
}

// console.log(commonEnd([1,2,6], [4,5,6]));

function sum3(arr) {
  return arr.reduce((starter, current) => starter + current, 0);
}

// console.log(sum3([1,2,3,4]));

function rotateLeft3(arr) {
  for(let x = 0, box = null; x < arr.length; x++){
        if (x+1 > arr.length-1) return arr;
        box = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = box;
  }
  return arr;
}

// console.log(rotateLeft3([1,2,3,4,5]));

function reverse3(arr) {
  return arr.reverse();
}

// console.log(reverse3([1,2,3,4]));

function maxEnd3(arr) {
  let max = String(Math.max(...arr));
  return arr.join('').replace(/[0-9]/g, max).split('').map(item => +item);
}

// console.log(maxEnd3([1,2,3,4,5]));

function sum2(arr) {
  return !arr.length ? 0 : arr.slice(0, 2).reduce((starter, current) => starter + current, 0);
}

// console.log(sum2([1,2,3,4,5]));

function middleWay(arr1, arr2) {
  let arr1__slicePoint = !(arr1.length%2) ? arr1.length/2 : Math.floor(arr1.length/2),
      arr2__slicePoint = !(arr2.length%2) ? arr2.length/2 : Math.floor(arr2.length/2);

  let slicingArr1 = !(arr1.length%2) ? arr1.slice(arr1__slicePoint-1, arr1__slicePoint+1) : arr1.slice(arr1__slicePoint, arr1__slicePoint+1),
      slicingArr2 = !(arr2.length%2) ? arr2.slice(arr2__slicePoint-1, arr2__slicePoint+1) : arr2.slice(arr2__slicePoint, arr2__slicePoint+1);

    return [...slicingArr1, ...slicingArr2];
}

// console.log(middleWay([1,2,4,5,6,7], [1,2,5,3,4]));

function makeEnds(arr) {
  return [arr[0], arr.at(-1)];
}

// console.log(makeEnds([1,2,3,4]));

function has23(arr) {
  return arr.includes(2) || arr.includes(3);
}

// console.log(has23([1,3,4,5]));

function no23(arr) {
    return !arr.includes(2) || !arr.includes(3);
}

// console.log(no23([1,6,4,5]));

function makeLast(arr) {
  let stringArr = `${arr.join('')}${arr.join('')}`.replace(/./g, "0").split('').map(item => +item);
  stringArr[stringArr.length-1] = arr.at(-1);
  return stringArr;
}

// console.log(makeLast([4,5,6]));

function double23(arr) {
   let countTwo = 0,
       countThree = 0;

   let copyArr = arr.join('').match(/[23]/g).map(item => +item).forEach(element => {
    element == 2 ? ++countTwo : ++countThree;
   });

  return countTwo >= 2 || countThree >= 2;
}

// console.log(double23([1,2,4,5,3,4,5]));

function fix23(arr) {
  return arr.join('').replace(/(?<=2)3/g, "0").split('').map(item => +item);
}

// console.log(fix23([1,2,3,3]));

function start1(arr1, arr2) {
  return (arr1[0] == 1 && arr2[0] == 1) ? 2 : (arr1[0] == 1 || arr2[0] == 1) ? 1 : 0; 
}

// console.log(start1([0,3,4,5], [1,2,3,4]));

function biggerTwo(arr1, arr2) {
  let sumArr1 = arr1.reduce((starter, current) => starter + current, 0),
      sumArr2 = arr2.reduce((starter, current) => starter + current, 0);
  
    return sumArr1 > sumArr2 ? arr1 : sumArr2 > sumArr1 ? arr2 : arr1; 
}

// console.log(biggerTwo([5,2], [3,4]));

function makeMiddle(arr) {
    let middle = !(arr.length%2) ? arr.length/2 : Math.floor(arr.length/2);
    return !(arr.length%2) ? arr.slice(middle-1, middle+1) : arr.slice(middle, middle+1);
}

// console.log(makeMiddle([11,2,3,4,4,6]));

function plusTwo(arr1, arr2) {
    return [...arr1, ...arr2];
}

// console.log(plusTwo([1,2,3], [4,5,6]));

function swapEnds(arr) {
    let box = arr[0];
    arr[0] = arr.at(-1);
    arr[arr.length-1] = box;

    return arr;
}

// console.log(swapEnds([1,2,3,4]));

function midThree(arr) {
  let middle = Math.floor(arr.length/2);
  
  return arr.slice(middle-1, middle+2);
}

// console.log(midThree([1,2,3,4,5,6,7]));

function maxTriple(arr) {
  let middle = Math.floor(arr.length/2);
  
  return (arr[0] > arr[middle] && arr[0] > arr.at(-1)) ? arr[0] : arr[middle] > arr.at(-1) ? arr[middle] : arr.at(-1);
}

// console.log(maxTriple([6,2,8,4,5]));

function frontPiece(arr) {
  return arr.slice(0, 2);
}

// console.log(frontPiece([1]));

function unlucky1(arr) {
  let arrString = arr.join('');
  
  return arrString.startsWith('13') || arrString.startsWith('13', 1) || arrString.endsWith('13');
}

// console.log(unlucky1([0,1,2,4,1,3]));

function make2(arr1, arr2) {
  return arr1.length >= 2 ? arr1.slice(0, 2) : arr1.length ? [arr1[0], arr2[0]] : arr2.slice(0, 2);
}

// console.log(make2([], [1,2,3]));

function front11(arr1, arr2) {
    return [arr1[0] ?? false, arr2[0] ?? false].filter(Boolean);
}

// console.log(front11([1,7], []));
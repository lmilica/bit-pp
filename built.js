//////////////1/////////////

// var arr = [2, 4, 7, 11, -2, 1];
// var newArr = [];
// for (i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//     newArr.push(arr[i]);

// }
// console.log(newArr);
///////222////
// var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// function removeDuplicate(numbers) {
//     var unique = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (unique.indexOf(numbers[i]) === -1) {
//             unique.push(numbers[i]);
//         }
//     }

//     return unique.sort(function (a, b) {
//         return a - b;
//     })
// }

// console.log(removeDuplicate(arr));
////3333////
///a.///
// var arr = [1, 2, 9, 2, 1];

// function oddOrEven(numbers) {

//     if (numbers.length % 2 === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(oddOrEven(arr));

////b.////

// function oddOrEven(numbers){
//     var middleElement =0;
//     var middleIndex=0;
//     var counter=0;
//     if(numbers.length % 2 === 0){
//         return "Error";
//     }else{
//         middleIndex = parseInt(numbers.length/2)
//         middleElement= numbers[middleIndex];

//         for(var i=0; i<numbers.length; i++){
//             if(numbers[i]< middleElement){
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }
// var arr =[-1, 8.1, 3, 6, 2.3, 44, 2.11];
// console.log(oddOrEven(arr));


//////4444////

// var arr = [1, 4, -2, 11, 8, 1, -2, 3];
// function findSmallestElement(numbers) {
//     var sortArray = numbers;
//     var minValue = 0;
//     var minLastIndex = 0;
// sortArray.sort(function(a,b){return a - b})
// console.log(sortArray);
// console.log(numbers);


// }
// console.log(findSmallestElement(arr));
var smallElem = function (array) {
    var sortedArr = array.slice().sort(function (a, b) { return a - b });
    var minIndex = array.lastIndexOf(sortedArr[0]);

    return {
        min: sortedArr[0],
        minIndex: minIndex
    };
}

var arr = [1, 4, -2, 11, 8, 1, -2, 3];
console.log(smallElem(arr));
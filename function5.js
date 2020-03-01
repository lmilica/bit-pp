
////funct5task1///

// var switchElementPlaces = function (numbers) {
//     var modifiedArray = [];
//     var minIndex = 0;
//     var maxIndex = 0;
//     var minElement = 0;
//     var maxElement = 0;
//     minElement = numbers[0];
//     maxElement = numbers[0];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] < minElement) {
//             minElement = numbers[i];
//             minIndex = i;
//         }
//     } for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maxElement) {
//             maxElement = numbers[i];
//             maxIndex = i;
//         }
//     }
//     numbers[maxIndex] = minElement;
//     numbers[minIndex] = maxElement;
//     return numbers;
// }
// var arr = [3, 500, 12, 149, 53, 414, 1, 19];
// console.log(switchElementPlaces(arr));


// ////funct5task2///

// var modifiedArray = function (numbers) {
//     var outputArray = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] / 2 + 5 !== 0) {
//             outputArray[i] = numbers[i] / 2 + 5;
//         }else{

//             outputArray[i] = 20;

//             }
//         }
//         return outputArray;
//     }
// var arr = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
// console.log(modifiedArray(arr));


/////funct5task3////

// var studentsGrades = function (names, points) {
//     var res = "";
//     for (var i = 0; i < names.length; i++) {
//         if (points[i] < 51 || points[i > 100]) {
//             res += "\nStudent: " +  names[i]  + ", Points: " +  points[i]  + ", Grade: FAILED";
//             continue;
//         }
//         var grade = 5;

//         if (points[i] >= 51 && points[i] <= 60) {
//             grade = 6;
//         } else if (points[i] >= 61 && points[i] <= 70) {
//             grade = 7;
//         } else if (points[i] >= 71 && points[i] <= 80) {
//             grade = 8;
//         } else if (points[i] >= 81 && points[i] <= 90) {
//             grade = 9;
//         } else if (points[i] >= 91 && points[i] <= 100) {
//             grade = 10;
//         }
//         res += "\nStudent: " +  names[i]  + ", Points: " +  points[i]  + ", Grade: " + grade;
//     }
//     return res;
// }
// console.log(studentsGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));


////funct5task6////

// var counter = function () {

//     var sum = 0;
//     for (var i = 1; i <= 1000; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }

//     }
//     for (var i = 1; i <= 500; i++) {
//         if (i % 2 === 1) {
//             sum -= i;
//         }
//     }
// //     return sum * 12.5;
// // }
// // console.log(counter());


// /////funct5task7///


// var concatString = function (inputArray) {
//     var outputString = "";
//     for (var i = 0; i < inputArray.length; i++) {
//         if ((typeof inputArray[i] === "string") && (inputArray[i].length > 1)){
//             outputString += inputArray[i][0] + inputArray[i][1];
//         }


//     }
//     return outputString;
// }
// var arr = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
// console.log(concatString(arr));



////funct5task8////


// var reversedChar = function (text) {
//     var res = "";
//     for (var i = text.length - 1; i >= 0; i--) {

//         res += text[i];
//     }
//     return res;
// }
// var txt = "Belgrade Institute of Technology";
// console.log(reversedChar(txt));


/////funct5task9////

// var combOfTwoNumb = function () {
//     var outputComb = "";
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 2; j <= 7; j++) {
//             if (i === j) {
//                 continue;
//             }
//             outputComb += "( " + i + "," + j + " )";
//         }

//     }

//     return outputComb;
// }
// console.log(combOfTwoNumb());


///funct5task10///

// var isAPrimeNumb = function (number) {
//     for (var i = 2; i < number / 2; i++) {
//         if (number % i === 0) {
//             return false;
//         }

//     }
//     return true;
// }
// console.log(isAPrimeNumb(11));


////funct5task11///

var isAPalindrom = function (text) {
    var str = "";
    var newStr = "";
    
    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            continue;
        }
        str += text[i];
    }
    for (var i = text.length-1; i>=0; i--){
        if(text[i] === " "){
            continue;
        }
        newStr += text[i];
    }
    if(str === newStr){
        return true;
    }else{
        return false;
    }
   
}
var txt= "ank";
console.log(isAPalindrom(txt));

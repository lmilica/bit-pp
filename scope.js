'use strict';
/////func6task2////
// var res = (function () {
//     var text = ['a', 'b', 'c'];
//     var numbers = [1, 2, 3];
//     var arr = [];

//     for (var i = 0; i < text.length; i++) {
//         arr.push(text[i]);
//         arr.push(numbers[i]);
//     }

//     return arr;
// })();

// console.log(res);


////func6task3///

// (function () {
//     var numbers = [1, 2, 3, 4, 5, 6];
//     var k = 3;
//     var firstRes = numbers.slice(0, k);
//     var secondRes = numbers.slice(k, numbers.length);
//     var finalRes = secondRes.concat(firstRes);
//     console.log(finalRes);


// })();

////func6task4///

// (function () {
//     var arr = [];
//     var number = 123543;
//     var str = number.toString();
//     for (var i = 0; i < str.length; i++) {
//         arr.push(parseInt(str[i]));

//     }
//     console.log(arr);

// })();


// ////func6task5///

// (function () {
//     var a = 12;
//     var res = "";
//     for (var i = 1; i < a; i++) {
//         for (var j = 1; j < a; j++) {
//             res += i + " * " + j + " = " + i * j + "\n";
//         }
//     }
//     console.log(res);
    
// })();

////func6task6///

// var res = (function (){
//     var input = 25;
//     var output = 0;
//     output = input * 1.8 + 32;
//     return output;
// })();
// console.log(res);


////func6task7///

// (function(){
//     var arr = [1, 2, 5, "cof", false, undefined, 8, "cat"];
//     var numberArray = [];
//     for(var i = 0; i<arr.length; i++){
//         if(typeof arr[i] !== "number"){
//             continue;
//         }
//         numberArray.push(arr[i]);

//     }
//     numberArray.sort(function(a, b){return b - a});
//     console.log(numberArray[0]);
    
// })();
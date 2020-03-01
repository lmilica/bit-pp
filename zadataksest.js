/*var c= 60;
var f;
var res = "";
f= (9 * c/5) +32;
res = c + "C is"  +  f +  " F";
console.log(res);*/

/*var a = 6;
var b = 50;
var res = "";

if(a === 50 || b===50 || (a+b)===50){
    res= "true";
}else{
    res= "-";
}
  console.log(res);*/

/* var a = 500;
 var res = "";

 if(a > 20 && a <100){
     res = "20<=>100";
 }else if(a > 100 && a < 400 ){
     res = "100<=>400";
 }else{
     res = "-";
 }
 console.log(res);*/




// for(var i=0; i < 4; i++){
//     res="";
//     for(var j=0; j< 4; j++){
//         if((i >0 && i < 3) && (j > 0 && j < 3))
//         {
//             res += " ";
//         }
//         else
//         {
//         res+= "*";
//         }
//     }
//     res+= "\n";

//     console.log(res);
// }

// var first = [3,4,false];
// var second = [2, 5, 8];
// var res = "res [";
// for(var i = 0; i < 3; i++)
// {
//     res += first[i] + ", " + second[i]; 
//     if(i<2)
//     {
//         res += ", ";
//     }
//     else
//     {
//         res +="]";
//     }
// }
// console.log(res);

// var res;
//    function numberOfDigit (a){
//     if(a===0){
//         return 1;
//     }
//        for(var i=0; a>0;i++){
//            a=(a-a%10)/10;

//        }return i;
//    } 
//   res= numberOfDigit(0);
//   console.log(res);

// var brr= [2, 3, 7, 3, 7, 9, 7];
// var c=7;
// function numOfApperance(arr, b){
//     var cnt=0;
// for(var i=0; i<arr.length; i++){
//     if(arr[i] === b){
//         cnt++; //  cnt = cnt + 1; cnt +=1

//     } 
// } 
// return cnt;
// }
// console.log(numOfApperance(brr, 3));

// var num = [2, 3, 7, 3, 7, 9, 7];


// function sumOfOdd(numbers){
//         var sum=0;
//     for(var i=0; i<numbers.length;i++){
//         if(numbers[i]%2 === 1){
//             sum= sum + numbers[i];
//         }
//     }return sum;

// } console.log(sumOfOdd(num));



// var a = "lazA";
// function numOfA(words, n){

//     var num=0;
// for(var i=0; i<words.length;i++){

//     if(words[i] === n){
//         num++;

//     }
// } return num;
// }console.log(numOfA(a, "z"));


// var arr = "macak";
// function position(array, char){
//     var res = null;

//     for(var i=0; i<array.length;i++){

//         if(array[i] === char){
//             return i;
//         }
//     }return -1;

// }console.log(position(arr, "p"));

// var arr="macak"
// function positionLast(array, char){
//     var res=-1;
//     for(var i=0; i<array.length;i++){
//         if(array[i] === char){
//             res=i;
//         }
//     }return res;
// }
// console.log(positionLast(arr, "a"));

// var br= "my random string";
// function convert(text){
//     var outputArray= [];
//     var element;
//     for(var i=0; i<text.length;i++){
//         element=text[i];
//         if(element === " "){
//             outputArray[i]=null;
//         }else{
//         outputArray[i]=element;
//         }
//     }
//      return outputArray;
// }
// var newArray=convert(br);
// console.log(newArray);

// function isPrime(number){
//     if(number === 1){
//         return false;
//     }
//     for(var i=2; i<number; i++){
//         if(number%i === 0){
//             return false;
//         }

//     }
//     return true;
// }
// console.log(isPrime(1));

// var txt= "my random string";
// function separate(text, sign){
//     sign= sign || "-";
//    var myOutputString="";
//     for(var i=0; i<text.length;i++){
//         if(text[i] !== " "){
//          myOutputString+=text[i];
//         }else{
//            myOutputString+=sign;
//         }

//     }
//     return myOutputString;
// }
// console.log(separate(txt));


// var expl= "laza";
// function addPoints(text, n){
//     var outputString="";
//     for(i=0; i<n; i++){
//        outputString+= text[i];  

//     }outputString+="...";
//     return outputString;
// }   

// console.log(addPoints(expl,2));

// var arr=['1', '2', '4', '1e+3', undefined, "9", Infinity];
// function findAllNumbers(text){
//     var outputArray=[];
//     var j=0;
//     for(var i=0; i<text.length; i++){
//         var num=parseFloat(text[i]);
//         if(num !== NaN  && isFinite(num)){
//             outputArray[j++]=parseFloat(text[i]);

//         }
//     }
//     return outputArray;
// }
// console.log(findAllNumbers(arr));


// function yearsToRetire(yearOfBirth, genre){
//     var currentYear=2020;
//     var age= currentYear - yearOfBirth;
//     if(genre === "male"){
//         if(age >=65){
//             return "Alredy retired!";
//         }else{
//             return 65 - age;
//         }

//     }if(genre === "female"){
//         if(age >= 60){
//             return "Alredy retired!";
//         }else{
//             return 60 - age;
//         }
//     }

// }
// console.log(yearsToRetire(1960));

// var name = "My random string";
// var inName = "JS";

// function insertString(text, inputText, position){
//     var outputString= "";
//     var n=0;
//     if(position === undefined){
//         n=0;
//     }else{
//         n=position;
//     }
//     for(var i=0; i<n; i++){
//         outputString += text[i];

//     }outputString += inputText; 
//     for(var i=n; i<text.length; i++){
//         outputString += text[i];
//     }
// return outputString;
// }
// console.log(insertString(name, inName, 6));




/////funct3task2/////


// var filtredString= function(numbers){
//     var filtred="";

//     for(var i = 0; i<numbers.length; i++){
//         if(numbers[i]){
//             filtred +=numbers[i];
//         }
//     }
//     return filtred;
// }
// var arr =[NaN, 0, 15, false, -22, '', undefined, 47, null];
// console.log(filtredString(arr));



////funct3task3////


// var filtredArray = function (numbers) {
//     var filtredArr = [];
//     var j = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i]) {
//             filtredArr[j++] = numbers[i];


//         }
//     }
//     return filtredArr;
// }
// var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// console.log(filtredArray(arr));


/////funct3task4////

// var reverse = function (number) {
//     number += "";
//     var res="";
//     for (var i = number.length - 1; i >= 0; i--) {
//         res +=number[i]
//     }
//     return parseFloat(res);
// }
// var num = 12345;
// console.log(reverse(num));


///funct3task5////


// var getLastElement = function (arr, n) {
//     var res = [];
//     var j = 0;
//     for (var i = arr.length - n; i < arr.length; i++) {

//         res[j++]=arr[i];
//     }if(n === undefined){
//         return arr[arr.length -1];
//     }

//     return res;

// }
// var br = [7, 9, 0, -2];
// console.log(getLastElement(br));


/////funct3task6////

// var createArray = function (number, element) {
//     var outputArray = [];

//     for (var i = 0; i < number; i++) {
//         if (element === undefined) {
//             outputArray[i] = null;
//         } else {
//             outputArray[i] = element;
//         }

//     }
//     return outputArray;

// }
// var num = 6;
// var elm = 0;
// console.log(createArray(6, 1));


/////funct3task9////


// var hideEmail = function (text) {
//     var outputString = "";
//     var position = 0;
//     for (var i = 0; i < 3; i++) {
//         outputString += text[i];
//     }
//     outputString += "...";
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === "@") {
//             position = i;
//             break;

//         }
//     }
//     for (var i = position; i < text.length; i++) {
//         outputString += text[i];
//     }

//     return outputString;

// }
// var inputText = "myemailaddress@bgit.rs";
// console.log(hideEmail(inputText));

/////funct3task10////


var mostFrequentItem = function (item) {
    var frqItem = 0;
    var numberOfFrq = 0;
    var counter = 0;
    for (var i = 0; i < item.length; i++) {
        for (var j = i; j < item.length; j++) {
            if (item[i] === item[j]) {
                counter++;
            }
        } if (counter > numberOfFrq) {
            numberOfFrq = counter;
            frqItem = item[i];
        }
        counter =0;
    }
    return frqItem + " appears " + numberOfFrq + " times";
}
var txt = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequentItem(txt));

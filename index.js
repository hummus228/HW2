// const { AsyncLocalStorage } = require('async_hooks');
// const { log } = require('console');
// const readline =require('readline');
// const rl= readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// console.log();
// document.writeln("Kirill Pushkin");
// const myObj = { firstname: "Kirill", lastname: "Pushkin" };
// console.log(myObj);
// alert("Hello");
// 'use strict';
// const age = prompt("What is your age?",0)

// console.log(`You are ${age} age`);
// const num = prompt('Enter number:');
// if(!isNaN(num)) {
//   console.log(Number(num) + 10);
// } else {
//   alert('its is not number');
// }

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!
// let isBoss = confirm("Are you the boss here??");

// alert(isBoss); // true if OK is pressed

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt = `aaa ${str2} bbb ${str2} ccc`;




//task #1  כן יהיה alert.
// console.log();
// if("0"){
//   alert( 'Hello' );
// }

//task #2
// console.log();
// const messege = prompt("The real name of JavaSript?", 0)

// if (messege =="ECMAScript"){
//   alert( ' Correct ! ');
// }
// else{
//   alert('unknown? ');
// }

// task #3
// let score = 75;
// let grade;

// grade=(score>=90) ? 'A' :
// (score>=80) ? 'B' :
// (score>=70) ? 'C' :
// (score >= 60) ? 'D' :
// 'F'
// console.log("הציון הוא:", grade);

//task #4
// console.log();
// const number = prompt("Enter number")
// if (typeof Number(number) != 'number') {
//   alert('Enter only number')
// } else {
//   if (number > 0) {
//     alert('1')
//   }
//   else if (number < 0) {
//     alert('-1')
//   }
//   else {
//     alert('0')
//   }
// }

//task#5
// let result;
// result = (a + b < 4) ? 'Not enough' : 'A lot';

//task #6
// let message;
// message = (login == 'Employee') ? message = 'Hello' :
// (login == 'Director') ? message = 'Hello' :
// (login == '') ? message = 'No login' :
// message = '';

//task #7

// console.log( false || 'sdf' );  //sdf
// console.log( false && ' '); //false
// console.log( true || ''); //true
// console.log( true && ''); //blank ' '
// console.log( undefined || null); //null
// console.log( undefined || 0 || null);//null
// console.log( undefined && 0 && null); //undefined
// console.log( 1 || 0 ); //1
// console.log( null || 1); //1
// console.log( null || 1 || 0);//1

//loops

//task #1

// let i=1;
// let sum = 0;
// while(i<=100){
//   sum+=i;
//   i++;
// }
// console.log(sum);

//task #2
// let number;
// do {
//   number = prompt("Enter number");
// } while (isNaN(number) || number <= 0);
// console.log(number);

//task #3

// for(let i=1 ; i <= 10 ; i++){
//   console.log("7 x "+i+" ="+7*i);
// }

// task #4

// const secret = 7;
// for (let i = 0; i < 100 ; i++) {
//   number = prompt('Enter number');
//   if (number == secret) break;
//   else
//     alert('Wrong tryagain !')
// }
// alert('Correct!')

//task #5

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 == 0) continue;
//   console.log(i);
// }

//task #6 //הערך האחרון יהיה 1 כיוון שאם   while = 0 זה FALSE והוא יוצא מהלולאה

// let i = 3;
// while (i) {
//   alert(i--);
// }

//task #7 לא אותו ערך! 4 ו 5

// let i = 0;
// while (++i < 5) console.log(i);
// let i = 0;
// while (i++ < 5) console.log(i);

//task #8
//אותה תוצאה
// for (let i = 0; i < 5; ++i) console.log(i);

//task# 9

// for(let i=2 ; i <= 10 ; i++)
//   if(i%2==0){
//     console.log(i);
//   }

//task #10

// let i=1
// while (i<=3) {
//   alert(`number ${i}!`);
//   i++
// }

//task #1  // 25 תווים

// let name = 'Mary '
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'
// console.log(bio.length);

//task #2

// const number=prompt('Enter number');
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// console.log('char# '+number+' is '+'"'+str[number]+'"');

//task #3

// const str=prompt("Enter mahrozet");
// console.log(str[str.length-1], str[str.length-2]);

//task #4

// let str = 'abcde'
// let str2 =''
// for(i=1;i<=str.length;i++){
//   str2 += str[str.length - i];
// }
// console.log(str2);

//task #5
// const str = "js"
// console.log(str.toUpperCase());

//task#6

// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// let userInput;
// rl.question('Enter the string', (answer) => {
// userInput=answer;
// if (str.includes(userInput)) {
//   console.log('Exist');
// } else {
//   console.log('poka');

// }
// rl.close()
// })

//task #7

// let str = '1-2-3-4-5' ;
// while(str.includes('-')){
//   str = str.replace('-' , '.');
// }
// console.log(str);

//task #8

// let str = '1-2-3-4-5' ;
// const newStr = str.replaceAll('-','.');
// console.log(newStr);

//task#9  //fw תחזיר

// const str = 'sdfwe'
// console.log(str.substring(4,2));

//task #10

// const str = "I'm learning javascript!";

// let a=str.substr(13,10);
// let b=str.substring(13,23);
// let c=str.slice(13,23)
// console.log(a,"\n"+b,"\n"+c);

//task #11

// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
// let start = str.indexOf('http://');
// if (start == 0) {
//   console.log(true);
// }
// else
//   console.log(false);

//task #12

// const str = 'https://www.notion.html'
// let end = str.indexOf('.html');
// if (end == 18) {
//   console.log(true);
// }
// else
//   console.log(false);

//task #13

// const str = 'ab cd cd ef';
// let a = console.log(str.lastIndexOf('cd')); //6
// let b = console.log(str.lastIndexOf('cd', 8)); //6
// console.log(a, b);

//task #14

// const str = 'abcde';
// let a = console.log(str.startsWith('abc')); //true
// let b = console.log(str.startsWith('xxx')); //false
// let c = console.log(str.startsWith('bc', 1)); //true
// console.log(a, b, c);

//task #15

// const str = 'abcde';
// let a = console.log(str.endsWith('abc')); //false
// let b = console.log(str.endsWith('xxx')); //false
// let c = console.log(str.endsWith('bc', 3)); //true
// console.log(a, b, c);

//task #16

// let str = 'ab-cd-ef';
// let a = console.log(str.split('-'));
// let b = console.log(str.split('-', 2));
// let c = console.log(str.split(''));
// let d = console.log(str.split(' ', 3));

// let str2 = '12345';
// let a1 = console.log(str.split(' '));

// function func(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   }
//   return num ** 2;
// }
// console.log(func(10)); //?
// console.log(func(-5)); //?

// function func2(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   } else {
//     return num ** 2;
//   }
// }
// console.log(func2(10)); //?
// console.log(func2(-5)); //?

// function addThree(x) {
//   return x + 3
// }
// console.log(addThree(5));

//functions

//task # 1

// function func1(num){
//   if(num>0){
//     return "+++";
//    } else{
//     return"----";
//   }
// }
// console.log(func1(1));
// console.log(func1(-1));

//task #2

// function sumOf(num1,num2,num3) {
//   return num1+num2+num3;
// }
// console.log(sumOf(2,3,5));

//task #3

// function func(num = 5) {
//   console.log(num * num);
// }

// func(2); //  4
// func(3); //  9
// func(); //  25

//task #4
// function func(num1 = 0, num2 = 0) {
//   console.log(num1 + num2);
// }

// func(2, 3); //  5
// func(3); //  3
// func(); //  0

//task #4.1

// function sumAllNumbers(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(sumAllNumbers(1, 2, 3));        // 6
// console.log(sumAllNumbers(5, 10, 15, 20));  // 50
// console.log(sumAllNumbers());              // 0

//HW #2 JS String
//task #1

// let name = 'Mary '
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'

// console.log(bio.length); // 25

//task #2

// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// const char = prompt("Ener num");
// console.log(str[char]);

//task #3

// const str = prompt("Enter str");

// console.log(str.charAt(str.length - 1));
// console.log(str.charAt(str.length - 2));

//task #4

// const str = 'abcde';
// let newStr = '';
// for (i = str.length - 1; i >= 0; i--) {
//   newStr += str[i]
// }
// console.log(newStr);

//task #5

// const str = "js"
// console.log(str.toUpperCase());

//task #6
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// const newStr = prompt("Enter str");
// const res = str.includes(newStr)
// console.log(res);

//task #7

// const elem = '-';
// let str = '1-2-3-4-5';
// while (str.includes(elem)) {
//   str = str.replace(elem, '.');
// }
// console.log(str);

//task #8

// const str = "1-2-3-4-5";
// const newStr = str.replaceAll("-", ".");
// console.log(newStr);

//task #9

// const str = 'sdfwe';
// console.log(str.substring(4, 2)); // 'fw'

//task #10

// const str = "I'm learning javascript!";
// console.log(str.substr(3, 10));
// console.log(str.substring(3, 12));
// console.log(str.slice(3, 13));

//task #11

// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'

// let startLine = str.indexOf('http://', 0);
// if(startLine==0)
//   console.log('true');
// else
//   console.log('false');


//task #12

// const str = 'https://www.notion.html'
// let endLine = str.indexOf('.html');
// if (endLine == str.length - 5)
//   console.log('true');
// else
//   console.log('false');

//task #13

// const str = 'ab cd cd cd ef';
// console.log(str.lastIndexOf('cd')); // 9
// console.log(str.lastIndexOf('cd', 8)); // 6

//task #14

// const str = 'abcde';
// console.log(str.startsWith('abc')); // true
// console.log(str.startsWith('xxx')); // false
// console.log(str.startsWith('bc', 1));// true

//task #15

// const str = 'abcde';
// console.log(str.endsWith('cde')); // true
// console.log(str.endsWith('xxx')); // false
// console.log(str.endsWith('bc', 3)); // true

//task #16

// let str = 'ab-cd-ef';
// console.log(str.split('-')); // ['ab', 'cd', 'ef']
// console.log(str.split('-', 2)); // ['ab', 'cd']
// console.log(str.split('')); // ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
// console.log(str.split('', 3)); // ['a', 'b', '-']

// let str2 = '12345';
// console.log(str2.split('')); // ['1', '2', '3', '4', '5']






















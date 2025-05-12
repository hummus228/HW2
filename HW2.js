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
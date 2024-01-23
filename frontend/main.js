// Thao tác với DOM
// - Truy cập đến node(tag, element)
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll
// const content = document.querySelector('.content');
// console.dir(content);
// Mục tiêu muốn tahy 3.1 = .3111
const table = document.querySelectorAll('table');
// console.dir(table[1].firstElementChild.children[0].children[2]);
const td = table[1].firstElementChild.children[0].children[2];
console.dir(td);
// td.innerHTML = '3.111';


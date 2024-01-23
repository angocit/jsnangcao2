// Thao tác với DOM
// - Truy cập đến node(tag, element)
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll
// const content = document.querySelector('.content');
// console.dir(content);
// // Mục tiêu muốn tahy 3.1 = .3111
// const table = document.querySelectorAll('table');
// // console.dir(table[1].firstElementChild.children[0].children[2]);
// const td = table[1].firstElementChild.children[0].children[2];
// console.dir(td);
// // td.innerHTML = '3.111';
// Promise
// Callback Hell

// setTimeout(()=>{
//     console.log(`soos 1`);
//     setTimeout(()=>{
//         console.log(`soos 2`);
//         setTimeout(()=>{
//             console.log(`soos 3`);
//             setTimeout(()=>{
//                 console.log(`soos 4`);
//             },100);
//         },500);
//     },1000);
// },2000)

// const data = new Promise((resolve, reject) => {
//     reject("Lỗi");
// });
// console.log(data);
// // data.then((kq) => {
// //     console.log(kq);
// // });
// data.catch((err) => {
//     console.log(err);
// });

// Async/Await

// const data = fetch('http://localhost:8080/products');
// data.then((rs)=>{
//     // console.log(rs.json());
//     return rs.json();
// }).then((rs) => {
//     console.log(rs);
// });
// console.log(data);

const getData = async()=>{
    const data = await fetch('http://localhost:8080/products');
    const product = await data.json();
    console.log(product);
}
getData();
// todo: We want to find the size of the window i.e. browser size.
// ? There are two types of the size i) inner height and inner width--- This is the area where webpage is visible.       ii) outer height and outer width---It consists of whole browser including document, webpage and console portion.
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);
// ! innerWidth and outerWidth will differ if you have zoomed in or out. innerWidth will show the scaled width of the window, while outerWidth will not take zooming into account.
        

// **** How to open a new window
// const btn1 = document.querySelector('#btn1');
// btn1.addEventListener('click', function(){
//     window.open() // It will open a blank page
//     window.open("https://www.wikipedia.com"); // It will a page with the given url
// })

// ! There are three parameters in open(url, name, features) window. List of features can be seen from mdn
//  const btn = document.querySelector('button');
//  const url = "https://www.wikipedia.com";
//  features = "height:500px, width:500px"
//     btn.addEventListener('click', function(){
//     window.open(url, 'wikipedia', features)
// })


// **** Use of the parameter name in open of a browser. It change the content of the wikipedia to google in the same window. If this name is written, the new changed content will be opened in the new window.
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
//  const url = "https://www.wikipedia.com";
//      features = "height:500px, width:500px"
//         btn1.addEventListener('click', function(){
//             window.open(url, 'wikipedia', features)
//         })
//         btn2.addEventListener('click', function(){
//             window.open("https://www.google.com", 'wikipedia',  features)
//             window.open("https://www.google.com",  features) // new window
//                 })

// ! How to close the opened window
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const url = "https://www.wikipedia.com";
// features = "height:500px, width:500px"
// btn1.addEventListener('click', function(){
//     window.open(url, 'wikipedia', features)
//         })
// btn2.addEventListener('click', function(){
//     window.open("https://www.google.com", 'wikipedia', features)
// })
// btn3.addEventListener('click', function(){
// window.close()
//             })

// ? Set Time Out is used to run a particular function after some delay.
// setTimeout(myFunction, 2000);
// function myFunction(){
//     console.log("Two minutes later activity");
// }


// ? In order to clear set time out
// const timeId = setTimeout(myFunction, 2000);
// function myFunction(){
//     console.log("Two minutes later activity");
// }
// clearTimeout(timeId); // This will clear the settime out. Usually it is applied after some condition.

// ! time Interval. It will diplay the time after each second
// setInterval(myfun, 1000);
//     function myfun(){
//     const date = new Date();
//     console.log(date.toLocaleTimeString());
// }

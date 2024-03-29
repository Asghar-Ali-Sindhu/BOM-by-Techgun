 // !todo: The BOM is used to interact with browser. It has main object known as window object. The window object represents a window in browser. A window object is automatically created by the browser.
// !  All global javascript objects, functions and the variables with teh var keyword automtically become members of the window object. Global variables are called properties of the window object. The global functions are called methods of the windown object. Also a global object becomes sub-object of the window object.

// *** In cases the output is same. variable defined with var keyword is a window object.
// var student = "Haris Ali";
// console.log(student);
// console.log(window.student);

// ? In case of let, Variable defined with let keyword is not a window property.
// let student = "Zain Ali";
// console.log(student); // Zain Ali
// console.log(window.student); // undefined
// todo: In case of const, Variable defined with const keyword is not a window property.
// const student = "Zain Ali";
// console.log(student); // Zain Ali
// console.log(window.student); // undefined

// ! Function defined globally is a  window method.
// function hello(){
//     console.log("Function is a window method");
// }
// hello()
// window.hello()  //In both cases, output is same. Thus function is a window method.

// ! window is a default object of the browser, so we do not need to write window in the start of a property or method. The following are window methods
// window.alert('alert is a window object')
// window.prompt('prompt is a window object')
// window.confirm('confirm is a window object')
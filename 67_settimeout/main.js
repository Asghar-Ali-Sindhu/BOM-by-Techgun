// todo: The function will be performed after specified time.
// setTimeout(myFunction, 2000);
// function myFunction() {
//     alert("Two minutes later")
// }

// ! The setTimeout function stored in a container returns an id, which can be used later. In this scenario, we have stopped the myFunction before execution. Usually this type of clearTimeout is applied if we chech a particular conditon.
// let timeoutId = setTimeout(myFunction, 2000);
// function myFunction() {
//     alert("Two minutes later")
// }
// clearTimeout(timeoutId)

// todo: setInterval is the time after which a particular task will be performed indefinitely.
// setInterval(myFunct, 2000);
// function myFunct() {
//     console.log("This is repeated after every two seconds");
// }

// ! Consider a scenario that user is given a button and on the click of the button, this time interval is cleared
// const interval = setInterval(myFunct, 2000)
// function myFunct() {
//     console.log("This is repeated after every two seconds");
// }
// const btn = document.querySelector("button");
// btn.addEventListener('click', function () {
//     clearInterval(interval)
// });
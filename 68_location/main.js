// todo: The location object contains information about the current URL. The location object is a property of the window object. The location object is accessed with: window.location or just location
// ? Location object has some properties and methods.
// console.log(location.href);
//  It gives the complete url of the current page.

// !  It gives the complete path and it does not include protocole.
// console.log(location.pathname);

// ** However if we want to know the protocle
// console.log(location.protocol);

// todo: location.href is the combination of the pathname and protocle.

// ! location Methods.
// ? location.assign()--- It loads a new document:
// const btn1 = document.getElementById("load");
// btn1.addEventListener('click', function() {
//    window.location = "https://www.w3schools.com";
// })
// todo: This will automatically load the required page.
// location.assign("https://www.w3schools.com");

// ! The replace() method replaces the current document with a new one.
// const btn1 = document.getElementById("load");
// btn1.addEventListener('click', function() {
//    location.replace("https://www.yahoo.com");
// })

// todo: mdn examples
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
const loc = document.location;
// console.log(loc.href); // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
// console.log(loc.protocol); // https:
// console.log(loc.host); // developer.mozilla.org:8080
// console.log(loc.hostname); // developer.mozilla.org
// console.log(loc.port); // 8080
// console.log(loc.pathname); // /en-US/search
// console.log(loc.search); // ?q=URL
// console.log(loc.hash); // #search-results-close-container
// console.log(loc.origin); // https://developer.mozilla.org:8080

// location.assign("http://another.site"); // load another page




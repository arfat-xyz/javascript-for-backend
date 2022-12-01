// const colors = require("colors");

//start
console.log("welcome to acc");

console.log("%c I'm excited to teach", "color : red;");

// this text will be green
console.log("%cHello", "color: green; background: yellow; font-size: 30px");
console.log("Hope you are also excited");

// testing asyncronous js
console.log("Arfatur Rahman");

// handling multiple async which called call back hell
setTimeout(() => {
  //   console.log("this is asyncronous");
  const user = { id: 1 };
  setTimeout(() => {
    const products = [{}, {}, {}];
    setTimeout(() => {
      const price = [];
    }, 1000);
  }, 500);
}, 1000);
console.log("another console");

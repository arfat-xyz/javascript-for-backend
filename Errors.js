// const { errorHandler, two, three } = require("./errorHandler.js");
import two, { errorHandler } from "./errorHandler.js";
async function getData() {
  try {
    // undefined.find();
    const emailError = new Error("This email alreaey exist");
    throw emailError;
  } catch (e) {
    console.log("errro from catch", e);
    errorHandler(e);
    two();
    // three();
  }
}
getData();

console.log("done");

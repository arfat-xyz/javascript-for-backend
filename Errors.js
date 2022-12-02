async function getData() {
  try {
    // undefined.find();
    const emailError = new Error("This email alreaey exist");
    throw emailError;
  } catch (e) {
    console.log(e);
    errorHandler(e);
  }
}
getData();

function errorHandler(e) {
  const { name, message, stack } = e;
  /* logger.error({
    name,
    message,
    stack,
  }); */
  //   console.log(stack);
  console.log("Internal server error");
}
console.log("done");

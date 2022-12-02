async function getData() {
  try {
    undefined.find();
  } catch (e) {
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
  console.log(stack);
  console.log("Internal server error");
}
console.log("done");

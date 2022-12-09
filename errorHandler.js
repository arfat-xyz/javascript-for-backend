export function errorHandler(e) {
  const { name, message, stack } = e;
  console.log(name, message);
  /* logger.error({
      name,
      message,
      stack,
    }); */
  //   console.log(stack);
  //   console.log("Internal server error");
}
export default function two() {
  console.log("two");
}
// module.exports.three = function three() {
//   console.log("three");
// };

// module.exports = errorHandler;
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;
// module.exports = {
//   errorHandler,
//   two,
// };
// console.log(module);

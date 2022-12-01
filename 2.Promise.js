/* every promise has 3 state 
1.  Pending
2.  Resolved
3.  Rejected */

// defining Promise
const myPromise = new Promise((resolve, reject) => {
  const user = { name: "arfat" };
  if (!user) {
    reject("Something went wrong");
  } else {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  }
});

// consuming promise
myPromise
  .then((res) => {
    // if data found successfully this "then" will run
    console.log("This is from then : ", res);
  })
  .catch((e) => {
    // if data not found this "catch" will run
    console.log("This is from catch : ", e);
  })
  .finally(() => {
    // no matter what data found or not this function will run must
    console.log("finally function run");
  });

const userId = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userId.length; i++) {
  userData.push(myPromise);
}
Promise.all(userData).then((res) => console.log(res));

console.log("done");

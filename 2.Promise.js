const myPromise = new Promise((resolve, reject) => {
  const users = { name: "Arfatur rahman" };
  if (!users) {
    reject("Something was wrong");
  } else {
    setInterval(() => {
        console.log('counter');
      resolve(users);
    }, 1000);
  }
});

const arr = [1, 2, 3, 4, 5, 6];
let userData = [];
for (i = 0; i <= arr.length; i++) {
  userData.push(myPromise);
}
Promise.all(userData).then((res) => console.log(res));

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

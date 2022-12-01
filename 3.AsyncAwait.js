const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "arfat" });
  }, 1000);
});

async function getData() {
  const res = await promise;
  console.log(res);
}
getData();

// callback
fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getUser() {
  const res = await fetch("");
  const user = await res.json();

  const res2 = await fetch(`www.res.com/${user.id}`);
  const product = await res2.json();
}

// Promise Builder

const producer = (arr) => {
  let promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length > 2) {
        resolve(arr.length + " is greater than two");
      } else {
        reject(new Error("Too few values"));
      }
    }, 2000);
  });
  return promiseObj;
};

// Promise Consumer
// - then().catch()
// const consumer = () => {
//   producer([12, 10, 14])
//     .then((response) => {
//       // Make second XHR Call here
//       console.log("FIRST THEN RESPONSE : ", response);
//       return response;
//     })
//     .then((result) => {
//       // Make third XHR Call here
//       console.log("[SECOND THEN STATEMENT]", result);
//       return 101;
//     })
//     .then((value) => {
//       //   Make Fourth XHR Call here
//       console.log("[THIRD THEN STATEMENT]", value);
//     })
//     .catch((err) => console.error(err));
// };

// consumer();

// - async...await

// const consumer = async () => {
//   try {
//     const response = await producer([2, 3, 4]);
//     console.log("[RESPONSE]", response);
//     //   write code for second call
//     //   write code for thrid call and so on...
//   } catch (err) {
//     console.error(err);
//   }
// };

// consumer();

// // PROMISE API
// - all: all or none
// - allSettled: returns all settled promises with status
// - race: first settled (success/failure) promise result
// - any: first successfully settled promise result
// - resolve: runs code in async mode
// - reject: throws promise rejection

// Promise.resolve().then(() => console.log("RESOLVED"));
// Promise.reject().catch(() => console.error("ERROR"));

function promiseFactory(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), ms);
  });
}

const p1 = promiseFactory("First", 1000);
const p2 = promiseFactory("Second", 2000);
const p3 = promiseFactory("Three", 3000);
const p4 = Promise.reject(new Error("REJECTED"));

const allPromises = [p1, p2, p3, p4];

// Promise.all(allPromises)
//     .then(console.log)
//     .catch(console.error);
// Promise.allSettled(allPromises).then(console.log).catch(console.error);
// Promise.any(allPromises).then(console.log).catch(console.error);
Promise.race(allPromises).then(console.log).catch(console.error);

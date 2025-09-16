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

const consumer = async () => {
  try {
    const response = await producer([2, 3]);
    console.log("[RESPONSE]", response);
    //   write code for second call
    //   write code for thrid call and so on...
  } catch (err) {
    console.error(err);
  }
};

consumer();

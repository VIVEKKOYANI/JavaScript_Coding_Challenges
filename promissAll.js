function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function showText1(text, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(text);
      }, time);
    });
  }

// Promise all own;

function myPromiseAll(promises) {
  let result = [];

  return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
          p.then((res) => {
              result.push(res)
              console.log("result", result, index , promises.length - 1);
              if(index === promises.length - 1){
              console.log("result", result);
            resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}

myPromiseAll([showText("heeloo", 100), showText1("hi", 100)]).then((value) =>
  console.log("value", value)
);
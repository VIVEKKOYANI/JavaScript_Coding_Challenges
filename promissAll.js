function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

Promise.all([showText("heeloo", 100), showText("hi", 100)]).then((value) =>
  console.log("value", value)
);
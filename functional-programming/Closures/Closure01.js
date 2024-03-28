// [JavaScript]クロージャについての現在の理解 #JavaScript - Qiita
// https://qiita.com/maccotsan/items/4a31bdcfc649a972608e

// クロージャーをJavaScriptで理解する・使い方 | QooTechWEB
// https://engineering.webstudio168.jp/2022/03/javascript-closure/

function closure(initVal) {
  let count = initVal;

  //   return () => ++count;
  // let innerFunc = () => ++count;
  // let innerFunc = () => {
  //     return ++count;
  // }
  let innerFunc = function () {
    return ++count;
  };
  return innerFunc;
}

let myClusure1 = closure(100);
console.log(myClusure1());
console.log(myClusure1());

let myClusure2 = closure(1);
console.log(myClusure2());
console.log(myClusure2());

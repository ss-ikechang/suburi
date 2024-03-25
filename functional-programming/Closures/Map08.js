const multiplyFunc = (x) => {
  return (y) => x * y;
};

function main(x = 0) {
  const xArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const yArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const kukuArrayX = xArray.map((x) => console.log(x) );

  // const kukuArrayY = yArray.map((y) => {console.log(y);} );

  // let x = 9;

  let kukuArray9 = [];
  for (let y = 1; y <= 9; y++) {
    //kukuArray9.push(x * y);
    kukuArray9[y - 1] = x * y;
  }
  console.log(kukuArray9);

  const kukuArray0 = yArray.map((y) => x * y);
  console.log(kukuArray0);

  const multiply = (y) => x * y;
  const kukuArray1 = yArray.map(multiply);
  console.log(kukuArray1);

  const multiply2 = function (y) {
    return x * y;
  };
  const kukuArray11 = yArray.map(multiply2);
  console.log(kukuArray11);

  const kukuArray2 = yArray.map(multiplyFunc(x));
  console.log(kukuArray2);

  console.log("");

  const kukuArray = xArray.map((x) => yArray.map((y) => x * y));
  console.table(kukuArray);
  // kukuArray.map((x) => { console.log(x);} );

  // const kukuArray = xArray.map((x) => x );
  // console.table(kukuArray);
  //kukuArray.map((x) => { console.log(x);} );
}
main(2);

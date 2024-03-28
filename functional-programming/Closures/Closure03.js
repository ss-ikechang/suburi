// Javascriptの豆知識(let,var,クロージャーに関する面接問題) #JavaScript - Qiita
// https://qiita.com/xu1718191411/items/88dee669da14bc8ba749

const main = () => {
  const funcs = [];
  for (let i = 0; i < 5; i++) {
    //<--ここのiをletで定義しています
    funcs.push(() => {
      console.log(i);
    });
  }
  for (let func of funcs) {
    func();
  }
};

const main2 = () => {
  const funcs = [];
  let i;

  i = 0;
  funcs.push(() => {
    console.log(i);
  });
  i = 1;
  funcs.push(() => {
    console.log(i);
  });
  i = 2;
  funcs.push(() => {
    console.log(i);
  });
  i = 3;
  funcs.push(() => {
    console.log(i);
  });
  i = 4;
  funcs.push(() => {
    console.log(i);
  });

  for (let func of funcs) {
    func();
  }
};

main();
main2();

// 1. varを使うと、スコープはfor文ではなく、for分の上のmain関数になります
// 2. letを使うと、スコープはfor分になり、毎回ループするときに、新しいスコープを作っています
// 3. クロージャーは直上のスコープにアクセスしています

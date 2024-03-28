// JavaScriptでコールバック関数にあらかじめ引数を渡したい！ #JavaScript - Qiita
// https://qiita.com/Lewuathe/items/5827a9b429aa71c4f76e

const action = function (evt, arg1, arg2) {
  alert(arg1 + evt + arg2);
};
const addButtonListener1 = (buttonId = "", str1 = "", str2 = "") => {
  const button = document.getElementById(buttonId);
  const onButtonClick = function (evt) {
    action(evt, str1, str2);
  };
  button.addEventListener("click", onButtonClick, true);
};

const action2 = function (arg1, arg2) {
  return function (evt) {
    alert(arg1 + evt + arg2);
  };
};
const addButtonListener2 = (buttonId = "", str1 = "", str2 = "") => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", action2(str1, str2), true);
};

const addButtonListener3 = (buttonId = "", str1 = "", str2 = "") => {
  const button = document.getElementById(buttonId);
  const onButtonClick = function (evt) {
    action(evt, str1, str2);
  };
  str1 = "change01";
  button.addEventListener("click", onButtonClick, true);
};

const addButtonListener4 = (buttonId = "", str1 = "", str2 = "") => {
  const button = document.getElementById(buttonId);
  const onButtonClick = function (evt) {
    action(evt, str1, str2);
  };
  button.addEventListener("click", onButtonClick, true);
  str1 = "change02";
};

const addButtonListener5 = (buttonId = "", str1 = "", str2 = "") => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", action2(str1, str2), true);
  str1 = "change03";
};

addButtonListener1("button1", "1111foo", "1111bar");
addButtonListener1("button2", "2222foo", "2222bar");

addButtonListener2("button3", "3333foo", "3333bar");
addButtonListener2("button4", "4444foo", "4444bar");

addButtonListener3("button5", "5555foo", "5555bar");
addButtonListener3("button6", "6666foo", "6666bar");

addButtonListener4("button7", "7777foo", "7777bar");
addButtonListener4("button8", "8888foo", "8888bar");

addButtonListener5("button9", "9999foo", "9999bar");
addButtonListener5("buttona", "aaaafoo", "aaaabar");

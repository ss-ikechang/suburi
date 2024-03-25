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

addButtonListener1("button1", "1111foooooooo", "barrrrrrrrrrrrrrrrrr");
addButtonListener2("button2", "2222foooooooo", "barrrrrrrrrrrrrrrrrr");

addButtonListener2("button3", "3333foooooooo", "barrrrrrrrrrrrrrrrrr");
addButtonListener2("button4", "4444foooooooo", "barrrrrrrrrrrrrrrrrr");

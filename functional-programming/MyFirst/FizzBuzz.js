// 18:24～19:07 コーディングに43分かかってる

const fizzBuzz = function(number = 0) {
    if (number % 15 == 0) {
        return "FizzBuzz";
    } else if (number % 3 == 0) {
        return "Fizz";
    } else if (number % 5 == 0) {
        return "Buzz";
    } else {
        return "" + number;
    }
}

// for (let i = 1; i <= 100 ;i++) {
//     console.log(i + ":" + fizzBuzz(i));
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const answer = arr.map(fizzBuzz);

const answer = [...Array(100)].map((_, i) => i + 1).map(fizzBuzz);

console.log("ans = " + answer);
answer.forEach((element, index) => {
    console.log(index + 1 + ":" + element);
});

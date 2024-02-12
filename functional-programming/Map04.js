function main() {
    for (let x = 1; x <= 10; x++) {
        const multiplyX = function(num, multiplier) {
            return num * multiplier;
        };
        const func = function(num) {
            return multiplyX(num, x);
        };
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(func);
        console.log('今回numbers = ' + numbers);
    }
}
main();
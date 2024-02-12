function main() {
    for (let x = 1; x <= 10; x++) {
        const multiplyX = function(num, multiplier) {
            return num * multiplier;
        }
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => multiplyX(num, x));
        console.log('numbers = ' + numbers);
    }
}
main();
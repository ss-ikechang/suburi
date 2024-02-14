function main() {
    const multiplyX = function(num, multiplier) {
        return num * multiplier;
    };
    for (let x = 1; x <= 9; x++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (x)
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => multiplyX(num, x));
        console.log('numbers = ' + numbers);
    }
}
main();
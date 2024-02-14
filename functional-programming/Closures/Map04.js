function main() {
    const multiplyX = function(num, multiplier) {
        return num * multiplier;
    };
    for (let x = 1; x <= 9; x++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (x)
        const func = function(num) {
            return multiplyX(num, x);
        };
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(func);
        console.log('numbers = ' + numbers);
    }
}
main();
function main01() {
    for (let x = 1; x <= 9; x++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (x)
        const multiplyX = function(num) {
            return num * x;
        };
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(multiplyX);
        console.log('numbers = ' + numbers);
    }       
}

function main02(x = 0) {
    const multiplyX = function(num) {
        return num * x;
    };
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(multiplyX);
    console.log('numbers = ' + numbers);
}

function main03() {
    for (let x = 1; x <= 9; x++) {
        main02(x);
    }
}

main01();
console.log("");
main02(9);
console.log("");
main03();

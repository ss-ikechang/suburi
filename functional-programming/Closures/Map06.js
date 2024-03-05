function main02(x = 0) {
    const multiplyX = function(num) {
        return num * x;
    };
    return multiplyX;
}

function main03() {
    let funcs = [];
    for (let x = 0; x < 9; x++) {
        funcs[x] = main02(x + 1);
    }

    for (let i = 0; i < 9; i++) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(funcs[i]);
        console.log('numbers = ' + numbers);
    }
}


main03();

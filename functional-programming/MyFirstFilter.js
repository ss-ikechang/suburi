const isEven = function(value) {
    if (value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const even = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isEven);
console.log('even = ' + even);

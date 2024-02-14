const isEven = function(element, index, array)  {
    console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const even = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isEven);
console.log('even = ' + even);

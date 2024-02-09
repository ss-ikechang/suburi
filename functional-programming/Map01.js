const power2 = function(element, index, array)  {
    console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    return element * element;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(power2);
console.log('numbers = ' + numbers);

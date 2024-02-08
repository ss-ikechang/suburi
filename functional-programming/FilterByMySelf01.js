// 要素の偶数判定処理をコールバック関数で定義
const isEven = function(element, index, array)  {
    console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const myFilter = function(array = [], callbackFn) {
    let retArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i], i, array) === true) {
            retArray.push(array[i]);
        }
    }
    return retArray;
}


const even = myFilter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], isEven);
console.log("even = " + even);

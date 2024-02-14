const isEven = function(element, index, array)  {
    console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 要素を足し算する処理をコールバック関数で定義
const plus = function(accumulator, currentValue, currentIndex, array) {
    console.log("●途中計算結果：" + accumulator + ", 現在の値：" + currentValue + ", インデックス：" + currentIndex + ", 配列：" + array);
    return accumulator + currentValue;
};

const evenSum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isEven).reduce(plus, 0);
console.log('evenSum = ' + evenSum);

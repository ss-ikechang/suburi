// 要素を足し算する処理をコールバック関数で定義
const plus = function(accumulator, currentValue, currentIndex, array) {
    console.log("●途中計算結果：" + accumulator + ", 現在の値：" + currentValue + ", インデックス：" + currentIndex);
    return accumulator + currentValue;
};

const myReduce = function(array = [], callbackFn, initialValue) {
    let value;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            value = callbackFn(initialValue, array[0], i, array);
        } else {
            value = callbackFn(value, array[i], i, array);
        }
    }
    return value;
}

// const sum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(plus, 0);
const sum = myReduce([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], plus, 0);
console.log("sum = " + sum);

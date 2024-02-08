class MyNumberArray {
    numberArray = [];
    
    constructor(numberArray) {
        this.numberArray = numberArray;
    }

    // redude関数を自分で実装
    reduce = function(callbackFn, initialValue) {
        let value;
        for (let i = 0; i < this.numberArray.length; i++) {
            if (i === 0) {
                value = callbackFn(initialValue, this.numberArray[0], i, this.numberArray);
            } else {
                value = callbackFn(value, this.numberArray[i], i, this.numberArray);
            }
        }
        return value;
    }

    // filter関数を自分で実装
    filter = function(callbackFn) {
        let retArray = [];
        for (let i = 0; i < this.numberArray.length; i++) {
            if (callbackFn(this.numberArray[i], i, this.numberArray) === true) {
                retArray.push(this.numberArray[i]);
            }
        }
        return retArray;
    }    
}

// 要素の偶数判定処理をコールバック関数で定義
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

const number = new MyNumberArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],);
const sum = number.reduce(plus, 0);
console.log("sum = " + sum);

const even = number.filter(isEven);
console.log('even = ' + even);

const evenSum = number.filter(isEven).reduce(plus, 0);
console.log("evenSum = " + evenSum);

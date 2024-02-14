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
        return new MyNumberArray(retArray);
    }   

    // map関数を自分で実装
    map = function(callbackFn) {
        let retArray = [];
        for (let i = 0; i < this.numberArray.length; i++) {
            retArray.push(callbackFn(this.numberArray[i], i, this.numberArray));
        }
        return new MyNumberArray(retArray);
    }   
    
    // 文字列表現を返す
    toString = function() {
        return this.numberArray.toString();
    }
}

// 要素の偶数判定処理をコールバック関数で定義
const isEven = function(element, index, array)  {
    // console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 要素を足し算する処理をコールバック関数で定義
const plus = function(accumulator, currentValue, currentIndex, array) {
    // console.log("●途中計算結果：" + accumulator + ", 現在の値：" + currentValue + ", インデックス：" + currentIndex + ", 配列：" + array);
    return accumulator + currentValue;
};

// 要素事情計算する処理をコールバック関数で定義
const power2 = function(element, index, array)  {
    // console.log("現在の値：" + element + ", インデックス：" + index + ", 配列：" + array);     
    return element * element;
};

const vanillaNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("vanillaNumber = " + vanillaNumber);

const number = new MyNumberArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("number = " + number);

console.log("0-9の合計");
const sum = number.reduce(plus, 0);
console.log("sum = " + sum);

console.log("0-9から偶数を抽出");
const even = number.filter(isEven);
console.log('even = ' + even);

console.log("0-9偶数を合計する");
const evenSum = number.filter(isEven).reduce(plus, 0);
console.log('evenSum = ' + evenSum);

console.log("0-9各要素二乗");
const powers = number.map(power2);
console.log('powers = ' + powers);

console.log("0-9偶数を二乗し合計する");
const powerEvenSum = number.filter(isEven).map(power2).reduce(plus, 0);
console.log('powerEvenSum = ' + powerEvenSum);

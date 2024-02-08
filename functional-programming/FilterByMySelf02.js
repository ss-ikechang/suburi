class MyNumberArray {
    numberArray = [];
    
    constructor(numberArray) {
        this.numberArray = numberArray;
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

const number = new MyNumberArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],);
const even = number.filter(isEven);
console.log("even = " + even);

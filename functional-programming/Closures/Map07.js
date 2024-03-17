// JavaScriptでコールバック関数にあらかじめ引数を渡したい！ #JavaScript - Qiita
// https://qiita.com/Lewuathe/items/5827a9b429aa71c4f76e


function action01(num, i = 0) {
    return num * i;
}

function action02(i = 0) {
    return function(num) {
        return num * i;
    }
}

function main() {
    console.log('１、無名関数定義');
    for (let i = 0; i < 10; i++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (i)
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => num * i);
        console.log('numbers = ' + numbers);
    }

    console.log('１、無名関数定義（分解版）');
    for (let i = 0; i < 10; i++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (i)
        const localAction = function(num) {
            return num * i;
        };
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(localAction);
        console.log('numbers = ' + numbers);
    }

    console.log('１、二回呼んでみる');
    for (let i = 0; i < 10; i++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (action01, i)
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => action01(num, i));
        console.log('numbers = ' + numbers);
    }

    console.log('１、二回呼んでみる（分解版）');
    for (let i = 0; i < 10; i++) {
        // Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (action01, i)
        const localAction = function(num) {
            return action01(num, i);
        };
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(localAction);
        console.log('numbers = ' + numbers);
    }

    console.log('２、関数を返す方法');
    for (let i = 0; i < 10; i++) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(action02(i));
        console.log('numbers = ' + numbers);
    }
}


main();
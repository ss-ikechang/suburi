function closure(initVal) {
    let count = initVal;
    
    return () => ++count;
    // let innerFunc = () => ++count;
    // let innerFunc = () => {
    //     return ++count;
    // }
    // let innerFunc = function() {
    //     return ++count;
    // }
    // return innerFunc;
}

let myClusure1 = closure(100);
console.log(myClusure1());
console.log(myClusure1());

let myClusure2 = closure(1);
console.log(myClusure2());
console.log(myClusure2());

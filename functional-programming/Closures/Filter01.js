// グローバル変数
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// この行の下にあるコードを変更
function remove(bookList, bookName) {
    const removeBook = function(book) {
        return book !== bookName;
    }
    const newList = bookList.filter(removeBook)
    // const newList = bookList.filter(book => book !== bookName);
    return newList;
        
// この行の上にあるコードを変更
}

const newBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
console.log(bookList);
console.log(newBookList);
class Calculator {
  constructor() {
    this.currentNumber = "0"; // 現在の数字
    this.memory = 0; // メモリ
    this.operation = null; // 現在の演算子
    this.display = new Display(); // ディスプレイ
  }

  enterDigit(digit) {
    if (this.currentNumber === "0") {
      this.currentNumber = digit.toString();
    } else {
      this.currentNumber += digit.toString();
    }
    this.display.updateValue(this.currentNumber);
  }

  performOperation(op) {
    if (op === "=") {
      this.calculate();
    } else {
      this.operation = op;
      this.memory = parseFloat(this.currentNumber);
      this.currentNumber = "0";
    }
  }

  calculate() {
    const num = parseFloat(this.currentNumber);
    let result = this.memory;

    switch (this.operation) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
      default:
        break;
    }

    this.currentNumber = result.toString();
    this.operation = null;
    this.memory = 0;
    this.display.updateValue(this.currentNumber);
  }

  clear() {
    this.currentNumber = "0";
    this.memory = 0;
    this.operation = null;
    this.display.clear();
  }
}

class Display {
  constructor() {
    this.value = "0";
  }

  updateValue(newValue) {
    this.value = newValue;
    console.log(this.value); // 仮の実装。実際にはHTML要素などに表示する必要があります。
  }

  clear() {
    this.value = "0";
    console.log(this.value); // 仮の実装。実際にはHTML要素などに表示する必要があります。
  }
}

// 使用例:
const calculator = new Calculator();
calculator.enterDigit(5);
calculator.enterDigit(3);
calculator.performOperation("+");
calculator.enterDigit(3);
calculator.performOperation("=");
calculator.clear();
calculator.enterDigit(3);
calculator.enterDigit(0);
calculator.performOperation("-");
calculator.enterDigit(1);
calculator.enterDigit(0);
calculator.performOperation("=");

// ディスプレイには "8" が表示されるはず

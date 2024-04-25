// alert('trigger');

// HTML元素
const num1Input = document.getElementById('num1') as HTMLInputElement | undefined;
const num2Input = document.getElementById('num2') as HTMLInputElement | undefined;
const sumBtn = document.getElementById('sumBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('resultText') as HTMLDivElement;

// 函式型別
type CalculatorFn = (a:number, b:number) => number;

const sum: CalculatorFn = (a, b) => {
  return a + b;
};

function addNumber() {
  let resultText = '請輸入有效的數字';
  const num1 = parseInt(num1Input?.value || '');
  const num2 = parseInt(num2Input?.value || '');

  // 如果都是數字才做加法運算
  if(!isNaN(num1) && !isNaN(num2)) {
    const result = sum(num1, num2);
    resultText = `運算結果: ${result}`
  }

  resultDiv.innerText = resultText;
}

sumBtn.addEventListener('click', addNumber);
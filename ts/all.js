"use strict";
// alert('trigger');
// HTML元素
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumBtn = document.getElementById('sumBtn');
const resultDiv = document.getElementById('resultText');
const sum = (a, b) => {
    return a + b;
};
function addNumber() {
    let resultText = '請輸入有效的數字';
    const num1 = parseInt((num1Input === null || num1Input === void 0 ? void 0 : num1Input.value) || '');
    const num2 = parseInt((num2Input === null || num2Input === void 0 ? void 0 : num2Input.value) || '');
    // 如果都是數字才做加法運算
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = sum(num1, num2);
        resultText = `運算結果: ${result}`;
    }
    resultDiv.innerText = resultText;
}
sumBtn.addEventListener('click', addNumber);

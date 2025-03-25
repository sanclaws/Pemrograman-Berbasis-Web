const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+': return numbers.reduce((acc, num) => acc + num, 0);
        case '-': return numbers.reduce((acc, num) => acc - num);
        case '*': return numbers.reduce((acc, num) => acc * num, 1);
        case '/': return numbers.reduce((acc, num) => acc / num);
        case '%': return numbers.reduce((acc, num) => acc % num);
        default: return "Operator tidak valid!";
    }
};

function calculate() {
    const operator = document.getElementById("operator").value;
    const numbers = document.getElementById("numbersInput").value.split(',').map(Number);
    
    // Validasi input
    if (numbers.some(isNaN)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    const result = calculator(operator, ...numbers);
    document.getElementById("calcResult").innerText = "Hasil: " + result;
    console.log("Hasil Perhitungan:", result);
    alert("Hasil: " + result);
}
function calculateResult() {
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);

    const selectOpChoice = document.querySelector('select[name="choicesOP"').value;

    let res = 0;

    switch (selectOpChoice) {
        case "add":
            res = n1 + n2; 
            break;
        case "sub":
            res = n1 - n2; 
            break;
        case "mul":
            res = n1 * n2; 
            break;
        case "div":
            if (n2 == 0) {
                res = "Cannot divide by zero!"
            } else {
                res = n1 / n2;
            }
            break;
        default:
            res = "select from the given"; 
            break;
    }
    document.getElementById("result").textContent = "Result:" + res;
}

document.getElementById("result").addEventListener("input", calculateResult);
document.getElementById("result").addEventListener("input", calculateResult);
document.getElementById("choiceSelection").addEventListener("change", calculateResult);

calculateResult();
const n1 = document.getElementById("num1")
const n2 = document.getElementById("num2")
const choices_form = document.querySelector(".choices")

let res = 0;


choices_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value1 = parseInt(n1.value);
    const value2 = parseInt(n2.value);
    const selectOpChoice = document.querySelector('select[name="choicesOP"]').value
    if (!value1 || !value2) {
        alert('Please give appropriate value');
        return;
    }
    switch (selectOpChoice) {
        case "add":
            res = value1 + value2; console.log('buu'); break;
        case "sub":
            res = value1 - value2; break;
        case "mul":
            res = value1 * value2; break;
        case "div":
            res = value1 / value2; break;
        default:
            res = "select from the given"; break;
    }
    // n1.value=''
    // n2.value=''
    alert(res);

});
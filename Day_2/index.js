function loadNumbers(selectElement) {
    for (let index = 0; index <=100; index++) {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = index;
        selectElement.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadNumbers(document.getElementById('select1'));
    loadNumbers(document.getElementById('select2'));
});
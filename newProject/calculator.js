const checkboxes = document.querySelectorAll('.chcekInput input[type="checkbox"]');
const quantityInput = document.querySelector('.resultForm input');
const resultOutput = document.querySelector('.resultFormAmount input');
let checkboxValues = {
    mascara : 15,
    pallete : 8,
    lil : 9,
    Povter : 20
};
let summu = 0;
// Обработчик для изменения состояния чекбоксов
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        let sum = 0;
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                sum += checkboxValues[checkbox.name];
            }
        });
        summu = sum;
        resultOutput.value 
    });
});

// Обработчик для ввода количества
quantityInput.addEventListener('input', () => {
    const quantity = quantityInput.value ? parseInt(quantityInput.value) : 0;
    const result = summu * quantity;
    console.log('res =' +  result);
    resultOutput.value = result
    console.log(result);
});
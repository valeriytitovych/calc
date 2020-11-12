var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    clearBtn = document.getElementById('clear'),
    decimalBtn = document.getElementById('decimal'),
    resultBtn = document.getElementById('result'),
    display = document.querySelector('.display'),
    currNumber = ' ',
    newNumber = false,
    pending = '';


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];

    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};

clearBtn.addEventListener('click', clear);

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', operation);

function numberPress(number) {
    if (newNumber) {
        display.value = number;
        newNumber = false
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };

};

function operation(symbol) {
    var memory = display.value;

    if (newNumber && pending !== '=') {
        display.value = currNumber;
    } else {
        newNumber = true;
        if (pending === '+') {
            currNumber += parseFloat(memory);
        } else if (pending === '-') {
            currNumber -= parseFloat(memory);
        } else if (pending === '*') {
            currNumber *= parseFloat(memory);
        } else if (pending === '/') {
            currNumber /= parseFloat(memory);
        } else if (pending === '%') {
            currNumber / 100;
        } else {
            currNumber = parseFloat(memory);
        };

        display.value = currNumber;
        pending = symbol;
    }
};

function decimal(x) {
    var decimalMemory = display.value;
    if (newNumber) {
        decimalMemory = '0.';
        newNumber = false;
    } else {
        if (decimalMemory.indexOf('.') === -1) {
            decimalMemory += '.';
        };
    };

    display.value = decimalMemory;
};

function clear(y) {
    display.value = ' ';
    newNumber = true;
    currNumber = ' ';
    pending = ' ';
};

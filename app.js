
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

// Maximize/minimiяe the screen
var x = document.getElementById("btn-open-container");
var calcWidth = document.getElementById('calculator-container');

document.querySelector('#close-btn').onclick = function myFunction() {
    if (x.style.display === "flex") {
        trans()
        x.style.display = "none";
        calcWidth.style.width = "340px";
    }
};

document.querySelector('#open-btn').onclick = function myFunction() {
    if (x.style.display === "none") {
        trans()
        x.style.display = "flex";
        calcWidth.style.width = "600px";
    }
};


// Change of theme
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)

};

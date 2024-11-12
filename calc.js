function display(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
}

function insertSym(sym) {
    var screen = document.getElementById("screen");
    screen.value += sym;
}

function calculate() {
    var screen = document.getElementById("screen");
    try {
        var result = eval(screen.value);
        screen.value = result;
    } catch (e) {
        screen.value = "Error"; // Handle invalid expression
    }
}

function del() {
    var screen = document.getElementById("screen");
    var exp = screen.value;
    var led = exp.substring(0, exp.length - 1);
    screen.value = led;
}
let output = document.getElementById('output');
let history = document.getElementById('history');

function vibrate() {
    // Mobile vibration effect (10ms)
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

function insert(val) {
    vibrate();
    if (output.innerText === "0" && val !== ".") {
        output.innerText = val;
    } else {
        output.innerText += val;
    }
}

function clearAll() {
    vibrate();
    output.innerText = "0";
    history.innerText = "";
}

function deleteLast() {
    vibrate();
    if (output.innerText.length > 1) {
        output.innerText = output.innerText.slice(0, -1);
    } else {
        output.innerText = "0";
    }
}

function calculate() {
    vibrate();
    try {
        let expression = output.innerText.replace('×', '*').replace('÷', '/');
        let result = eval(expression);
        history.innerText = output.innerText;
        output.innerText = Number.isInteger(result) ? result : result.toFixed(4);
    } catch (e) {
        output.innerText = "Error";
        setTimeout(clearAll, 1000);
    }
}

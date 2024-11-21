// This is a JavaScript file


function KZTToEUR(param) {
    const translater = 0.002;
    return param * translater;
}

function USDToEUR(param) {
    const translater = 0.85;
    return param * translater;
}

function EURToEUR(param) {
    return param;
}

function cashTranslater() {
    let sum = 0;
    while (true) {
        let numb = prompt("Enter the amount to translate (in KZT, USD or EUR):").toLowerCase();
        if (numb == "stop" || numb == "стоп") {
            break;
        } else if (isNaN(numb) || numb <= 0 || numb == null) {
            continue;
        } else {
            switch (prompt("Enter the currency to translate to (KZT, USD or EUR):").toUpperCase()) {
                case "KZT":
                    sum += KZTToEUR(numb);
                    break;
                case "USD":
                    sum += USDToEUR(numb);
                    break;
                case "EUR":
                    sum += EURToEUR(numb);
                    break;
                default:
                    alert("Invalid currency!");
                    continue;
            }
        }
    }
    alert('Total sum: ' + sum + ' EUR');
}

cashTranslater();
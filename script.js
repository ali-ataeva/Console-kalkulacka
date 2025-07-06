function add(first, second) {
    return first + second;
}
function subtract(first, second) {
    return first - second;
}
function multiply(first, second) {
    return first * second;
}
function divide(first, second) {
    return first / second;
}
while (true) {
    let firstNum;
    let secondNum;
    let operator;
    while (true) {
        firstNum = Number(prompt("Zadejte první číslo: ").replace(",", "."));
        secondNum = Number(prompt("Zadejte druhé číslo: ").replace(",", "."));
        if (!(isNaN(firstNum))&&!(isNaN(secondNum))) {
            break;
        }
        else { continue; }
    }
    while (true) {
        operator = prompt('vyberte operaci(+|-|/|*): ');
        if (operator == '+'||'-'||'/'||'*') {
            break;
        }
        else { continue; }
    }
    if (operator == "+") {
        console.log(`Váš výsledek je: ${add(firstNum, secondNum)}`)
    }
    else if (operator == "-"){
        console.log(`Váš výsledek je: ${subtract(firstNum, secondNum)}`)
    }
    else if (operator == "*"){
        console.log(`Váš výsledek je: ${multiply(firstNum, secondNum)}`)
    }
    else{
        console.log(`Váš výsledek je: ${divide(firstNum, secondNum)}`)
    }
    let continueDecision = prompt('Přejete si pokračovat?(ano/ne): ')
    if (continueDecision == 'ano') {
        continue;
    }
    else { break; }
}

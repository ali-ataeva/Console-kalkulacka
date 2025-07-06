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
    let firstNum = prompt('Vložte první číslo: ');
    let secundNum = prompt('Vložte druhé číslo: ');
    while (true) {
        let operator = prompt('vyberte operaci +|-|/|*: ');
        if (operator == "+"||"-"||"/"||"*") {
            break;
        }
        else { continue; }
    }
    
}

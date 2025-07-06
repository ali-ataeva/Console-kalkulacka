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

function getNumber(promptForUser) {
    while(true){
        let conversionResult = Number(prompt(promptForUser).replace(",", "."));
        if(!isNaN(conversionResult)){
            return conversionResult
        }
        console.warn("spatny cislo debile")
    }
}

const operations = {
    "+": add,
    "-": subtract,
    "/": divide,
    "*": multiply,
}

while (true) {
    let firstNum;
    let secondNum;
    let operator;


    firstNum = getNumber("Zadejte první číslo: ")
    secondNum = getNumber("Zadejte druhé číslo: ")


    while (true) { // domaci ukol extrahovat do funkce!!
        operator = prompt('vyberte operaci(+|-|/|*): ');
        if (operator == '+'||'-'||'/'||'*') {
            break;
        }
        // else { continue; }
    }
    // switch (operator) {
    //     case "+":
    //         console.log(`Váš výsledek je: ${add(firstNum, secondNum)}`);
    //         break;
    //     case "-":
    //         console.log(`Váš výsledek je: ${subtract(firstNum, secondNum)}`);
    //         break;
    //     case "*":
    //         console.log(`Váš výsledek je: ${multiply(firstNum, secondNum)}`);
    //         break;
    //     default:
    //         console.log(`Váš výsledek je: ${divide(firstNum, secondNum)}`);
    // }
    let wantedOperation = operations[operator]
    console.log(`Váš výsledek je: ${wantedOperation(firstNum, secondNum)}`);
    let continueDecision = prompt('Přejete si pokračovat?(ano/NE): ') // nechat usera vedet o defaultni moznosti
    if (continueDecision.toLocaleLowerCase != 'ano') { // toleruje "Ano"
        break;
    }
}

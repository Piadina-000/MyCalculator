let allBtn = document.querySelectorAll("button");

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

let result = document.getElementById("result");

allBtn.forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", (event) => {
        console.log(event.target.attributes);

        let operation = event.target.attributes["operation"].value;

        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);
        
        if (isNaN(a) || isNaN(b)) {
            result.innerText = "Error: Inserisci numeri validi";
            return;
        }

        let res = performOperatione(a, b, operation);
        result.innerText = "result" + res;

        if(res instanceof Error){
            result.innerText = "Error: " + res.message;
        }else{
            result.innerText = "Risultato: " + res;
        }

    });
});

/**
 * Esegue l'operazione tra a e b 
 * @param a {number}
 * * @param b {number}
 * * @param operetion {string}
 * * @returns  {number/Error}
 */
function performOperatione(a, b, operation) {

    console.log(a,b);
    switch (operation) {
        case "+":
            return somma(a, b);
            
        case "-":
            return sottrazione(a, b);
        case "/":
            return divisione(a, b);
        case "*":
            return moltiplicazione(a, b);
        default:
            return Error("Operazione non valida");
    }
}

function somma(a, b) {
    return a + b;
}

function sottrazione(a, b) {
    return a - b;
}

function divisione(a, b) {
    return a / b;
}

function moltiplicazione(a, b) {
    return a * b;
}

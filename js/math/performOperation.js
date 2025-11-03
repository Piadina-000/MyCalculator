/**
 * Esegue l'operazione tra a e b 
 * @param a {number}
 * * @param b {number}
 * * @param operetion {string}
 * * @returns  {number/Error}
 */

import {somma, sottrazione, divisione, moltiplicazione} from "./math.js";

export function performOperation(a, b, operation) {

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


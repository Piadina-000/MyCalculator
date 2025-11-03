/**
 * Esegue l'operazione tra a e b 
 * @param a {number}
 * * @param b {number}
 * * @param operetion {string}
 * * @returns  {number/Error}
 */

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

export {somma, sottrazione, divisione, moltiplicazione};
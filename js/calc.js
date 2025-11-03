/**
 * Esegue l'operazione tra a e b 
 * @param a {number}
 * * @param b {number}
 * * @param operetion {string}
 * * @returns  {number/Error}
 */

import {performOperation} from "./math/performOperation.js";
import {MyLog} from "./log/log.js";

let allBtn = document.querySelectorAll("button");

let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");

let result = document.getElementById("result");

let memory = document.getElementById("memory");

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

        let res = performOperation(a, b, operation);
        result.innerText = "result" + res;

        if(res instanceof Error){
            result.innerText = "Error: " + res.message;
        }else{
            result.innerText = "Risultato: " + res;

            let myLog = new MyLog(a, b, operation);

            let btnLoad = document.createElement("button");
            btnLoad.innerText = "LOAD";
            btnLoad.addEventListener("click", myLog.fnLoad);

            let logLine = document.createElement("li");
            logLine.innerText = `Eseguito ${myLog.val1} ${myLog.operation} ${myLog.val2}`;
            logLine.append(btnLoad);

            memory.appendChild(logLine);
        }

    });
});
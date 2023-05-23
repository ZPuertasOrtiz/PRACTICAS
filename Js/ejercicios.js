// //EJERCICIO 1

function cuentaTokenesSoloDigitos (str){
let newStr = str.trim().split(" "); //Con trim quito los espacios de final e inicio, con split separo 
let tokens =0;


for (let i=0; i<newStr.length; i++){  //Para recorrer array
    let isNumber = true; //Cuando sea false rompe el while
    let counter = 0; //variable para recorrer el str, cuando sea mayor al leng del str rompe el while
    while(isNumber && counter<newStr[i].length){ 
         if(!Number(newStr[i][counter]) && Number(newStr[i][counter])!==0 ){ //si un caracter del str no es digito, pasa a false
            isNumber=false;
         }  
         counter++;        
    }
    if(isNumber){  //si nunca fue false, añadirá un token (todos eran digito)
        tokens++;      
    }
    
}
return (tokens);

}
// console.log(cuentaTokenesSoloDigitos("una cadena sin digitos"))
// console.log(cuentaTokenesSoloDigitos("una cadena d3 67 digit0s"))
// console.log(cuentaTokenesSoloDigitos("una cadena 3 sin 456 789 00000 "))
// console.log(cuentaTokenesSoloDigitos(" 00000 "))
 

// //FIN------------------------------------------------------------------------------------------


//EJERCICIO 2

// function sumaPrimerosPares(num){
//     let suma=2;
//     while (suma<=num){
//         suma+=2;
//     }
//     return suma;
// }
// console.log(suma)
let ent =42;

console.log(parseInt("1001", 2))
console.log(typeof(ent.toString()))
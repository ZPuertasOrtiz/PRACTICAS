// //EJERCICIO 1

// function cuentaTokenesSoloDigitos (str){
// let newStr = str.trim().split(" "); //Con trim quito los espacios de final e inicio, con split separo 
// let tokens =0;


// for (let i=0; i<newStr.length; i++){  //Para recorrer array
//     let isNumber = true; //Cuando sea false rompe el while
//     let counter = 0; //variable para recorrer el str, cuando sea mayor al leng del str rompe el while
//     while(isNumber && counter<newStr[i].length){ 
//          if(!Number(newStr[i][counter]) && Number(newStr[i][counter])!==0 ){ //si un caracter del str no es digito, pasa a false
//             isNumber=false;
//          }  
//          counter++;        
//     }
//     if(isNumber){  //si nunca fue false, añadirá un token (todos eran digito)
//         tokens++;      
//     }
    
// }
// return (tokens);

// }
// console.log(cuentaTokenesSoloDigitos("una cadena sin digitos"))
// console.log(cuentaTokenesSoloDigitos("una cadena d3 67 digit0s"))
// console.log(cuentaTokenesSoloDigitos("una cadena 3 sin 456 789 00000 "))
// console.log(cuentaTokenesSoloDigitos(" 00000 "))
 

// //FIN------------------------------------------------------------------------------------------


//EJERCICIO 2

// function sumaPrimerosPares(num){
//     let add=0;
//     let nextNumber=2;
//     for (let i=1; i<=num; i++){
//         add = add + (nextNumber);
//         nextNumber +=2;
//     }
//     return add;
// }
// console.log(sumaPrimerosPares(5))

// //Otra solución: suma de primeros pares

// const sumaPrimerosPares2 = (num) => num*(num+1);
// console.log(sumaPrimerosPares2(5))
// //FIN------------------------------------------------------------------------------------------

//EJERCICIO 3

// function nextInFibonnacci(num){
//     let fibonacci = [1,1];
//     let nextNumber = 0;
//     while(num>=nextNumber){
//      nextNumber = fibonacci.at(-1)+fibonacci.at(-2);
//      fibonacci.push(nextNumber);
//     }
//     return nextNumber;
// }

// //Para evitar generar toda la secuencia:
// function nextInFibonnacci2(num){
//     let current =1;
//     let previous = 1;

//     while (current<num){
//         let next = current +previous;
//         previous =current;
//         current=next;
//     }
//     return current;

// }

// console.log(nextInFibonnacci(110))
// console.log(nextInFibonnacci2(110))

// //FIN------------------------------------------------------------------------------------------

// //EJERCICIO 4
// function wordsWithDigit (str){
//     let newStr = str.trim().split(" ");  
//     let words =0;
    
//     for (let i=0; i<newStr.length; i++){  
//         let isNumber = true; 
//         let counter = 0; 

//         while(isNumber && counter<newStr[i].length){ 
//                 if(Number(newStr[i][counter]) || Number(newStr[i][counter])===0 ){ 
//                     isNumber=false;
//                     words++;
//                 }  
//                 counter++;     
//         }
       
        
//     }
//     return words;
// }
// console.log(wordsWithDigit("T3ngo 000 palabras 0on dígit0s "))

// //FIN------------------------------------------------------------------------------------------


//EJERCICIO 5


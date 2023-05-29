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

// const invertirDigitos = (n) => {
//   return n.toString().split("").map(Number).reverse() 
// }

// console.log(invertirDigitos(-4263))


// //FIN------------------------------------------------------------------------------------------

//EJERCICIO 6
// const invertirDigitosNegativos = (n) => {
//     let abs = Math.abs(n);
//     return abs.toString().split("").map(Number).reverse() 
// }

// console.log(invertirDigitosNegativos(-4263))

// //FIN------------------------------------------------------------------------------------------

//EJERCICIO 7


// const contarLetra = (str)=>{
//     let counter =0;
//     for (let i=0; i<str.length; i++){
//         str[i].toUpperCase()=="A"? counter++ : "";
//     }
//     return counter;
// }
// console.log(contarLetra("anaranjado"));
// console.log(contarLetra("Algoritmos y programación"));
// //FIN------------------------------------------------------------------------------------------

//EJERCICIO 8

// const contarLetraA = (str,character) => {
//     let counter =0
//     switch (character){
//         case "A":
//             for (let i=0; i<str.length; i++){
//                 str[i] =="A"? counter++ : "";
//             }
//         break;
//         case "a":
//             for (let i=0; i<str.length; i++){
//                 str[i] =="a"? counter++ : "";
//             }
//         break;
//         default: counter =0;
//     }

//     return counter;
// }
// console.log(contarLetraA("Algoritmos y programación","A"));

//EJERCICIO 9
 //entendí mal y puse los primos XD
// const firstPrimeNumbers = (n)=>{
//     primeNumbers =[1];
//     for (let i=2; i<=n; i++){
//         if (isPrime(i)){
//             primeNumbers.push(i);
//         }
//     }
//     return primeNumbers;
// }

// const isPrime = (dividend)=>{
//    let dividers =1;
//     for (let i=2; i<=dividend; i++){
//         if(dividend%i ===0)dividers++;
//         if (dividers>2) return false;
//     }
//     return true;  
// }
 
// console.log(firstPrimeNumbers(13))

//Este si
//  const firstOddNumbers =  (n) => {
//   let counter =1;
//   let odd =[] 
//   while (counter<=n){
//     odd.push(2*counter-1);
//     counter++;
//   }
//   return odd;
//  }

//  console.log(firstOddNumbers(5))

//EJERCICIO 10
// function vowelsCounter (str){
//     return str.match(/[aeiouáéíóú]/ig).length;
// }

// console.log(vowelsCounter("Inteligencia Artificial"))
// console.log(vowelsCounter("Lenguaje de programación"))

// //FIN------------------------------------------------------------------------------------------



//EJERCICIO 11

const pattern = (n)=>{
    let ast ="*";
    let space = " ";
    
    for (let i=1; i<=n;i++ ){ 
         console.log(space.repeat(n-i)+ast.repeat(2*i-1)+space.repeat(n-i))
    }
    for (let j=n-1; j>0;j--){
        console.log(space.repeat(n-j)+ast.repeat(2*j-1)+space.repeat(n-j))
    }  
      
}
    
pattern(4)

// //FIN------------------------------------------------------------------------------------------

//EJERCICIO 12

// const multipleOfTen = (arr)=>{
//     let multiples = [];
//     arr.forEach(number =>{
//         if(number%10 === 0) multiples.push(number);
//     })
//     return multiples;

// }
//USANDO FILTER
// const multipleOfTen2 =(arr)=>{
//     return arr.filter(number=>number%10===0)
// }

// console.log(multipleOfTen2([20,5,100,81,7,11]))
// console.log(multipleOfTen2([100000,1,120,12]))



//FIN------------------------------------------------------------------------------------------

//EJERCICIO 13
//  const powOfTwo = (n)=>{
//     let pows =[];
//     for(let i=0; i<n; i++){
//         pows.push(2**i);
//     }
//     return pows;
//  }
//  console.log(powOfTwo(20))

 //FIN------------------------------------------------------------------------------------------


 //EJERCICIO 14



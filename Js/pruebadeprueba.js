// //hallar cuadrado exacto
// function devolvercuadrados(arr){
//     let newArr =[];
//     for (let i=0; i<arr.length;i++){
//         let raiz = Math.pow(arr[i],0.5)
//         console.log(raiz)
//         if (raiz%1===0){
//          newArr.push(arr[i]);
         
//         }
//     }
//     console.log(newArr)
//   return newArr;
// }


// devolvercuadrados(4,5,100,81,7,11)

//sumar desde los números
function cadenaDeTexto(str){
    let newStr = str.split(" ");
    let numeros ={
        uno :1, "dos":2, "tres":3, "cuatro":4, "cinco":5, "seis":6, "siete":7, "ocho":8, "nueve":9,
    }
    console.log(newStr)
    let suma =0;
    for (let i=0; i<newStr.length; i++){
       
        if (newStr[i] in numeros){
            let valor =numeros[newStr[i]];
            suma+=valor;
        }
      
    }
    console.log(suma)
    return suma;
}

cadenaDeTexto("uno zero tres uno")
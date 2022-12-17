
const arreglo=[];
let pares = [];
let impares = [];
for (let i=0; i<9; i++)
{
arreglo[i]=i * 1;
}

let tamaño=arreglo.length;
console.log("El tamaño es : "+tamaño);
console.log("contenido del arreglo"+arreglo);
if(i%2==0){
    impares.push(arreglo[i]);

        
    console.log("los numeros impares son "+impares);

}else{
    pares.push(arreglo[i])
    console.log("los numeros pares son "+pares);
}


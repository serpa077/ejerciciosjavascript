
while (i<5){
 console.log("vuelta n: "+i);
    i++;
7}

/nota= window.prompt('digite su nota numero 1');

const nota = Number(prompt("Digite su nota número 1: "));
console.log("la nota ingresada es "+ nota)

const nombre = window.prompt("Digite su nombre: ");
const nota = window.prompt("Digite su nota número 2: ");

console.log("Bienvenido a su autoevaluación", nombre)
console.log("la nota ingresada es "+ nota)


if(nota < 2){
    console.log('Repita la materia')
} else if(nota >=0 && nota <=10 ) {
    console.log('aprobo')
} else if(nota >= 0 && nota <=5) {
    console.log('reprobo')
} 
 else {
    console.log('la nota ingresada no es valida')
}
const nombre = window.prompt("Digite su nombre: ");
const salario = window.prompt("Digite salario: ");

console.log("Bienvenido ", nombre)
console.log("la nota ingresada es "+ salario)


if(salario < 699999){
    let  pension=0.2
    let  aux_transporte=0.6
    console.log("salario es"+salario*pension);
} else if(salario >= 700000  && nota <= 700000  ) {
    let  pension=0.4
    let  aux_famililiar=12000
    console.log("salario es"+salario*pension+ aux_famililiar    )
} else if(salario >= 1000000 {
    let  pension=0.6
    console.log("salario es"+salario*pension  )
}
 else {
    console.log('su salario es'+salario)
}
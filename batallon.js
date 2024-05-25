let categoria = prompt('ingrese en que categoria se encuentra: 1/2/3/4');
let sueldo = parseInt(prompt('ingrese su sueldo sin comas ni puntos'));

if(sueldo == ' ' && categoria == 1 ){
    console.log()
}

if(sueldo < 300000){
    console.log(`a su sueldo se le aumento un 12%, su sueldo total es: ${sueldo * 0.12 + sueldo}`);
}else if(sueldo < 500000 ){
    console.log(`a su sueldo se le aumento un 10%, su sueldo total es ${sueldo * 0.10 +sueldo}`);
}else if(sueldo > 500000){
    console.log(`a su sueldo se le aumento un 5% su sueldo total es ${sueldo * 0.5 + sueldo}`);
}else{
    console.log("Usted no es beneficiario de ningun aumento");
}
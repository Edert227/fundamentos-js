// Ejercicio 7 - Declarar dos variables numéricas, sumar y mostrar en pantalla y alerta

let numero1 = 15;
let numero2 = 8;
let suma = numero1 + numero2;

// Mostrar los valores y resultado en el documento
document.getElementById("numero1").innerHTML = "Número 1: " + numero1;
document.getElementById("numero2").innerHTML = "Número 2: " + numero2;
document.getElementById("resultado").innerHTML = numero1 + " + " + numero2 + " = " + suma;

// Mostrar el resultado en un mensaje emergente
alert("El resultado de la suma es: " + suma);

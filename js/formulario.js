//crear funciones en java JS

//function calcularSuma(){
//	alert("Hola Bienvenido!");
//}

function Suma(numero1,numero2){

	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);

	sum = n1+n2;

	//alert("La suma es: "+ sum);

	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}

function Resta(numero11,numero22){

	let n1,n2,res;
	n1=parseFloat(numero11);
	n2=parseFloat(numero22);

	res = n1-n2;

	//alert("La resta es: "+ res);

	document.getElementById("resultadoResta").innerHTML="<h1>La resta es: " + res +"</h1>";
}

function Mult(numero111,numero222){

	let n1,n2,mult;
	n1=parseFloat(numero111);
	n2=parseFloat(numero222);

	mult = n1*n2;

	//alert("La multiplicación es: "+ mult);

	document.getElementById("resultadoMult").innerHTML="<h1>La multiplicación es: " + mult +"</h1>";
}

function Div(numero1111,numero2222){

	let n1,n2,div;
	n1=parseFloat(numero1111);
	n2=parseFloat(numero2222);

	div = n1/n2;

	//alert("La division es: "+ div);

	document.getElementById("resultadoDiv").innerHTML="<h1>La division es: " + div +"</h1>";
}






/*
let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
document.write("Hola "+ nombre);
document.write("<br> Tu edad es: " + edad);


let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro numero: "));
document.write(num1 + num2);
*/




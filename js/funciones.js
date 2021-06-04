//Mi primer archivo de javascript con funciones
//Esta linea nos escribe hola mundo
document.write("<h1>Hola mundo</h1>");

//Para crear una variable es con la palabra var o Let
let nombre = "Diego";
var Edad ="18";

document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"+
		"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
		"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
		"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"+
		"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
		"proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write(nombre + " tu edad es: " + Edad);

document.write("<br>");

num1 = 9;
num2 = 8;
document.write(num1+num2);
document.write("<br>");
document.write(num1,num2);



//tipos de datos en JS

//Numero
let numero = 20; 

//Decimal
let numero2= 20.6;

//Cadena String
let cadena = "Los mejores programadores son del 3a";

document.write(numero);
document.write(numero2);
document.write(cadena);

//Tipos de arreglos
var amigos = ["Juan","Pedro","Pablo"];

document.write(amigos);

//Objetos
let objetos={color:"azul", altura:150, ancho:50};

document. write(objetos);

//No definir variables
let nombre2; 
document.write(nombre2);

//Valores invalidos
var x=10;
var y="Hola mundo";

document.write(x*y);



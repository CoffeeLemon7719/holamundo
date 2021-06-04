//Condicionales
var a=18;
var b=12;
//Identificar el numero mayor

if (a>b) {
	document.write("El numero mayor es : " +a);
}else{
	document.write("El numero mayor es : " +b);
}


//Ciclo for
//Numero del 0 a 10
for (var i = 0; i < 11; i++) {
	document.write(i);
}

//Ciclo While
var i=0;
while(i<11){
	document.write("<br>" + " " +i);
	i++;
}

//Ciclo do while
var x=0;
do{
	document.write("<br>" + " " +x);
	x++;
}while(x<11);

//Seleccion multiple
//Casos switch case
//Validar si un numero entre 1 y 4 1=hijo 2=hija 3=padre 4=madre
var familia = 1;
switch(familia){
	case 1:
	document.write("<br>Eres el hijo");
	break;

	case 2:
	document.write("<br>Eres la hija");
	break;

	case 3:
	document.write("<br>Eres el padre");
	break;

	case 4:
	document.write("<br>Eres la madre");
	break;

	default:
	document.write("<br>Opcion no valida");
	break; 



}
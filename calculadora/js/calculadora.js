//VARIABLE GLOBAL
var operador = "";

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function numeros(num)
{
	if(operador == "") //SIGNIFICA QUE ESCRIBÍ EN EL OPERANDO1
	{
		var valor = document.calculadora.operando1.value;
		if(valor == "0") //VACIAR LA CAJA
		{
			document.calculadora.operando1.value = "";
		}
		//CONCATENAR LOS VALORES DE NUM CON LOS DEL OPERANDO1	
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
		
	}
	else //ESCRIBIR EN EL OPERADOR2
	{
		var valor = document.calculadora.operando2.value;
		if(valor == "0") //VACIAR LA CAJA
		{
			document.calculadora.operando2.value = "";
		}
		//CONCATENAR LOS VALORES DE NUM CON LOS DEL OPERANDO1	
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
}

function operadores(ope)
{
	operador = ope;
}

function borrar()
{
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}
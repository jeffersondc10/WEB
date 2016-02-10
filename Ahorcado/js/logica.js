var palabra = "Piragua";
var hombre, l, espacio;
//Declarar la clase ahorcado
var Ahorcado = function (ctx)
{
    //this es las variables locales de la clase, accesibles en toda la clase
    //this.contexto es el context de dibujo del canvas, que llega por parametro
    //desde la variable ctx
	this.contexto = ctx;
	this.maximo = 5;
	this.intentos = 0;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto; //Asigno el objeto de contexto

	    //Dibujando el poste
	    dibujo.beginPath();
	    dibujo.moveTo(150,100);
	    dibujo.lineTo(150,50);
	    dibujo.lineTo(400,50);
	    dibujo.lineTo(400,350);
	    dibujo.lineWidth = 15;//Ancho en pixeles
	    dibujo.strokeStyle = "#000";
	    dibujo.stroke();
	    dibujo.closePath();

	    if(this.intentos > 0)
    	{
	        // intentos = 1 --> rostro
	        dibujo.beginPath();
	        dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
	        dibujo.strokeStyle = "red";
	        dibujo.lineWidth = 5;
	        dibujo.stroke();
	        dibujo.closePath();

	        if(this.intentos > 1)
	        {
		       	// intentos = 2 --> torso
	            dibujo.beginPath();
	            dibujo.moveTo(150,180);
	            dibujo.lineTo(150,250);
	            dibujo.strokeStyle = "red";
	            dibujo.lineWidth = 5;
	            dibujo.stroke();
	            dibujo.closePath();

	            if(this.intentos > 2)
	            {
	                // intentos = 3 --> brazos
	                dibujo.beginPath();
	                dibujo.moveTo(120,220);
	                dibujo.lineTo(150,180);
	                dibujo.lineTo(180,220);
	                dibujo.strokeStyle = "red";
	                dibujo.lineWidth = 5;
	                dibujo.stroke();
	                dibujo.closePath();

	                if(this.intentos > 3)
	                {
	                    // intentos = 4 --> piernas
	                    dibujo.beginPath();
	                    dibujo.moveTo(120,290);
	                    dibujo.lineTo(150,250);
	                    dibujo.lineTo(180,290);
	                    dibujo.strokeStyle = "red";
	                    dibujo.lineWidth = 5;
	                    dibujo.stroke();
	                    dibujo.closePath();	

						if(this.intentos > 4)
						{
	                        // intentos = 5 --> ojos muertos
	                        dibujo.beginPath();
	                        //Ojo izquierdo
	                        dibujo.moveTo(125,120);
	                        dibujo.lineTo(145,145);
	                        dibujo.moveTo(145,120);
	                        dibujo.lineTo(125,145);

	                        //Ojo derecho
	                        dibujo.moveTo(155,120);
	                        dibujo.lineTo(175,145);
	                        dibujo.moveTo(175,120);
	                        dibujo.lineTo(155,145);

	                        dibujo.strokeStyle = "blue";
	                        dibujo.lineWidth = 5;
	                        dibujo.stroke();
	                        dibujo.closePath();						}


	                }

	            }

	        }

		}

}

Ahorcado.prototype.trazar = function ()
{
    this.intentos++;
    if(this.intentos >= this.maximo)
    {
        this.vivo = false;
        alert("¡Estás muerto!");
        
    }
    this.dibujar();

}


function inicio(){

	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 500;
	var contexto = canvas.getContext("2d"); //contexto del canvas para poder dibujar
	hombre = new Ahorcado(contexto);

	// hombre.trazar(); Esta es la función que va dibujando paso a paso (Solo son 5 intentos)
	//Convertir a mayusculas --> string.toUpperCase();
	//Convertir a minusculas --> sting.toLowerCase();
	palabra = palabra.toUpperCase();

	//declaro un array con espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);

	//Funcion que se dispara al dar clic en el boton
	b.addEventListener("click", agregarLetra);

	mostrarPista(espacio);

}

function agregarLetra()
{
	//Valor de una caja de un documento HTML para ser llamado es la propiedad value.
	var letra = l.value;
	l.value = "";
	document.getElementById("letra").focus();
	//anexar opcion de que el focus regrese a la caja de texto, para agregar letras.
	mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	for(p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);
	if(!encontrado)
	{
		ahorcado.trazar();
	}
	if(!ahorcado.vivo)
	{
		//mostrar palabra entera al morir
	}
}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i = 0; i<largo; i++)
	{
		if(espacio[i] != undefined) // undefined indica si la variable está vacía
		{
			texto += espacio[i] + " "; 
		}
		else
		{
			texto += "_ ";
		}
			
		pista.innerText = texto;
	}

}
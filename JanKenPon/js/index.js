/*
Author: Alexander Protto Sanchez
E-mail: elprotto@gmail.com
Github: elprotto
Twitter: @elprotto
Year: 2016
Language: Javascript, Vanilla.

Description: Codigo correspondiente a la logica del juego JanKenPon.
	En el juego el usuario elige una de tres opciones (Piegra, Papel o Tijera).
	De igual manera el juego elige una de las tres opciones y basado en las reglas
	se genera puntaje en cada partida. Finalmente el ganador de 5 partidas gana el juego.

Comments: El codigo puede ser usado libremente por quien lo necesite sin ningun condicionamiento,
	en caso de desear retribuir algo al autor, es sufucuente con los creditos del codigo.
	En caso de querer colaborar a las mejoras del codigo cualquier aporte será recibido.

*/
var fondo = new Image();
fondo.src = "assets/images/bg.png";

function juego()  {
	//console.log('Mensaje de prueba');
	ctx = document.getElementById('juego').getContext('2d');

	// Aqui posiciono el fondo del canvas
	ctx.scale(1.16,0.85);
	ctx.drawImage(fondo,0,0);

	// Condiciono la pulsacion de las teclas P,R,T
	// Presionar P -> Selecciona Papel
	// Presionar R -> Selecciona Piedra
	// Presionar T -> Selecciona tijera
	// Primero llevo a la variable key_press la tecla pulsada
	// Cada tecla dispara una animacion en el canvas
	document.addEventListener('keydown', function(event){
		// Obtengo la letra correspondiente al codigo presionado 
		var key_press = String.fromCharCode(event.keyCode);
		//console.log(event.keyCode+" | "+key_press);
		/*
		Defino el comportamiento para cada tecla presionada
		*/
		if (key_press == "P"){
			console.log('Seleccionado Papel');
		} else if(key_press == "R"){
			console.log('Seleccionado Piedra');
		} else if(key_press == "T"){
			console.log('Seleccionado Tijera');
		}

	});

	/*
		El evento mousedown permite elegir la animacion correspondiente 
		a la pulsacion de los botones de piedra, papel o tijera.
		Llamando una función anonima puedo seleccionar el area de cada boton
		y con un condicional puedo llamar a la funcion correspondiente.
	*/
	document.addEventListener('mousedown', function(event){
		/*
		Con las variables mX y mY selecciono las coordenadas del puntero
		al momento de presionar el mouse izquierdo.
		*/
		var mX = event.clientX;
		var mY = event.clientY;
		// Selecciono el elemento del document correspondiente a cada ID.
		var piedra = document.getElementById("piedra");
		var papel  = document.getElementById("papel");
		var tijera = document.getElementById("tijera");
		// Es llevada a una variable el area de cada boton
		// condicionPiedra -> El area del objeto piedra
		// condicionPapel  -> El area del objeto papel
		// condicionTijera -> El area del objeto tijera
		var condicionPiedra = mX >= piedra.offsetLeft && mX < piedra.offsetWidth+piedra.offsetLeft && mY >= piedra.offsetTop && mY < piedra.offsetTop+piedra.offsetHeight;
		var condicionPapel  = mX >= papel.offsetLeft && mX < papel.offsetWidth+papel.offsetLeft && mY >= papel.offsetTop && mY < papel.offsetTop+papel.offsetHeight;
		var condicionTijera = mX >= tijera.offsetLeft && mX < tijera.offsetWidth+tijera.offsetLeft && mY >= tijera.offsetTop && mY < tijera.offsetTop+tijera.offsetHeight;
		//console.log(piedra.offsetTop+" | "+piedra.offsetHeight)
		/*
		Defino el comportamiento para cada boton seleccionado
		*/
		if (condicionPiedra){
			console.log('Seleccionaste Piedra!')
		} else if (condicionPapel){
			console.log('Seleccionaste Papel!')
		} else if (condicionTijera){
			console.log('Seleccionaste Tijera!')
		}


	});



}
window.onload = juego;
//Funciones

// Identificar el movimiento del Scroll

$(window).scroll(function(){

	// Levo el valor del scroll a la variable ventanaScroll, de 0 al top
	var ventanaScroll = $(this).scrollTop();
	//console.log(ventanaScroll)

	// Modifico los valores css de la clase logo
	$('.logo').css({
		// Edito el valor de translate de la propiedad transform
		'transform' : 'translate(0px, '+ ventanaScroll /2 +'%)'
	});

	// Modifico los valores css de la clase back-bird
	$('.back-bird').css({
		// Edito el valor de translate de la propiedad transform
		'transform' : 'translate('+ ventanaScroll /4 +'%, '+ ventanaScroll /4 +'%)'
	});

	// Modifico los valores css de la clase fore-bird
	$('.fore-bird').css({
		// Edito el valor de translate de la propiedad transform
		'transform' : 'translate(0px, -'+ ventanaScroll /15 +'%)'
	});

	//Animando la grilla de los modelos
	//Animacion cuando el div se halla en el top
	if(ventanaScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)){

		//console.console.log("hi");
		$('.clothes-pics figure').each(function(i){

			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');

			}, (700 * (Math.exp(i * 0.14))) - 700);
		});
	}

	if(ventanaScroll > $('.large-window').offset().top - $(window).height()){

		//console.console.log('hi');
    $('.large-window').css({'background-position':'center '+ (ventanaScroll - $('.large-window').offset().top) +'px'});

		var opacity = (ventanaScroll - $('.large-window').offset().top + 400) / (ventanaScroll / 5)

		$('.window-tint').css({'opacity': opacity})
	}

	if(ventanaScroll > $('.blog-posts').offset().top - $(window).height()){

		var offset = Math.min(0,ventanaScroll - $('.blog-posts').offset().top + $(window).height() - 800);

		$('.post-1').css({'transform': 'translate('+ offset + 'px, '+ Math.abs(offset) +'px)'});

		$('.post-3').css({'transform': 'translate('+ Math.abs(offset * 0.2) + 'px, '+ Math.abs(offset) +'px)'});
	}
});

//alert('Está funcionando');

//Velocidad de ejecucion de funciones cuando se carga el DOM
//No estan por orden, verificar funcionamiento

/*
window.onload = function(){
	alert('loaded')
}

$(document).ready(function(){
	alert('loaded1')
})

$().ready(function(){
	alert('loaded2')
})

$(function(){
	alert('loaded3')
})
*/


$(function() {

	var $contenedorSeries = $('#app-body').find('.tv-shows');
		//Funcion para renderizar las series en el DOM
	function renderSerie(series){
		series.forEach(function (serie){
			var article = template
				.replace(':name:', serie.name)
				.replace(':img:', serie.image.medium)
				.replace('summary', serie.summary)
				.replace(':img alt:', serie.name + "Logo");
			//Agrego efecto mientras se muestran los shows
			var $article = $(article);
			$article.hide();
			$contenedorSeries
				.append($article.fadeIn(3000));

		})
	}

/**
 Defino el comportamiento cuando se busca un programa
*/

	$('#app-body')
		.find('form')
		.submit(function (ev) {
			ev.preventDefault();//console.log(this);
			//selecciono el text del input
			var programaBuscado = $(this)
				.find('input[type="text"]')
				.val();
			//console.log(programaBuscado);
			$contenedorSeries.find('.tv-show').remove();
			var $loader = $('<div class="loader">');
			$loader.appendTo($contenedorSeries);
			$.ajax({
				url: 'http://api.tvmaze.com/search/shows',
				data: { q: programaBuscado },
				success: function (resBusqueda, textStatus, xhr_algo){
					//console.log(resBusqueda);
					$loader.remove();
					var retornoConsulta = resBusqueda.map(function(retornoConsulta){
						return retornoConsulta.show;
					})

					renderSerie(retornoConsulta);
				}
			})
	})

	//Defino la plantilla de los progrmas a mostrar
	var template = '<article class="tv-show">' +
		'<div class="left img-container">' +
			'<img src=":img:" alt=":img alt:"/>' +
		'</div>' +
		'<div class="right info">' +
			'<h1>:name:</h1>' +
			'<p>:summary:</p>' +
		'</div>' +
	'</article>';


	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function (series, textStatus, xhr_algo){
			//console.log(data);
			// Quito el loader css del document
			$contenedorSeries.find('.loader').remove();
			renderSerie(series);

		}
	})
})





$("#responsiveBusqueda").click(function(){
	$("#divEscondido").toggle();
})

/*SLIDERS*/

var slider = new Slider("#ex8", {
	tooltip: 'always'
});




$("#ex2").slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

/*FIN SLIDERS*/


/*FILTROS*/

var myArr;
var requestFiltro = new XMLHttpRequest();
var url = "./listaDeProductos.json";
requestFiltro.onload = function() {
	if (this.readyState == 4) {
		if (this.status == 200) {
			console.log('Exito 2')
			myArr = JSON.parse(this.responseText);
			ShowLista(myArr);
		}
		else{
			alert('Un error');
		}
	}
	else {
		alert('La página se está cargando');
	}
};
requestFiltro.open("POST", url, true);
requestFiltro.send();



var valores={};

function ShowLista(arr) {

	$('#botonFiltro').click(function(evnt){
		
		valores = {};
		evnt.preventDefault();

		$('.filtro select').each(function(){
			valores[this.name]=this.value;
		})

		$('.filtro input:checked[type=checkbox]').each(function(){
			valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
		})

		$('.filtro input').not('.filtro input[type=checkbox]').each(function(){
			valores[this.name]=(valores[this.name]?valores[this.name]+',':'')+this.value;
		})

		CrearListaFiltrada(valores, myArr);	
	});
};


function CrearListaFiltrada(valores, myArr){
	var listaFiltrada = [];
	for(i=0; i<myArr.length;i++){
		if ((myArr[i].cantidad == valores.cantidad)&&
			(myArr[i].categoria == valores.categoria)&&
			(myArr[i].preferencia == valores.preferencia)){
			listaFiltrada.push(myArr[i]);
		}						
	};
	pintarPlatos(listaFiltrada);
}

function pintarPlatos(listaFiltrada){
	$(".divTableBody").empty();
	var view = [];
	var rendered = [];
	for (plato in listaFiltrada){

		view[plato] = {
			name : listaFiltrada[plato].nombre,
			precio : listaFiltrada[plato].precio.toFixed(2) + " €",
			descripción : listaFiltrada[plato].descripción,
			restaurante : listaFiltrada[plato].restaurante,
			src : listaFiltrada[plato].foto
		};

	}

	$.get("resultados.htm",function(template){

		rendered = Mustache.render(template, view);
        //rendered.appendTo($(".divTableBody"));
        $(".divTableBody").append(rendered).html();
    },'html');
}

/*FIN FILTROS*/
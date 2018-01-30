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
			console.log('Exito');
			myArr = JSON.parse(this.responseText);
			window.onload = function(){
				LSModule.CargarInputs;
				var valores = JSON.parse(window.localStorage.getItem('inputs'));
				console.log(valores);
				CrearListaFiltrada(valores, myArr);
			}
			
			if ($('#botonFiltro').click(function(e){
				e.preventDefault();
				console.log("true");
				var valores={};
				valores=LSModule.LeerInputs();
				CrearListaFiltrada(valores, myArr);
			}));
			
			//ShowLista(myArr);
			
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


var listaFiltrada = [];

function CrearListaFiltrada(valores, myArr){
	
	if (valores.categoria !== "undefined"){
		console.log("jjfklj");
		listaFiltrada = listaFiltrada.concat(myArr.filter(plato => plato.categoria == valores.categoria));
	}
	else if (valores.cantidad !== "undefined"){
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.cantidad == valores.cantidad));
	}
	else if(valores.preferencia !== "undefined"){
		console.log("sdf");
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.preferencia == valores.preferencia));
	}
	valores = {};
	var myset = new Set(listaFiltrada);
	console.log("4", myset);
	listaFiltrada = Array.from(myset);
	console.log("5", listaFiltrada);

	pintarPlatos(listaFiltrada);
	
	


	/*if (valores.categoria !== "undefined"){
		console.log("jjfklj");
		listaFiltrada = listaFiltrada.concat(myArr.filter(plato => plato.categoria == valores.categoria));
	}
	else if (valores.cantidad !== "undefined"){
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.cantidad == valores.cantidad));
	}
	else if(valores.preferencia !== "undefined"){
		console.log("sdf");
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.preferencia == valores.preferencia));
	}	*/				
	
	
	
	
	/*var valoresRx = Rx.Observable.pairs(valores)
		.map(x => {
			var [keys, values] = x;
			console.log('Key:', keys.split(","), 'Value:', values.split(","));
		});

	var myArrRx = Rx.Observable.pairs(myArr)
		.map(y => {
			var [key, value] = y;
			console.log('Key:', key.split(","), 'Value:', value);
		})
		.merge(valoresRx)
		.filter(value => value.categoria == value.values)
		
	myArrRx.subscribe (x => console.log("ddd" + x));*/

		
}



function pintarPlatos(listaFiltrada){
	
	$(".divTableBody").empty();
	var view = [];
	var rendered = [];
	for (i in listaFiltrada){

		view[i] = {
			name : listaFiltrada[i].nombre,
			precio : listaFiltrada[i].precio.toFixed(2) + " €",
			descripción : listaFiltrada[i].descripción,
			restaurante : listaFiltrada[i].restaurante,
			src : listaFiltrada[i].foto
		};

	}

	$.get("resultados.htm",function(template){

		rendered = Mustache.render(template, view);
        //rendered.appendTo($(".divTableBody"));
        $(".divTableBody").append(rendered).html();
    },'html');
}
listaFiltrada.splice(0,listaFiltrada.length);


/*FIN FILTROS*/

/*var listaFiltrada = [];
	for(i=0; i<myArr.length;i++){
		if (valores.cantidad !== null){
			
		}
		if ((myArr[i].cantidad == valores.cantidad)&&
			(myArr[i].categoria == valores.categoria)&&
			(myArr[i].preferencia == valores.preferencia)){
			listaFiltrada.push(myArr[i]);
		}						
	};
	pintarPlatos(listaFiltrada);*/
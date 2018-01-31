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

window.onload = function(){
	LSModule.CargarInputs;
	var valores = JSON.parse(window.localStorage.getItem('inputs'));
	console.log("valores:", valores);

	var myArr;
	var requestFiltro = new XMLHttpRequest();
	var url = "./listaDeProductos.json";
	requestFiltro.onload = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				console.log('Exito');
				myArr = JSON.parse(this.responseText);
				CrearListaFiltrada(valores, myArr);

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

	$('#botonFiltro').click(function(e){
		localStorage.removeItem("inputs");
		valores = {};
		console.log("true");
		valores=LSModule.LeerInputs();
		console.log('valores2:', valores);
		CrearListaFiltrada(valores, myArr);
	});
}



var listaFiltrada = [];

function CrearListaFiltrada(valores, myArr){
	var prefer = ["categoria", "cantidad", "preferencia", "pic", "temp"];

	for(let k=0;k<prefer.length;k++){
		if(valores[prefer[k]] !== null){
		console.log("keys", Object.keys(valores));
		console.log('prefer is not null');
			if(valores[prefer[k]].split(",").length==1){
				listaFiltrada = listaFiltrada.concat(myArr.filter(plato => {
					return plato[prefer[k]] == valores[prefer[k]]
				}));
			}
			else{
				for(let i=0; i<valores[prefer[k]].split(",").length;i++){
					listaFiltrada = listaFiltrada.concat(myArr.filter(plato => {
						return plato[prefer[k]] == valores[prefer[k]].split(",")[i]
					
					}));
				}
			}
		}
	}
	

	var myset = new Set(listaFiltrada);
	listaFiltrada = Array.from(myset);

	pintarPlatos(listaFiltrada);
	

	/*if (valores.categoria !== null){
		console.log("keys", Object.keys(valores));
		console.log('categoria is not null');
		if(valores.categoria.split(",").length==1){
			listaFiltrada = listaFiltrada.concat(myArr.filter(plato => plato.categoria == valores.categoria));
		}
		else{
			for(let i=0; i<valores.categoria.split(",").length;i++){
				listaFiltrada = listaFiltrada.concat(myArr.filter(plato => plato.categoria == valores.categoria.split(",")[i]));
			}
		}
	}
	else if (valores.cantidad !== null){
		console.log('cantidad is not null');
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.cantidad == valores.cantidad));
	}
	else if(valores.preferencia !== null){
		console.log('preferencia is not null');
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.preferencia == valores.preferencia));
	}
	else if(valores.pic !== null){
		console.log('pic is not null');
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.pic == valores.pic));
	}
	else if(valores.temp !== null){
		console.log('temp is not null');
		listaFiltrada =listaFiltrada.concat(myArr.filter(plato => plato.temp == valores.temp));
	}*/

	
	
	
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

// function CreaHTMLRandom() {
//     var divRandom = document.createElement("div");
//     var h3Random = document.createElement("h3");
//     h3Random.innerHTML = "hola";
//     var h5Random = document.createElement("h5");
//     var formRandom = document.createElement("form");
//     var inputRandom = document.createElement("input");
//     var labelRandom = document.createElement("label");
// }

// var htmlVideos = '';
// 	htmlVideos += '<li><video controls data-idx="3" src="3"></video></li>';

// CreaHTMLRandom();

// var url = "http://www.mocky.io/v2/5a3b8e73300000591282d203";
// var request = new XMLHttpRequest();

// // console.log('prerequest');
// // Opcionalmente, indicar el formato de la respuesta.
// // request.responseType = "application/json";
// request.open("GET", url);
// request.onload = function () {
//     if (request.status == 200) {
//         // console.log('request: ', request);
//         console.log('url importada');
//         document.getElementById("random").innerHTML = this.response;
//     }else{
//         console.log('url no importada');
//     }
// };
// // console.log('envio send');
// request.send(null);

// var url = "http://www.mocky.io/v2/5a3a93af31000071148e9627";
// var request = new XMLHttpRequest();

// request.open("GET", url);
// request.onload = function () {
//     if (request.status == 200) {
//         document.getElementById("random").innerHTML = this.response;
//         console.log('url si cargada');
//     } else {console.log('url si cargada');}};
// request.send(null)

// JsHome angel
function Gustos() {
    nombre = '';
    seleccionado = false;
}

CogerRespuestas = function (evnt) {
    evnt.preventDefault();
    var arrChkbox = document.getElementsByTagName('input');
    for (i = 0; i < arrChkbox.length; i++) {
        arrGustos[i] = new Gustos;
        arrGustos[i].nombre=arrChkbox[i].id;
        arrGustos[i].seleccionado=arrChkbox[i].checked;
    }
    request.open("POST", "http://www.mocky.io/v2/5a538681300000862a1ebfbf");
    request.onload = function () {
        console.log('request: ', request);
    };  
    request.send(arrGustos);
}


var arrGustos = [];
var request = new XMLHttpRequest();
var arrChkbox = document.getElementsByTagName('input');
var btnAdelante=document.getElementById('btnAdelante');
btnAdelante.onclick = CogerRespuestas;
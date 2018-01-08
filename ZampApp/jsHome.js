// class HomeController {
//     constructor() {
//         platos = [];
//         inputs = document.getElementsByTagName('input');
//         btnBuscar = document.getElementById('btnBusqueda');
//         btnBuscar.onclick = CogerDatos;
//     }
//     Ingredientes() {
//         nombre = '';
//         seleccionado = false;
//     }
//     CogerDatos() {
//         var inputs = document.getElementsByTagName('input');
//         for (i = 0; i < inputs.length; i++) {
//             platos[i] = new Ingredientes;
//             platos[i].nombre = inputs[i].attributes[0].value;
//             platos[i].seleccionado = inputs[i].checked;
//         }
//     }
// }

function Ingredientes() {
    nombre = '';
    seleccionado = false;
}

CogerDatos = function (evnt) {
    evnt.preventDefault();
    var inputs = document.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) {
        platos[i] = new Ingredientes;
        platos[i].nombre=inputs[i].attributes[0].value;
        platos[i].seleccionado=inputs[i].checked;
    }
    request.open("POST", "http://www.mocky.io/v2/5a538681300000862a1ebfbf");
    request.onload = function () {
        console.log('request: ', request);
    };  
    request.send(platos);
}


var platos = [];
var request = new XMLHttpRequest();
var inputs = document.getElementsByTagName('input');
var btnBuscar=document.getElementById('btnBusqueda');
btnBuscar.onclick = CogerDatos;
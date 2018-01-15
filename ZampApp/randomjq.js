// Recojer datos
var arrRandom = {};
function RecojeDatos() {
    arrRandom = {};
    $('form input:checked').each(function () {
        arrRandom[this.id] = (arrRandom[this.id] ? arrRandom[this.id] + ',' : '') + this.value;
    });
    console.log(arrRandom);
}

// Envio al server
var url = 'http://www.mocky.io/v2/5a5893682d0000781ad2e57b';
function EnvioDatos(data) {
    $.post(url, data,
        function (data, textStatus, jqXHR) {
            console.log('Recibido');
        },
    )
    .fail(function (data, textStatus, jqXHR) {
            console.log('No Recibido');
        },
    )
}

// opciones del modal iniciales
$('#myModal').modal({
    backdrop: false,
    Keyboard: true,
    focus: true,
    show: false
});

// enlace a pagina resultados
function enlace() {
    window.location.href = "http://localhost:8000/dexterminadores/Dexterminadores/ZampApp/resultados.html";
}

// Accion del boton
$('#btnAdelante').click(function (evento) {
    evento.preventDefault();
    $('#myModal').modal('show');
    RecojeDatos();
    EnvioDatos(arrRandom);
    setTimeout(enlace, 2000);
})


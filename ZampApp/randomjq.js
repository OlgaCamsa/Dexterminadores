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
var badurl = 'http://www.mocky.io/v2/5a5cabf22e00005e199f83bd';
function EnvioDatos(data) {
    $.post(url, data,
        function (data, textStatus, jqXHR) {
            console.log('Recibido');
            $('#textModal').html("Me gusta tu elección amigo<br>ZamsApp's Actitude Always");
            $('#myModal').modal('show');
            setTimeout(enlaceresultados, 2000);
        },
    )
    .fail(function (data, textStatus, jqXHR) {
            console.log('No Recibido');
            // RecojeDatos();
            $('#textModal').html("Parece que tenemos algún tipo de problema en la cocina<br>En unos segundos te redirigiremos a la página principal");
            $('#myModal').modal('show');
            setTimeout(enlacehome, 6000);
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
function enlaceresultados() {
    window.location.href = "resultados.html";
}

// enlace a pagina home
function enlacehome() {
    window.location.href = "home.html";
}

// Accion del boton
$('#btnAdelante').click(function (evento) {
    evento.preventDefault();
    RecojeDatos();
    EnvioDatos(arrRandom);
})


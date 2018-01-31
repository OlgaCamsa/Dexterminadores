// // Recojer datos sin modulo
// var arrRandom = {};
// function RecojeDatos() {
//     arrRandom = {};
//     $('form input:checked').each(function () {
//         arrRandom[this.id] = (arrRandom[this.id] ? arrRandom[this.id] + ',' : '') + this.value;
//     });
//     console.log(arrRandom);
// }

// Envio al server 
var RandomModul = (function () {
    var inputs = {};

    var url = 'http://www.mocky.io/v2/5a5893682d0000781ad2e57b';
    var badurl = 'http://www.mocky.io/v2/5a5cabf22e00005e199f83bd';

    // Envio de datos al mocky, datos del modal y envio a la funcion de enlace
    function _EnvioDatosyModal() {
        inputs = LSModule.LeerInputs();
        LSModule.GuardarInputs();
        console.log('enviodatos');
        $.post(url, inputs,
            function (data, textStatus, jqXHR) {
                console.log('Recibido');
                console.log(inputs);
                $('#modalmsg').html("Me gusta tu elección amigo<br>ZampApp's Actitude Always");
                $('#modalfeedback').modal('show');
                setTimeout(_enlaceResultados, 4000);
            },
        )
            .fail(function () {
                ErrorEnvio()
            });
        // .fail(function (obj, textStatus, jqXHR) {
        // console.log('No Recibido');
        // $('#textModal').html("Parece que tenemos algún tipo de problema en la cocina<br>En unos segundos te redirigiremos a la página principal");
        // $('#myModal').modal('show');
        // setTimeout(_enlaceHome, 4000);
    }


// opciones del modal iniciales
$('#myModal').modal({
    backdrop: false,
    Keyboard: true,
    focus: true,
    show: false
});

// enlace a pagina resultados
function _enlaceResultados() {
    window.location.href = "resultados.html";
}

// enlace a pagina home
// function _enlaceHome() {
//     window.location.href = "home.html";
// }

return _EnvioDatosyModal;
}) ();

$('#btnAdelante').click((evento) => {
    evento.preventDefault();
    RandomModul();
});
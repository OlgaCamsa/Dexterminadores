$('#submit').click(function (evnt) {
    evnt.preventDefault();
    var pregunta = {};
    var request = new XMLHttpRequest();
    var url = "http://www.mocky.io/v2/5a576e6e2e0000883612016b";
    var badurl = "http://www.mocky.io/v2/5a587ee52d0000de13d2e516";
    function validarEmail(valor) {
        return email.validity.valid
    }
    $('.field').each(function () {
        pregunta[this.name] = this.value;
    });
    if (pregunta.nombre && pregunta.email && pregunta.mensaje && validarEmail(pregunta.email)) {
        $.post(
            url,
            pregunta,
            function (data, textStatus, jqXHR) {
                $('#modalsi').modal('show');
                console.log('¡recibido!')
            }
        )
            .fail(
            function (data, textStatus, jqXHR) {
                $('#modalno').modal('show');
                console.log('Error en el servidor')
            }
            );
    }
});

$('#modal').modal({
    backdrop: false,
    keyboard: false,
    focus: true,
    show: false
});


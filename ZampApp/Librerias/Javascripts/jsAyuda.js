var Contact = (function () {
    var pregunta = {};
    var request = new XMLHttpRequest();
    var url = "http://www.mocky.io/v2/5a576e6e2e0000883612016b";
    var badurl = "http://www.mocky.io/v2/5a587ee52d0000de13d2e51x6";

    function validarEmail(valor) {
        return email.validity.valid
    }

    function getInfo() {
        $('.field').each(function () {
            pregunta[this.name] = this.value;
        });
    }
    return function (evnt) {
        evnt.preventDefault();
        getInfo();
        if (pregunta.nombre && pregunta.email && pregunta.mensaje && validarEmail(pregunta.email)) {
            $.post(
                badurl,
                pregunta,
                function (data, textStatus, jqXHR) {
                    $('#modalmsg').html('¡Muchas gracias, contestaremos a tu mensaje lo antes posible!');
                    $('#modalfeedback').modal('show');
                    console.log('¡recibido!');
                    $('.field').val('');
                }
            ).fail(function () {
                ErrorEnvio()
            });
        }
        else {
            $('#modalmsg').html('Completa todos los campos correctamente para poder enviar el mensaje');
            $('#modalfeedback').modal('show');
        }
    }
})();

$('#submit').click(Contact);
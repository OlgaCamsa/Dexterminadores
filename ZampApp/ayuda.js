var ContactModule = (function () {
    var pregunta = {};
    var request = new XMLHttpRequest();
    var url = "http://www.mocky.io/v2/5a576e6e2e0000883612016b";
    var badurl = "http://www.mocky.io/v2/5a587ee52d0000de13d2e51x6";

    $('#modal').modal({
        backdrop: false,
        keyboard: false,
        focus: true,
        show: false
    });

    function validarEmail(valor) {
        return email.validity.valid
    }

    function getInfo() {   
        $('.field').each(function () {
            pregunta[this.name] = this.value;
        });
    }
    return function(evnt){
        evnt.preventDefault();
        getInfo();
        if(pregunta.nombre && pregunta.email && pregunta.mensaje && validarEmail(pregunta.email)) {
            $.post(
                badurl,
                pregunta,
                function (data, textStatus, jqXHR) {
                    $('#modalmsg').html('¡Muchas gracias, contestaremos a tu mensaje lo antes posible!');
                    $('#modalfeedback').modal('show');
                    console.log('¡recibido!');
                    $('.field').val('');
                }
            )
                .fail(
                function (data, textStatus, jqXHR) {
                    $('#modalmsg').html('Lo sentimos, no se ha podido acceder al servidor :(</br> Puedes ponerte en contacto con nosotros en nuestras redes sociales');
                    $('#modalfeedback').modal('show');
                    console.log('Error en el servidor');
                }
                );
        }
        else {
            $('#modalmsg').html('Completa todos los campos correctamente para poder enviar el mensaje');
            $('#modalfeedback').modal('show');
        }
    }
})();

$('#submit').click(ContactModule);
// --Función donde se guardará los datos de los ingredientes--
function Ingredientes() {
    nombre = '';
    seleccionado = false;
}


// --Funcion que se activa al pulsar el botón de buscar en la parte de la derecha
$('#btnBusqueda').click(function (evnt) {
    // --Variable que se enviara a la base de datos--
    var platos = [];

    // --recoge el nombre y si esta checkeado de cada ingrediente/input--
    $('input').each(function () {
        let x = new Ingredientes
        x.nombre = this.attributes[0].value;
        x.seleccionado = this.checked;
        platos.push(x);
    })


    // Envia la variable que contiene los nombres y checkeos a la base de datos--
    $.ajax({
        type: "POST",
        url: "http://www.mocky.io/v2/5a5c70c92e0000050a9f82a1",
        data: platos,
        success: function (response) {
            console.log('Conseguido',platos);
        }
    })
    .fail(function(parametros){
        console.log('Epic Fail')
        
    });
})
function Ingredientes() {
    nombre = '';
    seleccionado = false;
}

$('#btnBusqueda').click(function (evnt) {
    // evnt.preventDefault();
    var platos = [];

    $('input').each(function () {
        let x = new Ingredientes
        x.nombre = this.attributes[0].value;
        x.seleccionado = this.checked;
        platos.push(x);
    })

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
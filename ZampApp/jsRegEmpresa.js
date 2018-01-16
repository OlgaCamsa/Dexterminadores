// --Clase donde se guardaran los datos de los inputs--
class RegDatos {
    constructor() {
        this.nombre = '';
        this.value = '';
    }

}

// --Función que se activa al pulsar el boton registrarse--
$('#btnRegistro').click(function (evnt) {
    // --Previene la ejecucion final del evento--
    evnt.preventDefault();

    // --Variable que se enviara a la base de datos--
    var datos = [];
    
    $("input").each((index, item) => {
        // --Crea una variable temporal que recoge el nombre y el value de cada input y te lo mete en datos--
        let x = new RegDatos;
        x.nombre = item.attributes ? item.attributes[0].value : 'noname';
        // --Discrimina el value en funcion de su tipo--
        switch (item.type) {
            case 'file':
                x.value = item.value;
                break;
            case 'text':
                x.value = item.value;
                break;
            case 'time':
                x.value = item.value;
                break;
            case 'checkbox':
                x.value = item.checked;
                break;
            case 'password':
                x.value = item.value;
                break;
            case 'number':
                x.value = item.value;
                break;
            case 'email':
                x.value = item.value;
                break;
            default:
                x.value = 'No Value';
        }
        datos.push(x);

    });
    // --Recoge el valor del metodo de pago y lo mete en datos--
    let y= new RegDatos;
    y.nombre='Metodo de pago';
    y.value=$('.boton_deslizante')[0].innerText;
    datos.push(y);
    // --Envia datos a la base de datos--
    $.ajax({
        type: "POST",
        url: "http://www.mocky.io/v2/5a5c70c92e0000050a9f82a1",
        // url:"http://www.falsaweb123.com,"
        data: datos,
        success: function (response) {
            console.log('Conseguido', datos,response);
        }
    })

        .fail(function (parametros) {
            console.log('Epic Fail',parametros);

        });
});

// --Cambia el texto del boton tipo de pago--
$('.tipo_de_pago').click(function (evnt) {
    $('.boton_deslizante')[0].innerText = this.innerHTML;
});


// --Cambia la imagen logo de la empresa--
$("#Logo").change(function (file){
    $("#LogoImg").attr("src", "img/logoempresafalso.jpg");
});

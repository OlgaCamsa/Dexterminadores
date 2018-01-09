
document.getElementById("submit").onclick = feedback;

function feedback(evt) {
    evt.preventDefault();

    let request = new XMLHttpRequest();
    let url = "http://www.mocky.io/v2/5a538fd43000006f2c1ebfe0";
    let pregunta= new Pregunta ();

    pregunta.nombre = document.getElementById("nombre").value;
    pregunta.email = document.getElementById("email").value;
    pregunta.mensaje = document.getElementById("mensaje").value;

    

    if(pregunta.nombre && pregunta.email && pregunta.mensaje && validarEmail(pregunta.email)){
        request.open("POST", url);
        request.onload = function () {
            if(request.status==200){
                alert("¡Muchas gracias, contestaremos a tu mensaje lo antes posible!");
                console.log('request:', request)
            }else{
                console.log('Error:', request)
            }
        };
        request.send("nomre=xxx&email=xxx&mensaje=xxx");
    }else{
        alert("Completa todos los campos correctamente para poder enviar tu mensaje");
    }
}


function validarEmail(valor) {
    /*return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor);}*/
    return email.validity.valid}



class Pregunta {
    constructor() {
        this.nombre = "";
        this.email = "";
        this.mensaje = "";
    }
}






document.getElementById("submit").onclick = feedback;

function feedback(evt) {
    evt.preventDefault();

    let request = new XMLHttpRequest();
    let url = "http://www.mocky.io/v2/5a538fd43000006f2c1ebfe0x"
    pregunta.nombre = document.getElementById("nombre").value;
    pregunta.email = document.getElementById("email").value;
    pregunta.mensaje = document.getElementById("mensaje").value;

    // console.log(pregunta.nombre , pregunta.email , pregunta.mensaje);

    if(pregunta.nombre && pregunta.email && pregunta.mensaje){
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
        alert("Completa todos los campos para poder enviar tu mensaje");
    }
}



class pregunta {
    constructor() {
        this.nombre = "";
        this.email = "";
        this.mensaje = "";
    }
}





function ErrorEnvio() {
    

    $('.modal').modal({
        backdrop: false,
        keyboard: false,
        focus: true,
        show: false
    });


    $('#modalmsg').html("Parece que tenemos algún tipo de problema.<br>En unos segundos te redirigiremos a la página principal");
    $('#modalfeedback').modal('show');
    console.log('No Recibido');
    setTimeout(enlacehome, 6000);
}

function enlacehome() {
    window.location.href = "home.html";
}
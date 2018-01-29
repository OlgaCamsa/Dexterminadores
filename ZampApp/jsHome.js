//--- al hacer click en el boton busqueda llama al modulo LSModule para guardar los datos de los inputs---
$('#btnBusqueda').click(function (evnt) {
    // event.preventDefault();
   LSModule.GuardarInputs();
});
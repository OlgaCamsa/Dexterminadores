//--- al hacer click en el boton busqueda llama al modulo LSModule para guardar los datos de los inputs---
(function(targetElem) {
    var button = $(targetElem);
    var enclick = Rx.Observable.fromEvent(button, 'click');
    enclick.subscribe(() => {
        // event.preventDefault();
        LSModule.GuardarInputs();
    });
})('.home #btnBusqueda');
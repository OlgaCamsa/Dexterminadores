
var LSModule = (function () {
    var valores = {};

    // ---Función que rellena el objeto valores  y lo devuelve repleto de los inputs de la página---
    function _preparaDatos() {
        valores = {};
        $('select').each(function () {
            valores[this.name] = this.value;
        });

        $('input:checked[type=checkbox]').each(function () {
            valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
        });

        $('input').not('input[type=checkbox]').each(function () {
            valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
        });
        return valores;
    }

    // ---Función para guardar los datos de cada input en el local storage con la clave inputs---
    function _guardarDatos() {

        window.localStorage.setItem('inputs',JSON.stringify(_preparaDatos()));
    }

    // ---Funciones disponibles al llamar LSModules---
    return {
        GuardarInputs: _guardarDatos,
        LeerInputs: _preparaDatos
    }
})();
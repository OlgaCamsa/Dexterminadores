var LSModule = (function () {
    var valores = {};

    // ---Función que rellena el objeto valores  y lo devuelve repleto de los inputs de la página---
    function _preparaDatos() {
        valores = {categoria: null, cantidad: null, preferencia: null, temp: null, pic: null, precio:null, proximidad:null};
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
        window.localStorage.setItem('inputs', JSON.stringify(_preparaDatos()));
    }

    // ---Función que recoge los datos guardados en el Local Storage de los inputs---
    function _cargarDatos() {
        return JSON.parse(window.localStorage.getItem('inputs'));
    }

    // ---Funciones disponibles al llamar LSModules---
    return {
        GuardarInputs: _guardarDatos,
        LeerInputs: _preparaDatos,
        CargarInputs: _cargarDatos
    }
})();
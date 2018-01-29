// Modulo filtro
var valores = {};
var listaFiltrada = [];

function datas() {
        $('select').each(function () {
            valores[this.name] = this.value;
        })

        $('input:checked[type=checkbox]').each(function () {
            valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
        })

        $('input').not('input[type=checkbox]').each(function () {
            valores[this.name] = (valores[this.name] ? valores[this.name] + ',' : '') + this.value;
        })
        return valores;
    console.log(valores);
    }
var preguntas = {
    preg: [
        {
            posicion: "topizq",
            titulo: "Cantidad",
            descripcion: "Tenemos comidas para compartir",
            opciones: [
                { type: "checkbox", name: "cantidad", value: "individual", text: "Individual" },
                { type: "checkbox", name: "cantidad", value: "compartir", text: "Para compartir" }],
        },
        {
            posicion: "topder",
            titulo: "Temperatura",
            descripcion: "¿Prefieres una plato para entrar en calor o fresco?",
            opciones: [
                { type: "checkbox", name: "temp", value: "caliente", text: "Caliente" },
                { type: "checkbox", name: "temp", value: "frio", text: "Frío" }],
        },
        {
            posicion: "downizq",
            titulo: "Alergias",
            descripcion: "¿Tienes alguna intolerancia alimenticia?",
            opciones: [
                { type: "checkbox", name: "preferencia", value: "gluten", text: "Gluten" },
                { type: "checkbox", name: "preferencia", value: "lactosa", text: "Lactosa" },
                { type: "checkbox", name: "preferencia", value: "frutossecos", text: "Frutos secos" }],
        },
        {
            posicion: "downder",
            titulo: "Sabor",
            descripcion: "¿Te gusta el picante o eres mas de agridulce?",
            opciones: [
                { type: "checkbox", name: "pic", value: "picante", text: "Picante" },
                { type: "checkbox", name: "pic", value: "nadapicante", text: "Nada picante" },
                { type: "checkbox", name: "pic", value: "agridulce", text: "Agridulce" }],
        }
    ]
};
console.log(preguntas);
var tpl = "{{#preg}}<div id='{{posicion}}'>{{>h3}}</div>{{/preg}}";
var varh3 = {
    h3: "<div class='pregunta'><h3>{{titulo}}</h3></div>" +
        "<div><h5>{{descripcion}}</h5></div>" +
        "<div><form action=''>{{#opciones}}<input type='{{type}}' name='{{name}}' value='{{value}}' id='{{value}}'>" + "<label for='{{value}}'>{{text}}</label>" + "<br>{{/opciones}}</form></div>"
};

var html = Mustache.to_html(tpl, preguntas, varh3);
$('#asks').html(html);
describe('Modulo inputs',function(){
    
    // Revisa que los inputs en el html sean leidos y devuelve un objeto con su contenido
    it('Leer Inputs',function(){
        expect(typeof(LSModule.LeerInputs())).toEqual(typeof({categoria: null, cantidad: null, preferencia: null, temp: null, pic: null, precio:null, proximidad:null}));
    });
    // Guarda el contenido de los inputs en el local storage
    it('Guardar Inputs',function(){
        localStorage.clear();
        LSModule.GuardarInputs()
        expect(typeof( JSON.parse(window.localStorage.inputs))).toEqual(typeof({categoria: null, cantidad: null, preferencia: null, temp: null, pic: null, precio:null, proximidad:null}));
    });
    // Carga y guarda en una variable el contenido de los inputs como un objeto
    it('Cargar Inputs',function(){
        localStorage.clear();
        LSModule.GuardarInputs()
        let patata=LSModule.CargarInputs()
        expect(typeof(patata)).toEqual(typeof({categoria: null, cantidad: null, preferencia: null, temp: null, pic: null, precio:null, proximidad:null}));
    });
})
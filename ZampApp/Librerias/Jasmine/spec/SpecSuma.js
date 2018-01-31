describe('Libreria Test Jasmine',function(){
    it('Suma correctamente',function(){
        expect(Sumar(2,2)).toEqual(4);
    });
    it('Restar correctamente',function(){
        expect(Restar(2,2)).toEqual(0);
    });
    it('Multiplica correctamente',function(){
        expect(Multiplica(3,3)).toEqual(9);
    });
    it('Divide correctamente',function(){
        expect(Divide(3,3)).toEqual(1);
    });
    it('Comunica correctamente',function(){
        expect(Comunica()).toEqual(true);
    });

})
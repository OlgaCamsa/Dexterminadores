

describe("recogida de inputs", function () {
    var pregunta;

    pregunta = {
        name: "olga",
        email: "olga@gmail.com",
        mensaje: "Ayuda",
    }
    it("get the email", function getinfo() {
        expect(pregunta).toEqual(jasmine.objectContaining({
            name: "olga"
        }));
    });

    it("get the email", function getinfo() {
        expect(pregunta).toEqual(jasmine.objectContaining({
            email: "olga@gmail.com"
        }));
    });

    it("get the message", function getinfo() {
        expect(pregunta).toEqual(jasmine.objectContaining({
            mensaje: "Ayuda"
        }));
    });
});
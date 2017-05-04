describe("Triangle create", function() {

    it("params: 0, 12, 13", function() {
        assert.throws(() => { new Triangle(0, 12, 13); }, SyntaxError, "Длина стороны не может равняться 0.");
    });

    it("params: 12, 0, 13", function() {
        assert.throws(() => { new Triangle(12, 0, 13); }, SyntaxError, "Длина стороны не может равняться 0.");
    });

    it("params: 12, 12, 0", function() {
        assert.throws(() => { new Triangle(12, 12, 0); }, SyntaxError, "Длина стороны не может равняться 0.");
    });

    it("params: sd, 12, 12", function() {
        assert.throws(() => { new Triangle("sd", 12, 12); }, SyntaxError, "Длина стороны должна быть числом.");
    });

    it("params: 12, 1qwd, 12", function() {
        assert.throws(() => { new Triangle(12, "1qwd", 12); }, SyntaxError, "Длина стороны должна быть числом.");
    });

    it("params: 13, 12, qwd", function() {
        assert.throws(() => { new Triangle(13, 12, "qwd"); }, SyntaxError, "Длина стороны должна быть числом.");
    });

    it("params: -21, 12, 12", function() {
        assert.throws(() => { new Triangle(-21, 12, 12); }, SyntaxError, "Длина стороны не может быть отрицательной величиной.");
    });

    it("params: 12, -12, 12", function() {
        assert.throws(() => { new Triangle(12, -12, 12); }, SyntaxError, "Длина стороны не может быть отрицательной величиной.");
    });

    it("params: 13, 12, -12", function() {
        assert.throws(() => { new Triangle(13, 12, -12); }, SyntaxError, "Длина стороны не может быть отрицательной величиной.");
    });

    it("params: 13, 12, 145", function() {
        assert.throws(() => { new Triangle(13, 12, 145); }, SyntaxError, "Невозможно построить треугольник с заданными длинами сторон.");
    });

    it("params: 145, 12, 13", function() {
        assert.throws(() => { new Triangle(145, 12, 13); }, SyntaxError, "Невозможно построить треугольник с заданными длинами сторон.");
    });

    it("params: 13, 145, 12", function() {
        assert.throws(() => { new Triangle(13, 145, 12); }, SyntaxError, "Невозможно построить треугольник с заданными длинами сторон.");
    });

});

describe("Triangle.typeIs", function() {

    it("params: 10, 10, 10", function() {
        var triangle = new Triangle(10, 10, 10);
        assert.equal(triangle.typeIs(), "Равносторонний");
    });

    it("params: 28, 28, 10", function() {
        var triangle = new Triangle(28, 28, 10);
        assert.equal(triangle.typeIs(), "Равнобедренный");
    });

    it("params: 14, 28, 15", function() {
        var triangle = new Triangle(14, 28, 15);
        assert.equal(triangle.typeIs(), "Неравносторонний");
    });

});
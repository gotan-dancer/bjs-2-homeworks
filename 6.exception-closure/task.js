function parseCount(value){
    let parseValue = Number.parseFloat(value);

    if(Number.isNaN(parseValue)){
        throw new Error("Невалидное значение");
    }

    return parseValue;
}

function validateCount(value){
    try{
        parseCount(value);
    } catch (error){
        return error;
    }
}

class Triangle {
    constructor(a,b,c){
        if ((a + b < c) || (a + c < b) || (b + c < a)){
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter(){
        this.trianglePerim = this.a + this.b + this.c;
        return this.trianglePerim;
    }

    get area(){
        let poluPerim = this.trianglePerim / 2;
        return Number(Math.sqrt(poluPerim * (poluPerim - this.a) * (poluPerim - this.b) * (poluPerim - this.c)).toFixed(3));
    }
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch(error){
        throw new Error ("Ошибка! Треугольник не существует");
    }
}
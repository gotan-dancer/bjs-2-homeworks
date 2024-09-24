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
        return this.a + this.b + this.c;
    }

    get area(){
        return Number(Math.sqrt((this.a + this.b + this.c) / 2 * ((this.a + this.b + this.c) / 2 - this.a) * ((this.a + this.b + this.c) / 2 - this.b) * ((this.a + this.b + this.c) / 2 - this.c))).toFixed(3);
    }
}
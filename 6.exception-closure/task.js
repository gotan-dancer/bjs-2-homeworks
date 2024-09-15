function parseCount(value){
    let parseValue = Number.parseFloat(value);

    if(parseValue === "NaN"){
        throw new Error("Невалидное значение");
    }

    return parseValue;
}
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
        console.log(error);
    } finally {
        
    }
}
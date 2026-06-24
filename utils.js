export const parseAndValidateNumber = (value) => {
    if(typeof value !== "string" && typeof value !== "number") throw new Error("Please enter valid numbers");
    
    if(typeof value === "string" && value.trim() === "") throw new Error("Please enter valid numbers");

    const parsedNumber = Number(value);
    if(Number.isNaN(parsedNumber)) throw new Error("Please enter valid numbers");
    
    return parsedNumber;
}

export const compareNumbers = (a, b) => {
    const parsedNumberA = parseAndValidateNumber(a);
    const parsedNumberB = parseAndValidateNumber(b);

    return parsedNumberA > parsedNumberB
}
    
export const addNumbers = (a, b) => {
   const parsedNumberA = parseAndValidateNumber(a);
    const parsedNumberB = parseAndValidateNumber(b);

   return parsedNumberA + parsedNumberB;
}

export const checkNegative = (value) => {
    return value < 0
}

export const sayHello = (string) => {
    return "Hello " + string + "!";
}

export const capitalizeString = (string) => {
    return string.toUpperCase();
}   

export const addItemArray = (array, item) => {
    array.push(item);
    return array;
}  

export const removeItemArray = (array, item) => {
    const itemIndex = array.indexOf(item);
    if(itemIndex !== -1){
        array.splice(itemIndex, 1);
        return array;
    } else {
        throw new Error("Item was not found in the list!");
    }
}

export const createNewObject= (username, userage) => {
     const user = {
            name: username,
            age: parseInt(userage)
        }
    return user;
}

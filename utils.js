
export const addNumbers = (a, b) => {
    return a + b;
}

export const checkNegative = (value) => {
    return value < 0
}
    
export const compareNumbers = (a, b) => {
    if (a > b) {
        return true;
    } 
    else{
        return false;
    }
}

const invalidValue = (value) => {
     if(typeof value === "string" && value.trim() === "") return true;
     else if(isNaN(value)) return true;
     else return false;

}

export const checkIfNumber = (a, b) => {
      if(invalidValue(a) || invalidValue(b)) {
        throw new Error("Please enter valid numbers");
      }
}


export const capitalizeString = (string) => {
    return string.toUpperCase();
}   

export const sayHello = (string) => {
    return "Hello " + string + "!";
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
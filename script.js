import { checkIfNumber, addNumbers, compareNumbers, checkNegative, capitalizeString, sayHello, addItemArray, removeItemArray, createNewObject } from "./utils.js";

//Number Section
const numberA= document.getElementById("numberA");
const numberB= document.getElementById("numberB");
const addNumbersBtn = document.getElementById("addNumbersBtn")
const compareNumbersBtn = document.getElementById("compareNumbersBtn")
const checkNegativeBtn = document.getElementById("checkNegativeBtn")
const compareNumbersResult = document.getElementById("compareNumbersResult");
const addNumbersResult = document.getElementById("addNumbersResult")
let addNumbersResultValue ;


//String Section
const stringCap = document.getElementById("stringCap");
const stringCapBtn = document.getElementById("stringCapBtn");
const stringCapResult = document.getElementById("stringCapResult");
const helloBtn = document.getElementById("hellohBtn");
let stringCapResultValue;


//Array Section
const addItemName = document.getElementById("addItemName");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemName = document.getElementById("removeItemName");
const removeItemBtn = document.getElementById("removeItemBtn");
const arrayResult = document.getElementById("arrayResult");
const itemList = []; 

//Object Section
const username = document.getElementById("username");
const age = document.getElementById("age");
const createObjBtn = document.getElementById("createObjBtn");
const objResult = document.getElementById("objResult");
const userList = [];

const alertString = (...stringElements) =>{
    if(stringElements.some(element => element.value.trim() === "")){
        alert("Please enter a valid string");
        return false;
    }
    return true
}
const clearInputs= (...inputElements) =>{
    inputElements.forEach(input => input.value = "");
}

//Number Section
addNumbersBtn.addEventListener("click", () =>{
    try{
        addNumbersResultValue = addNumbers(numberA.value, numberB.value);
        addNumbersResult.innerText= addNumbersResultValue;
    }
    catch(error){
        alert(error.message);
    }
    clearInputs(numberA, numberB);
    
})

compareNumbersBtn.addEventListener("click", () =>{
    try{ 
        
        const isGreater = compareNumbers(numberA.value, numberB.value);

        if (isGreater) {
            compareNumbersResult.innerText = a + " is greater than " + b;
        } else {
            compareNumbersResult.innerText = a + " is not greater than " + b;
        }
    }
    catch(error){
         alert(error.message);
    }
    clearInputs(numberA, numberB);
    
   
});

checkNegativeBtn.addEventListener("click", () =>{

    if(addNumbersResultValue === undefined){
       alert("Please add two numbers first");
    }   
    else{
        if(checkNegative(addNumbersResultValue)){
            addNumbersResult.innerText = addNumbersResultValue + " is negative";
        } else {
            addNumbersResult.innerText = addNumbersResultValue + " is not negative";
        }
    }   
})


stringCapBtn.addEventListener("click", () =>{
    if(!alertString(stringCap)) return;
    stringCapResult.innerText = capitalizeString(stringCap.value);
    clearInputs(stringCap);

})

helloBtn.addEventListener("click", () =>{
    if(!alertString(stringCap)) return;
    alert(sayHello(stringCap.value));
    clearInputs(stringCap);
})

addItemBtn.addEventListener("click", () =>{
    if(!alertString(addItemName)) return;
    addItemArray(itemList, addItemName.value);
    clearInputs(addItemName);
    arrayResult.innerText = itemList.join(", ");
})

removeItemBtn.addEventListener("click", () =>{
    if(!alertString(removeItemName)) return;
    try{
        removeItemArray(itemList, removeItemName.value);
        removeItemName.value = "";
        arrayResult.innerText = itemList.join(", ");
    }
    catch(error){
        alert(error.message);
    }
    clearInputs(removeItemName);
});

createObjBtn.addEventListener("click", () =>{
    if(!alertString(username, age)) return;
    const user = createNewObject(username.value, age.value);
    objResult.innerText = user.name + "(" + user.age + ")";
    clearInputs(username, age);
})


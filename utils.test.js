import { checkIfNumber, addNumbers, compareNumbers, checkNegative, capitalizeString, sayHello,addItemArray, removeItemArray, createNewObject } from "./utils";

//NUMBERS---------------------------------------------------------------
test("adds two numbers correctly", () => {
    expect(addNumbers(5, 7)).toBe(12);
    expect(addNumbers("text", 7)).not.toBe(10);
    expect(addNumbers(5.7, 7.3)).toBeCloseTo(13);

});

test("Compare the result from addNumbers function with other number", () => {
    expect(addNumbers(25, 37)).toBeLessThan(100);
    expect(addNumbers(20, 20)).toBeLessThanOrEqual(40);
    expect(addNumbers(80, 57)).toBeGreaterThan(50);
    expect(addNumbers(60, 60)).toBeGreaterThanOrEqual(120);
});

test("Check if the first number is greater than the second number", () => {
    expect(compareNumbers(10, 5)).toBeTruthy();
    expect(compareNumbers(5, 10)).toBeFalsy();
    expect(compareNumbers(7, 7)).not.toBeTruthy();
});

test("Check if the result from addNumbers function is negative", () => {
    expect(checkNegative(addNumbers(-5, -3))).toBeTruthy();
    expect(checkNegative(addNumbers(5, 3))).toBeFalsy();
});

test("Check if the inputs are valid numbers", () => {
    expect(() => checkIfNumber("text", "aa7")).toThrow();
    expect(() => checkIfNumber("text", 7)).toThrow(Error);
    expect(() => checkIfNumber("text", 7)).toThrow("Please enter valid numbers");
    expect(() => checkIfNumber("text", 7)).toThrow(/valid numbers/);
    expect(() => checkIfNumber(5, 7)).not.toThrow();

});


//STRING---------------------------------------------------------------
test("Capitalize a string", () => {
    expect(capitalizeString("how I met your Mother")).toBe("HOW I MET YOUR MOTHER");
    expect(capitalizeString("The Office")).not.toBe("THE POLICE OFFICE");
}   
);

test("Say Hello to a string", () => {
    expect(sayHello("Michael Scott")).toMatch("Hello Michael Scott!");
    expect(sayHello("DWIGHT SCHRUTE")).not.toMatch("HELLO Dwight Schrute!");
});

//ARRAYS---------------------------------------------------------------
const itemList = [
  'toothpaste',
  'towel',
  'toothbrush',
  'shampoo'
];

const otherList = [
    'chocolate',
    'strawberry',
    'vanilla',
    'mint'
]

test('check the array elements', () => {
  expect(addItemArray(itemList, 'soap')).toContain('soap');
  expect(addItemArray(itemList, 'conditioner')).toHaveLength(6);
  expect(itemList).not.toEqual(otherList);
  expect(itemList).not.toContainEqual(otherList);
});

test('remove item from array', () => {
    expect(removeItemArray(itemList, 'towel')).not.toContain('towel');
    expect(addItemArray(itemList, 'chocolate')).toHaveLength(6);
    expect(() => removeItemArray(itemList, 'vanilla')).toThrow("Item was not found in the list!");
    expect(addItemArray(itemList, 'soap')).toEqual(expect.not.arrayContaining(otherList));
 
})

//OBJECTS---------------------------------------------------------------
describe('check user object', () => {
   
    const user1={
        name: "Jane Doe",
        age: 20,
    }

    
    const user2 = {
        name: "John Doe",
        age: 18
    }

    const newOther = {
        name: "Bobby Doe",
        address: "Brooklyn"
        }
   
    test('check the object properties', () =>{
        expect(createNewObject(user1)).toHaveProperty('age');
        expect(createNewObject(user2)).not.toHaveProperty('age', 20);
    })

    test('check if object properties are different', () =>{
       expect(createNewObject(user1)).not.toBe(createNewObject(user2));
        expect(createNewObject(user1)).not.toEqual(createNewObject(user2));
        expect(createNewObject(user1)).not.toMatchObject(createNewObject(newOther));
       // expect(createNewObject(user1)).not.toContainEqual(createNewObject(newOther));
       
    })

});
import { parseAndValidateNumber, addNumbers, compareNumbers, checkNegative, capitalizeString, sayHello,addItemArray, removeItemArray, createNewObject } from "./utils";

//NUMBERS---------------------------------------------------------------
test("Check if the input is a valid number", () => {
    expect(() => parseAndValidateNumber("89dds")).toThrow();
    expect(() => parseAndValidateNumber(null)).toThrow(Error);
    expect(() => parseAndValidateNumber(undefined)).toThrow("Please enter valid numbers");
    expect(() => parseAndValidateNumber(" ")).toThrow(/valid numbers/);
    expect(() => parseAndValidateNumber(5)).not.toThrow();
});

describe('Compare 2 numbers', () => {

    test("Check if the first number is greater than the second number", () => {
        expect(compareNumbers(10, 5)).toBe(true);
        expect(compareNumbers(5, 10)).toBe(false);
        expect(compareNumbers(7, 7)).not.toBe(true);
    });
    test("Check if the first number is greater than the second number using truthy/falsy", () => {
        expect(compareNumbers(10, 5)).toBeTruthy();
        expect(compareNumbers(5, 10)).toBeFalsy();
        expect(compareNumbers(7, 7)).not.toBeTruthy();
    });
    test("Compare the result from addNumbers function with other numbers", () => {
        expect(addNumbers(25, 37)).toBeLessThan(100);
        expect(addNumbers(20, 20)).toBeLessThanOrEqual(40);
        expect(addNumbers(80, 57)).toBeGreaterThan(50);
        expect(addNumbers(60, 60)).toBeGreaterThanOrEqual(120);
    });

});

test("adds two numbers correctly", () => {
    expect(addNumbers(5, 7)).toBe(12);
    expect(addNumbers(7, 7)).not.toBe(12);
    expect(addNumbers(5.7, 7.3)).toBeCloseTo(13);
});

test("Check if the result from addNumbers function is negative", () => {
    expect(checkNegative(addNumbers(-5, -3))).toBe(true);
    expect(checkNegative(addNumbers(5, 3))).toBe(false);
});

//STRING---------------------------------------------------------------
test("Say Hello to a string", () => {
    expect(sayHello("Michael Scott")).toMatch("Hello Michael Scott!");
    expect(sayHello("Dwight Schrute")).not.toMatch(/HELLO/);
});


test("Capitalize a string", () => {
    expect(capitalizeString("how I met your Mother")).toBe("HOW I MET YOUR MOTHER");
    expect(capitalizeString("The Office")).not.toBe("THE POLICE OFFICE");
});

//ARRAYS---------------------------------------------------------------
describe('check the array elements', () => {

    const itemList = [
    'toothpaste',
    'towel',
    'toothbrush',
    'shampoo'
    ];


    test('check if the item list contains soap', () => {
        expect(itemList).toHaveLength(4);
        
        expect(addItemArray(itemList, 'soap')).toContain('soap');

        expect(itemList).toHaveLength(5);

    });

    test('remove an item from array', () => {
     expect(removeItemArray(itemList, 'towel')).not.toContain('towel');
     expect(() => removeItemArray(itemList, 'vanilla')).toThrow("Item was not found in the list!");
    })

    //Other matchers for arrays:
    const groceryList = [
    { item: 'toothpaste', total: 2 },
    { item: 'toothbrush', total: 4 },
    { item: 'shampoo', total: 10 }
    ];

    test('Check if an array is an identical twin with the itemList array', () => {  
        
    const shoppingCart = [
        { item: 'toothpaste', total: 2 },
        { item: 'toothbrush', total: 4 },
        { item: 'shampoo', total: 10 }
    ];
    
    // PASS: The size, structure, properties, and item order match perfectly.
    expect(shoppingCart).toEqual(groceryList);
    });

    test('find the matched element at a time', () => {
       
       expect(groceryList).toContainEqual({ item: 'toothpaste', total: 2 });
       //Jest successfully finds an element with this exact structure and data

       expect(groceryList).not.toContainEqual({ item: 'toothbrush', total: 40 });
       //Jest cannot find a matching structural unit because the total value is wrong.
       
       expect(groceryList).not.toContainEqual([
        { item: 'toothpaste', total: 2 },
        { item: 'shampoo', total: 10 }
      ]);
      /* Jest treats the expected array as a single structural unit,
         not two separate ones. 
         The groceryList is a flat array containing 3 separate objects. 
         It does not contain a nested sub-array as one of its elements.      
      */
    });

    test('check if the received array contains specific list of elements', () => {
       
        const expectedArray = [
            'tissue',
            ['toothbrush', 'soap'],
            'towel',
            ['shampoo', 'conditioner'],
            ['hair mask', 'hair oil', 'hair tonic']
        ];

       const receivedArray = [
            ['hair mask', 'hair oil'], 
            'toothpaste',             // Extra item (ignored)
            'towel',                  // Match found     
            ['toothbrush', 'soap'],   // Match found 
            ['conditioner', 'shampoo']             
        ];

      expect(receivedArray).not.toEqual(expect.arrayContaining(expectedArray));
      /*
        The test suite above will pass for several reasons:
          1. 'tissue' was not found in the receivedArray.
          2. The nested array ['hair mask', 'hair oil'] is missing 'hair tonic'.
             Without it, the nested array cannot be deeply equal. 
          3. The receivedArray has ['conditioner', 'shampoo'] instead of ['shampoo', 'conditioner'].
             Because the element order is flipped, the nested array is not strictly equal.
          
          Note: Nested arrays are evaluated as a single structural unit. They cannot 
          be separated, flipped, or contain a different number of elements.
      */
    });

})
//OBJECTS---------------------------------------------------------------
describe('check user object properties', () => {
   
    const user1 = createNewObject("Jane Doe", 20); 
    const user2 = createNewObject("John Doe", 18); 
    const user1Twin = createNewObject("Jane Doe", 20); 

    test('check the properties and values', () => {
        
        expect(user1).toHaveProperty('age');
        expect(user2).not.toHaveProperty('age', 20);


        //Other matchers for objects:
        expect(user1).toMatchObject({ name: "Jane Doe" });
        expect(user1).toEqual(user1Twin);
        expect(user1).not.toEqual(user2);
    });
});
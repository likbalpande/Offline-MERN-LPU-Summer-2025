// const printBill = function (txt) {
//     console.log("----------------------");
//     console.log("Rs.", txt);
//     console.log("----------------------");
// };

// -------------------------------------

// 4. arrow function assignment
// const printBill = (txt) => {
//     console.log("----------------------");
//     console.log("Rs.", txt);
//     console.log("----------------------");
// };

// const calculateBillAmountForFood = (price) => {
//     return price * 1.05;
// };

// const calculateBillAmountForClothes = (price) => {
//     return price * 1.12;
// };

// const calculateBillAmountForDrinks = (price) => {
//     return price * 1.2;
// };

// ------------------------------------------

const calculateBillAmountForFood = (price) => {
    return price * 1.05;
};

const calculateBillAmountForClothes = (price) => {
    return price * 1.12;
};

const calculateBillAmountForDrinks = (price) => {
    return price * 1.2;
};

const printBillForFood = (txt) => {
    console.log("----------------------");
    console.log("You final bill amount for food is:");
    console.log("Rs.", txt);
    console.log("----------------------");
};

const printBillForFoodAndDrinks = (txt) => {
    console.log("----------------------");
    console.log("You final bill amount for food & drinks is:");
    console.log("Rs.", txt);
    console.log("----------------------");
};

const printBillForAll = (txt) => {
    console.log("----------------------");
    console.log("You final bill amount for food, drinks & clothes is:");
    console.log("Rs.", txt);
    console.log("----------------------");
};

// Higher Order Function -->
//  The function which accepts another function as a parameter OR
//                     returns a function

const generateBill = (food, clothes, drinks, func) => {
    // HoF
    const foodAmount = calculateBillAmountForFood(food);
    const clothesAmount = calculateBillAmountForClothes(clothes);
    const drinksAmount = calculateBillAmountForDrinks(drinks);

    const finalAmount = foodAmount + clothesAmount + drinksAmount;
    func(finalAmount);
};

const foodPrice = 100;
generateBill(foodPrice, 400, 100, printBillForAll); // printBillForAll is a callback

generateBill(100, 400, 0, printBillForFoodAndDrinks); // printBillForFoodAndDrinks is a callback
generateBill(200, 0, 0, printBillForFood); // printBillForFood is a callback

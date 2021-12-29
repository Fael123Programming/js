//To run code easily: ctrl + alt + N
//To stop running: ctrl + C
//JavaScript is dynamically typed.
//typeof to see what type a variable belongs.

const language = "JavaScript"; //const variables can never be modified.
const cars = [ // This is an object called array which contains another objects.
    {
        brand: "Chevrolet",
        model: "Camaro SS 2021",
        potency: 550,
        price: 200000,
    },
    {
        brand: "Ford",
        model: "Mustang GT 500",
        potency: 500,
        price: 180000,
    },
    {
        brand:"Hyundai",
        model: "Azera",
        potency: 150,
        price: 50000,
    }
]

//About map method
//It works according to callback functions: arrow functions or traditional regular functions.
//Callbacks are functions passed as arguments to another functions.
//It returns a new array based on data of another one.
//You have access to that data
//It also doesn't change the size of original array. filter method does it.

//First example:
//Getting the prices of those cars
const prices01 = cars.map(() => {}); //A callback goes through all elements inside an object.
console.log(prices01) // Nothing special
const prices02 = cars.map((car) => {
    //person is just a arbitrary name.It'll receive all objects inside cars.
    console.log(car);
} );
const prices03 = cars.map(() => "JavaScript is nice...");
console.log(prices03);
const prices04 = cars.map((car) => {
    return car.price;//<- I could have made any operations with it such as sum, subtraction and so on.
});
console.log(`Those cars have the following prices: ${prices04}`) //<- using a placeholder with a template string.
//Single-line callback: only one statement which indicates what to be returned.
//If you have another operations to be made, use curly braces instead.
const brands01 = cars.map((car) => car.brand);
console.log("Okay... I know what are the prices...but say me the brands\n"+brands01);
//See that it takes commas also. To drop them down, just use the join method.
const brands02 = cars.map((car) => car.brand).join(" "); //So better
console.log(brands02);
//Now we'll pass a function reference, not one itself.
const getPot01 = function(car){return car.potency}; // Traditional function.
const getPot02 = (car) => car.potency; // Arrow function.
console.log(cars.map(getPot01).join(" ")); //A function reference doesn't include parentheses.
console.log(cars.map(getPot02).join(" "));
//Now we'll create another objects with that data cars has.
const newCars = cars.map((car) =>{
    return {
        model:car.model.toUpperCase(),
        year:2021,
        potency:car.potency+300
    }
});
console.log(newCars);
//Now printing some data on browser!
const dataToBrowser = cars.map((car) => `<h3>${car.brand} ${car.model} ${car.potency} ${car.price}</h3>`); //Template strings support html tags.
const myDiv = document.querySelector("#result");//# to grab ids
myDiv.innerHTML = dataToBrowser.join("");
console.log(dataToBrowser); // dataToBrowser has three strings based on object cars.
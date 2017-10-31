let garage = [];
let iDInc = 0;
function makeCar(brand, problems) {
    iDInc++;
    let car = {
        id: iDInc,
        brand: brand,
        problems: problems,
    }
    return car;
}
function checkInCar(car) {
    garage.push(car);
}
function checkOutCar(car) {
    garage.splice(findItem(car), 1);
}
function findItem(car) {
    for (let vehicle in garage) {
        if (garage[vehicle].id === car.id) {
            return vehicle;

        }
    } return -1;
}
function calculateBill(car) {
    let price = 0;
    switch (car.brand.toUpperCase()) {
        case "NISSAN":
            price = 100;
            break;
            case "FORD"
    }

}

function displayGarage() {
    let myString = ""
    for (var carKey in garage) {
        myString += garage[carKey].id;
    }
    return myString;
}


let myProblems = ["Messy", "Broken"]
let testCar = makeCar("Nissan", myProblems);
checkInCar(testCar);
console.log(testCar.brand);
console.log(displayGarage());
console.log(findItem(testCar));
checkOutCar(testCar);
console.log(displayGarage());
let garage = [];
let iDInc = 0;
let pArray = [];
function makeCar(brand, problems) {
    iDInc++;
    let car = {
        id: iDInc,
        brand: brand,
        problems: problems,
    }
    return car;
}
function makeCarFromInput() {
    iDInc++;
    myProblems = document.getElementsByName("probBox")[0].value.split(",");
    let car = {
        id: iDInc,
        brand: document.getElementsByName("brandBox")[0].value,
        problems: myProblems,
    }
    return car;
}
function checkInCar(car) {
    let myP = document.createElement("p");
    let myButton = document.createElement("BUTTON");
    myButton.innerHTML = "Delete this Car";
    myButton.addEventListener("click", function(event) {
        checkOutCar(car);
        event.preventDefault();
    });
    garage.push(car);
    myP.innerHTML = carToString(car);
    myP.appendChild(myButton);
    document.getElementById("Cars").appendChild(myP);
    pArray.push(myP);

}
function checkOutCar(car) {
    let index = findItem(car);
    console.log(index);
    if (!(index === -1)) { 
        pArray[index].parentNode.removeChild(pArray[index]);
        pArray.splice(index, 1);
        garage.splice(index, 1);
    }
}
function carToString(car) {
    let myString = "Reference Number: " + car.id + " Brand: "
        + car.brand + " Problems: ";
    for (let prob in car.problems) {
        myString += "<br> " + prob + ": " + car.problems[prob];

    }
    return myString + "<br> Price to fix: £" + calculateBill(car) + "<br>";
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
        case "FORD":
            price = 50;
            break;
        case "CITROEN":
            price = 500;
            break;
        default:
            price = 250;
            break;

    }
    price = price * car.problems.length;
    return price;
}

function displayGarage() {
    let myString = ""
    for (var carKey in garage) {
        myString += garage[carKey].id;
    }
    return myString;
}

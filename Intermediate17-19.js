"use strict";
let a;
let node;
function pTagFunc() {
    a = document.createElement("p");
    let element = document.getElementById("div1");
    element.appendChild(a);

}
function setPTag(string) {
    node = document.createTextNode(string);
    a.appendChild(node);


}

function deletePTag() {
    a.parentNode.removeChild(a);
}

let rulers = [];
let requestURLSecond = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
let requestSecond = new XMLHttpRequest();
requestSecond.open("GET", requestURLSecond);
requestSecond.responseType = "json";
requestSecond.send();
requestSecond.onload = function () {

    let kings = requestSecond.response;

    for (let king in kings) {
        let temp = makeKing(kings[king]);
        rulers.push(temp);
    }
}

function makeKing(ruler) {
    let newKing = {
        name: "Default",
        city: "Default",
        house: "Default",
        years: "Default"
    }
    newKing.name = ruler.nm;
    newKing.city = ruler.cty;
    newKing.house = ruler.hse;
    newKing.years = ruler.yrs;
    return newKing;
}

function essentiallyToString(ruler) {
    let finalString = "";
    finalString += "Name: " + ruler.name;
    finalString += "\n" + "City: " + ruler.city;
    finalString += "\n" + "House: " + ruler.house;
    finalString += "\n" + "Years Reigning: " + ruler.years;
    return finalString;
}

function searchFor() {

    let myNode = document.getElementById("div2");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    let string = document.getElementsByName("searchBox")[0].value;
    string = string.toUpperCase();
    let retArray = [];
    for (let item in rulers) {
        if (rulers[item].name.toUpperCase().includes(string) ||
            rulers[item].city.toUpperCase().includes(string) ||
            rulers[item].house.toUpperCase().includes(string) ||
            rulers[item].years.toUpperCase().includes(string)) {
            retArray.push(rulers[item]);
        }
    }
    for (let temp in retArray) {
        let myP2 = document.createElement("p");
        myP2.textContent = essentiallyToString(retArray[temp]);
        document.getElementById("div2").appendChild(myP2);
    }

}

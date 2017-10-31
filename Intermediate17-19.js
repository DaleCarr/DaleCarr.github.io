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

let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"
request.send();
request.onload = function () {
    let requestData = request.response;
    let myH1 = document.createElement("h1");
    let myH2 = document.createElement("h2");

    myH1.textContent = requestData["squadName"];
    myH2.textContent = requestData["secretBase"];
    let members = requestData["members"];

    for (let hero in members) {
        let myP = document.createElement("p");
        let myString = "Name: " + members[hero].name;
        myString += " Age: " + members[hero].age;
        myString += " Secret Identity: " + members[hero].secretIdentity;
        myString += " Powers: ";
        for (let power in members[hero].powers) {
            myString += " " + members[hero].powers[power] + ",";
        }
        myP.textContent = myString;
        document.getElementById("div1").appendChild(myP)
    }
    document.getElementById("div1").appendChild(myH1);
    document.getElementById("div1").appendChild(myH2);

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

function essentiallyToString(ruler){
    let finalString = "";
    finalString +="Name: " + ruler.name;
    finalString +="\n" + "City: " + ruler.city;
    finalString +="\n" +"House: " + ruler.house;
    finalString +="\n" +"Years Reigning: " + ruler.years;
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
    for(let temp in retArray){
         let myP2 = document.createElement("p");
        myP2.textContent = essentiallyToString(retArray[temp]);
        document.getElementById("div2").appendChild(myP2);
    }
     
}

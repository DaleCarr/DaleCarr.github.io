function doubleChar(toSplit) {
    myArr = toSplit.split("");
    myString = "";
    myArr.forEach(function (element) {
        myString += element + element;
    }, this);
    return myString;
}
console.log(doubleChar("testing doubleChar"));

function getSandwich(sandwich) {
    let endString = "";
    for (let i = 0; i < sandwich.length - 5; i++) {
        let mySubString = sandwich.substring(i, i + 5);
        if (mySubString === "bread") {
            console.log(mySubString);
            for (let j = i + 5; j < sandwich.length; j++) {
                mySubString = sandwich.substring(j, j + 5);
                if (mySubString === "bread") {
                    return endString;
                }
                else {
                    endString += sandwich.substring(j, j + 1);
                }
            }
        }

    } return "";
}
console.log(getSandwich("aaaabreadtest meatbreadaaaaa"));

function evenlySpaced(small, medium, large) {
    return ((medium - small) === (large - medium));
}
console.log(evenlySpaced(2, 4, 8));

function nTwice(string, times) {

    return string.substring(0, times) +
        string.substring(string.length - times, string.length);
}
console.log(nTwice("chocolate", 1));

function endsLy(string) {
    return (string.substring(string.length - 2, string.length) === "ly");
}
console.log(endsLy("oddly"));


function stringClean(string) {
    let returnString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != returnString[returnString.length - 1]) {
            returnString += string[i];
        }
    }
    return returnString;
}
console.log(stringClean("aaabbcdd"));

function fibonacci(stopPoint) {
    if (stopPoint === 0) { return 0; }
    if (stopPoint === 1) { return 1; }
    else {
        return fibonacci(stopPoint - 1) + fibonacci(stopPoint - 2);
    }
}
console.log(fibonacci(8));

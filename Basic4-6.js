
function addFunc(a,b,c){
return a + b + c;
}
alert(addFunc(1,2,3));

var person={
    name: "aaaa",
    age: 22,
    occupation: "astronaut",
    

}
function age(){person.age = person.age+1;
    alert("<br>Name: " +person.name+" Age: " + person.age +" Occupation: " + person.occupation);
}
document.write("Name: " +person.name+" Age: " + person.age +" Occupation: " + person.occupation);
person.name = "bbbb";
person.age=24;
person.occupation = "Scientist";
document.write("<br>Name: " +person.name+" Age: " + person.age +" Occupation: " + person.occupation)

function logHi(a){
console.log(a)
}
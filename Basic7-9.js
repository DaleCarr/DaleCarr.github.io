var newGuy = {};
function makePerson(){
    
   setAge();
   setJob();
   setName();
    
    
}
function printPerson(){
     alert("Name: " +newGuy.name+" Age: " + newGuy.age +" Occupation: " + newGuy.occupation);
    if(newGuy.age>=20&&newGuy.age<=40)console.log("This person is between 20 and 40.")
    }

    function setAge(){
    newGuy.age = document.getElementsByName('ageBox')[0].value;
}
    function setName(){
     newGuy.name =  document.getElementsByName('nameBox')[0].value;
    }
    function setJob(){
    newGuy.occupation = document.getElementsByName('occupationBox')[0].value; 
}
    function modAge(){
    newGuy.age = document.getElementsByName('ageBoxMod')[0].value;
}
    function modName(){
     newGuy.name =  document.getElementsByName('nameBoxMod')[0].value;
    }
    function modJob(){
    newGuy.occupation = document.getElementsByName('occupationBoxMod')[0].value; 
}
var myString = "He said " + '"'+"My name is Elliott" + '"';
    function displayString(){
        myString = myString.toUpperCase();
        alert(myString);
    }

    function concatStringAndNum(){
        myConcatString = "String plus "+6;
        alert(myConcatString);
    }
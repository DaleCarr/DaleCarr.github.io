var myArray = ["aaa","bbb","ccc"];

for(var item in myArray){
    console.log(myArray[item]);
}
myArray.push("ddd");
for(var item in myArray){
    console.log(myArray[item]);
}
myArray.pop();
for(var item in myArray){
    console.log(myArray[item]);
}
for(var i = 1;i<11;i++){
    if(i%2===0){
    console.log(i);
    }
}
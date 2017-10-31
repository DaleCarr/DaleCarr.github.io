function fizzBuzz( x,  y,  max){
    for(let i=1; i<max;i++){
        let j =i;
        if(i%3==0 &&i%5==0){
            j=x+y;}
        else if(i%3==0 ){
            j=x;}
        else if( i%5==0){
            j=y;}
    console.log(j)}
}
function numGame(x){
    while (x!=1){
        let logValue = "";
        if(x%3==0){
            x=x/3;
            logValue = "/3";
        }else if((x+1)%3==0){
            x=((x+1)/3);
            logValue = "+1 /3";
        }else if((x-1)%3==0){
            x=((x-1)/3); 
            logValue = "-1 /3";
    }console.log(logValue);
}
}
function tripleFinder(string){
let count = 0;
    for (let i =0;i<string.length-2;i++){
        if (string[i]===string[i+1]&&string [i]===string[i+2]){
            count++;
        }
    }
    console.log("triple count in " + string + ": " + count);
}

    tripleFinder("xxxabyyyycd");
    fizzBuzz("Smack","Bang",50);
    numGame(42);
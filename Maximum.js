let num1 = Math.floor((Math.random()*100)+100);
let num2 = Math.floor((Math.random()*100)+100);
let num3 = Math.floor((Math.random()*100)+100);
let num4 = Math.floor((Math.random()*100)+100);
let num5 = Math.floor((Math.random()*100)+100);
let max = 0;
if(num1>=num2 && num1>=num3 && num1>=num4 && num1>=num5){
    max = num1;
}
else if(num2>=num1 && num2>=num3 && num2>=num4 && num2>=num5){
    max = num2;
}
else if(num3>=num1 && num3>=num2 && num3>=num4 && num3>=num5){
    max = num3;
}
else if(num4>=num1 && num4>=num2 && num4>=num3 && num4>=num5){
    max = num4;
}
else{
    max = num5;
}
console.log(max);
let day = prompt("Enter the day",);
let month = prompt("Enter the month","");
if(20<day<=31 && month == 3 || 1<=day<=30 && month == 4 || 1<=day<=31 && month ==5
    ||1<=day<30 && month == 6 ){
        console.log('Correct Date');
}
else{
    console.log('Date not correct');
}


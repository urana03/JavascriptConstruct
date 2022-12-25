let year = prompt("Enter the year: ",);
if(year%4 == 0 && year%400==0 && year%100 != 0 ){
    alert('Yay! It is a leap year.');
}
else{
    alert('It is not a leap year.');
} 
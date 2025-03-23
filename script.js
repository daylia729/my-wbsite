
/*let calcAverage=(firstscore,secondscore,thirdscore) => (firstscore + secondscore + thirdscore)/3;
function checkWinner(){
    let avgDolhins = calcAverage(85,54,41);
    let avgKoalas = calcAverage(23,34,27);
    if(avgDolhins >= 2*avgKoalas){
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= 2*avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    }
    else{
        console.log("No winners");
    }
}
checkWinner();*/
/*const Mark = {
    fullName : 'Mark Miller',
    weight : 78,
    high:1.69,
    BMI: function(){
       this.bmi = this.weight/this.high**2;
       this.bmi = Math.round(this.bmi*10)/10;
       return this.bmi;
    }
}
Mark.BMI();
console.log(Mark.bmi);
const John = {
    fullName : 'John Smith',
    weight : 92,
    high:1.95,
    BMI: function(){
       this.bmi = this.weight/this.high**2;
       this.bmi = Math.round(this.bmi*10)/10;
       return this.bmi;
    }
}
John.BMI();
console.log(John.bmi);
if(Mark.bmi > John.bmi){
    console.log(`Mark's BMI (${Mark.bmi}) is higher than John's BMI (${John.bmi})`);
}
else{
    console.log(`John's BMI (${John.bmi}) is higher than Mark's BMI (${Mark.bmi})`);
}*/

/*const bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];
function cacltip(bill){
    if(bill <= 300 && bill >= 50){
       return bill*0.15;
    }
    else{
        return bill*0.2;
    }
}
for(i=0;i<=9;i++) {
    bill=bills[i];
    tip = cacltip(bill);
    total = tip + bill;
    tips.push(tip);
    totals.push(total);
}
console.log(tips);
console.log(totals);
function calcAverange(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverange(bills));*/
   






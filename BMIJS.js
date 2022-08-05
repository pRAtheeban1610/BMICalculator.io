function BMICalc(){
const weight_in_kgs = document.getElementById("weight").value;
const height_in_feet = 5.58;
const height_in_meter = height_in_feet/3.281;
const heigh_in_m2 = height_in_meter**2

const bmi = weight_in_kgs/heigh_in_m2;
const bmi1 = bmi.toFixed(2);

if (bmi <=16.00){
    document.getElementById("result").innerHTML=("Underweight");
}else if (bmi >16.00 && bmi <= 16.90) {
    document.getElementById("result").innerHTML=("Underweight (Moderate thinness)");
}else if (bmi >16.90 && bmi <= 18.40 ){
    document.getElementById("result").innerHTML=("Underweight (Mild thinness)");
}else if (bmi >18.40 && bmi <= 24.9) {
    document.getElementById("result").innerHTML=("Normal range " + bmi1 + " is your bmi ");
}else if (bmi >24.8 && bmi <=29.9 ) {
    document.getElementById("result").innerHTML=("Overweight (pre-obese)");
}else if (bmi > 29.9 && bmi <= 34.9) {
    document.getElementById("result").innerHTML=("Obese(class I)"+ bmi);
}
else if (bmi > 34.9  && bmi <= 34.9) {
    document.getElementById("result").innerHTML=("Obese(class II)"+ bmi);
}
else if (bmi >= 40.0) {
    document.getElementById("result").innerHTML=("Obese(class III)"+ bmi);
}
else {
    document.getElementById("result").innerHTML=("Enter a correct value");
}
}

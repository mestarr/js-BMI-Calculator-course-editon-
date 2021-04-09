// Version 1 //

function bmiCalculator (weight , height ) {
  var bmi = weight / (height * height) ;
  return bmi;
}

//Version 2 Math.pow()//

function bmiCalculator (weight , height ) {
  var bmi = weight / Math.pow ((height , 2));
  return bmi;
}

//Version 3 Math.round()//

function bmiCalculator (weight , height ) {
  var bmi = weight / (height * height );
  return Math.round(bmi);
}

var bmi = bmiCalculator (65, 1.8);
console.log (bmi);
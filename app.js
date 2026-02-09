let Button = document.querySelector('.btn');
let Result = document.querySelector('#result');

Button.addEventListener("click", ()=>{
  
  let Height = Number(document.querySelector('#height').value);
  let Weight = Number(document.querySelector('#weight').value);

  if(!Height || isNaN(Height) || Height<0){
    Result.textContent = "Please enter valid height!";
    return;
  }else if(!Weight || isNaN(Weight) || Weight<0){
    Result.textContent = "Please enter valid weight!";
    return;
  }

  let bmi = (Weight / ((Height * Height)/10000));
  bmi = bmi.toFixed(2);

  if(bmi < 18.5){
    Result.textContent = `Underweight ${bmi}`;
  } else if(bmi >= 18.5 && bmi < 24.9){
    Result.textContent = `Normal ${bmi}`;
  } else if(bmi >=25 && bmi < 29.9){
    Result.textContent = `Overweight ${bmi}`;
  } else if(bmi >= 30 && bmi < 34.9){
    Result.textContent = `Obesity (Class 1) ${bmi}`;
  } else if(bmi >= 35 && bmi < 39.9){
    Result.textContent = `Obesity (Class 2) ${bmi}`;
  } else{
    Result.textContent = `EXTREME OBESITY! ${bmi}`;
    Result.style.color = "red";
  }
})
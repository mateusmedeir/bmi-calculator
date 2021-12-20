
function calculate(){
    let weight = parseInt(document.querySelector('input#weight').value)
    let height = parseInt(document.querySelector('input#height').value)
    let category;

    document.getElementById("weight-value").innerHTML = weight + " Kg"
    document.getElementById("height-value").innerHTML = height + " Cm"

    let bmi = (weight / Math.pow((height/100), 2)).toFixed(1)
    document.getElementById("result").innerHTML = bmi

    if(bmi < 18.5){
        category = "Underweight"
        result.style.color = "#E0C40C";
    }else if(bmi >= 18.5 && bmi < 25){
        category = "Normal weight"
        result.style.color = "#00df00"
    }else if(bmi >= 25 && bmi < 30){
        category = "Overweight"
        result.style.color ="#F59601"
    }else{
        category = "Obese"
        result.style.color = "#E07401"
    }

    document.getElementById("category").innerHTML = category
}
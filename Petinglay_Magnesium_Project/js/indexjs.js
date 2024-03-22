function bmi (height, weight) {
    var weight = parseFloat(document.getElementById("weightInPounds").value);
    var weightFinal = weight * 703;  
    console.log(weightFinal);
    var height = parseFloat(document.getElementById("heightInFeet").value);
    var heightinInches = height * 12; 
    console.log(heightinInches);
    var bmiInitial = weightFinal/heightinInches;
    console.log(bmiInitial);
    var bmiFinal = bmiInitial/heightinInches;
    console.log(bmiFinal);
    document.getElementById("bmiTotal").innerHTML = "Your bmi is: " + bmiFinal;
}



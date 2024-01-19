

const userinput = document.getElementById("userinput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function myFunction(){
    if(toFahrenheit.checked){
        temp = Number(userinput.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `Converted to Fahrenheit: ${temp.toFixed(2)}°F`;

    } else if(toCelcius.checked){
        temp = Number(userinput.value);
        temp = (temp - 32) * 5/9;
        result.textContent = `Converted to Celsius: ${temp.toFixed(2)}°C`;   
        
    } else {
        result.textContent = "Please Select a Unit";
    }
}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", myFunction);

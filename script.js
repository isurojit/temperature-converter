//Listen to form
document.querySelector('#temp-form').addEventListener('submit', claculateResult);

//Claculate result function
function claculateResult(e){
    //defining UI
    const UIfahrenheit = document.querySelector('#fahrenheit');
    const UIconverter = document.querySelector('#converter');

    UIconverter.addEventListener("change", claculateConverter);

    e.preventDefault();
}
function claculateConverter(){
    const converterValue =UIconverter[UIconverter.selectedIndex].value;
    //Getting result UI
    const result = document.querySelector('#result');
    const celsiusValue =((UIfahrenheit-32)*5/9);
    const kelvinValue =((UIfahrenheit-32)*5/9)+273.15;
    const rankineValue = (UIfahrenheit+459.67);
    console.log(celsiusValue);
    if(converterValue == "celsius"){
        result.appendChild(document.createTextNode(celsiusValue));
    }if(converterValue == "kelvin"){
        result.appendChild(document.createTextNode(kelvinValue));
    }if(converterValue == "rankine"){
        result.appendChild(document.createTextNode(rankineValue));
    }
}

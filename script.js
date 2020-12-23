//Listen to form
document.querySelector('#temp-form').addEventListener('submit', claculateResult);

//Claculate result function
function claculateResult(e){
    //defining UI
    const UIfahrenheit = document.querySelector('#fahrenheit');
    const UIconverter = document.querySelector('#converter');

    UIconverter.addEventListener("submit", function(e){
        console.log(e.value);
    });

    e.preventDefault();
}
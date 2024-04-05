const kelvinTemp = document.querySelector('#kelvin')
const farenheitTemp = document.querySelector('#farenheit')
const celsiusTemp = document.querySelector('#celsius')

const allUnits = document.querySelectorAll(".temperature");

console.log(allUnits);
const valueTemp = "";
allUnits.forEach((unit) =>{
    if(unit.value !== ""){
        valueTemp = unit.value;
    }
    console.log(valueTemp);
})

const values = []
const convertBtn = document.querySelector(".convert")
convertBtn.addEventListener('click', () => {
   updateValue();
});
let PrevFvalue = farenheitTemp.value;
let PrevKvalue = kelvinTemp.value;
let PrevCvalue = celsiusTemp.value;
function updateValue(){
    currentFvalue = farenheitTemp.value;
    currentCvalue = celsiusTemp.value;
    currentKvalue = kelvinTemp.value;
    if (currentFvalue !== PrevFvalue) {
        kelvinTemp.value = Math.round((((parseFloat(farenheitTemp.value) - 32) / 1.79999999) + 273.15) * 100) / 100;
        celsiusTemp.value = Math.round(((parseFloat(farenheitTemp.value) - 32) * (5 / 9)) * 100) / 100;
    } else if (currentKvalue !== PrevKvalue) {
        farenheitTemp.value = Math.round((((parseFloat(kelvinTemp.value) - 273.15) * 1.8) + 32) * 100) / 100;
        celsiusTemp.value = Math.round(((parseFloat(kelvinTemp.value)) - 273.15) * 100) / 100;
    } else if (currentCvalue !== PrevCvalue) {
        farenheitTemp.value = Math.round(((parseFloat(celsiusTemp.value)) * (9 / 5) + 32) * 100) / 100;
        kelvinTemp.value = Math.round(((parseFloat(celsiusTemp.value)) + 273.15) * 100) / 100;
    }

    PrevCvalue = currentCvalue;
    PrevKvalue = currentKvalue;
    PrevFvalue = currentFvalue;
}

const clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", clearValues);
function clearValues(){
    farenheitTemp.value = "";
    kelvinTemp.value = "";
    celsiusTemp.value = "";

    values.length = 0;
}
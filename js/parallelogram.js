// function calculateParallelogramArea(){

//     // get Parallelogram base value
//     const ParallelogramBaseInput = document.getElementById("Parallelogram-Base");
//     const ParallelogramBaseText = ParallelogramBaseInput.value;
//     const base = parseFloat(ParallelogramBaseText);
//     console.log(base);

//     // get Parallelogram height value

//     const ParallelogramHeightInput = document.getElementById("Parallelogram-Height");
//     const ParallelogramHeightText = ParallelogramHeightInput.value;
//     const height = parseFloat(ParallelogramHeightText);
//     console.log(height);

//     // calculate Parallelogram area
//     const area = base*height;
//     console.log("area of the Parallelogram is: " , area);

//     //display Parallelogram area
//     const ParallelogramArea = document.getElementById('Parallelogram-Area');
//     ParallelogramArea.innerText = area;
// }

function(getInputValueById){
    const inputField = document.getElementById('inputFieldId');
    const inputTextValue = inputField.value;
    const inputValue = parseFloat(inputTextValue);

    return inputValue;
}

function dusplayFunction(elementId, area){

    const element = document.getElementById('elementId');
    element.innerText = area;
}

function (calculateShapeArea){

    const base = document.getElementById('shape-Base');
    const height = document.getElementById('shape-Height');
    const area = base * height;
    dusplayFunction('shape-Area' , area);
}


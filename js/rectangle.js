function calculateRectangleArea(){

    // get rectangle length value
    const rectangleLengthInput = document.getElementById("rectangle-Length");
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // get rectangle width value

    const rectangleWidthInput = document.getElementById("rectangle-Width");
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

     // Validate inputs
    //  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    //     alert("Please enter valid positive numbers for both length and width.");
    //     return;
    // }

    // calculate rectangle area
    const area = length*width;
    console.log("area of the rectangle is: " , area);

    //display rectangle area
    const rectangleArea = document.getElementById('rectangle-Area');
    rectangleArea.innerText = area;
}
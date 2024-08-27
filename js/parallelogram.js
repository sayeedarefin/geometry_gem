function calculateParallelogramArea(){

    // get Parallelogram base value
    const ParallelogramBaseInput = document.getElementById("Parallelogram-Base");
    const ParallelogramBaseText = ParallelogramBaseInput.value;
    const base = parseFloat(ParallelogramBaseText);
    console.log(base);

    // get Parallelogram height value

    const ParallelogramHeightInput = document.getElementById("Parallelogram-Height");
    const ParallelogramHeightText = ParallelogramHeightInput.value;
    const height = parseFloat(ParallelogramHeightText);
    console.log(height);

    // calculate Parallelogram area
    const area = base*height;
    console.log("area of the Parallelogram is: " , area);

    //display Parallelogram area
    const ParallelogramArea = document.getElementById('Parallelogram-Area');
    ParallelogramArea.innerText = area;
}

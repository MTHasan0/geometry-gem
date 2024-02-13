function triangleCalculate(){
    const triangleBaseValue = document.getElementById('triangleBaseInput');
    const triangleBase = triangleBaseValue.value;
    const triangleBaseConvert = parseFloat(triangleBase);

    const triangleHeightValue = document.getElementById('triangleHeightInput');
    const triangleHeight = triangleHeightValue.value;

    const triangleHeightConvert = parseFloat(triangleHeight);

    const volumeOfTriangle = 0.5 * triangleBaseConvert * triangleHeightConvert;

    const areaShow = document.getElementById('areaTriangle');
     areaShow.innerText = volumeOfTriangle;




}
function pythag() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = Math.round(((Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2))) + Number.EPSILON) * 100) / 100;
    const output = document.getElementById('pythagresult');
    output.textContent = c;
}

const toM = {
    mm: 0.001,
    cm: 0.01,
    m: 1, 
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144
};

function convertUnits() {
    const dropdown = document.getElementById('fromUnit');
    var fromValue = dropdown.value;

    document.getElementById('fromUnit').textContent = convertedValue;
    
    const toDropdown = document.getElementById('toUnit');
    var toValue = toDropdown.value;

    var ValInMeters = parseFloat(document.getElementById('inputValue').value) * toM[fromValue];
    var convertedValue = ValInMeters / toM[toValue];

    document.getElementById('outputValue').textContent = convertedValue;
}

function angles() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    
    // Calculate angles in radians
    var angleA = Math.atan(sideB / sideA);
    var angleB = Math.atan(sideA / sideB);

    // Convert radians to degrees
    angleA = angleA * (180 / Math.PI);
    angleB = angleB * (180 / Math.PI);

    // Round to two decimal places
    angleA = Math.round((angleA + Number.EPSILON) * 10) / 10;
    angleB = Math.round((angleB + Number.EPSILON) * 10) / 10;
    
    // Display results
    document.getElementById('angleAResult').textContent = angleA + "°";
    document.getElementById('angleBResult').textContent = angleB + "°";
}
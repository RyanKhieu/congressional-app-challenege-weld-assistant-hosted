function pythag() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = Math.round(((Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2))) + Number.EPSILON) * 100) / 100;
    const output = document.getElementById('pythagresult');
    output.textContent = c;
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
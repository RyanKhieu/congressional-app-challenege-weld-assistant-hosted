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

    const toDropdown = document.getElementById('toUnit');
    var toValue = toDropdown.value;

    var input = parseFloat(document.getElementById('inputValue').value);
    if(isNaN(input)) {
        document.getElementById('outputValue').textContent = "Invalid input";
        return;
    }

    var ValInMeters = input * toM[fromValue];
    var convertedValue = ValInMeters / toM[toValue];

    document.getElementById('outputValue').textContent = convertedValue.toFixed(1);
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

function submitContactForm() {
    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    // Basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!subject) {
        alert('Please enter a subject.');
        return;
    }

    if (!message) {
        alert('Please enter a message.');
        return;
    }

    // If all validations pass, show success message
    alert('Thank you for your message, ' + name + '! We will get back to you soon at ' + email + '.');

    // Log form data to console (for testing purposes)
    console.log('Form submitted:', { name, email, subject, message });

    // Clear the form
    document.getElementById('contact-form').reset();

    // Optional: Redirect to home page after a short delay
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1500);
}
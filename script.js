function pythag() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = Math.round(((Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2))) + Number.EPSILON) * 100) / 100;
    alert(c);
}
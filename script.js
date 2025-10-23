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

//tools page 
const gaugeData = {
  steel: [
    {g:7,in:0.1761,mm:4.472},{g:8,in:0.1644,mm:4.176},{g:9,in:0.1495,mm:3.797},
    {g:10,in:0.1345,mm:3.416},{g:11,in:0.1196,mm:3.038},{g:12,in:0.1046,mm:2.657},
    {g:13,in:0.0897,mm:2.278},{g:14,in:0.0747,mm:1.897},{g:15,in:0.0673,mm:1.709},
    {g:16,in:0.0598,mm:1.519},{g:17,in:0.0538,mm:1.367},{g:18,in:0.0478,mm:1.214},
    {g:19,in:0.0418,mm:1.062},{g:20,in:0.0359,mm:0.911},{g:21,in:0.0320,mm:0.813},
    {g:22,in:0.0299,mm:0.759},{g:23,in:0.0253,mm:0.643},{g:24,in:0.0239,mm:0.607},
    {g:25,in:0.0207,mm:0.526},{g:26,in:0.0179,mm:0.455},{g:27,in:0.0164,mm:0.416},
    {g:28,in:0.0149,mm:0.378},{g:29,in:0.0135,mm:0.343},{g:30,in:0.0125,mm:0.318}
  ],
  stainless: [
    {g:7,in:0.182,mm:4.63},{g:8,in:0.170,mm:4.32},{g:9,in:0.155,mm:3.94},
    {g:10,in:0.1406,mm:3.57},{g:11,in:0.125,mm:3.18},{g:12,in:0.1094,mm:2.78},
    {g:13,in:0.0938,mm:2.38},{g:14,in:0.0781,mm:1.98},{g:15,in:0.0719,mm:1.83},
    {g:16,in:0.0625,mm:1.59},{g:17,in:0.0563,mm:1.43},{g:18,in:0.0500,mm:1.27},
    {g:19,in:0.0438,mm:1.11},{g:20,in:0.0375,mm:0.95},{g:21,in:0.0333,mm:0.85},
    {g:22,in:0.0313,mm:0.79},{g:23,in:0.0263,mm:0.67},{g:24,in:0.025,mm:0.64},
    {g:25,in:0.0219,mm:0.56},{g:26,in:0.0188,mm:0.48},{g:27,in:0.0175,mm:0.44},
    {g:28,in:0.0156,mm:0.40},{g:29,in:0.014,mm:0.36},{g:30,in:0.0125,mm:0.32}
  ],
  galvanized: [
    {g:7,in:0.179,mm:4.55},{g:8,in:0.167,mm:4.24},{g:9,in:0.152,mm:3.86},
    {g:10,in:0.1382,mm:3.51},{g:11,in:0.1233,mm:3.13},{g:12,in:0.1084,mm:2.75},
    {g:13,in:0.0934,mm:2.37},{g:14,in:0.0785,mm:1.99},{g:15,in:0.0715,mm:1.82},
    {g:16,in:0.0635,mm:1.61},{g:17,in:0.057,mm:1.45},{g:18,in:0.0516,mm:1.31},
    {g:19,in:0.045,mm:1.14},{g:20,in:0.0396,mm:1.01},{g:21,in:0.0339,mm:0.86},
    {g:22,in:0.0336,mm:0.85},{g:23,in:0.028,mm:0.71},{g:24,in:0.0276,mm:0.70},
    {g:25,in:0.023,mm:0.58},{g:26,in:0.0217,mm:0.55},{g:27,in:0.020,mm:0.51},
    {g:28,in:0.017,mm:0.43},{g:29,in:0.015,mm:0.38},{g:30,in:0.014,mm:0.36}
  ],
  aluminum: [
    {g:7,in:0.126,mm:3.20},{g:8,in:0.114,mm:2.90},{g:9,in:0.102,mm:2.59},
    {g:10,in:0.1019,mm:2.588},{g:11,in:0.0907,mm:2.304},{g:12,in:0.0808,mm:2.052},
    {g:13,in:0.072,mm:1.83},{g:14,in:0.0641,mm:1.628},{g:15,in:0.0571,mm:1.45},
    {g:16,in:0.0508,mm:1.29},{g:17,in:0.0453,mm:1.15},{g:18,in:0.0403,mm:1.02},
    {g:19,in:0.0357,mm:0.91},{g:20,in:0.032,mm:0.81},{g:21,in:0.0283,mm:0.72},
    {g:22,in:0.0253,mm:0.643},{g:23,in:0.0226,mm:0.574},{g:24,in:0.0201,mm:0.511},
    {g:25,in:0.0179,mm:0.455},{g:26,in:0.0159,mm:0.404},{g:27,in:0.014,mm:0.356},
    {g:28,in:0.0125,mm:0.318},{g:29,in:0.011,mm:0.279},{g:30,in:0.010,mm:0.254}
  ]
};

function updateTable() {
  const material = document.getElementById("materialSelect").value;
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  gaugeData[material].forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.g}</td><td>${row.in.toFixed(4)}</td><td>${row.mm.toFixed(3)}</td>`;
    tbody.appendChild(tr);
  });
}
updateTable();
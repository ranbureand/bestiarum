/*!
** Generate a color palette.
*/

var rectWidth = 160,
    rectHeight = 160;

/*
** Colors.
*/

// Define the color hue values.
var h1 =  0, // red
    h2 =  30, // redOrange
    h3 =  60, // orange
    h4 =  90, // yellowOrange
    h5 =  120, // yellow
    h6 =  150, // yellowGreen
    h7 =  180, // green
    h8 =  210, // blueGreen
    h9 =  240, // blue
    h10 = 270, // blueViolet
    h11 = 300, // violet
    h12 = 330; // redViolet

// Define the color saturation and luminance values.
var hueDarkTypeS = 0.55,
    hueDarkTypeL = 0.30,

    hueLightBackS = 0.55,
    hueLightBackL = 0.80,

    hueLightBackS2 = 0.55,
    hueLightBackL2 = 0.825,

    hueLightTypeS = 0.55,
    hueLightTypeL = 0.85,

    hueDarkBackS =  0.55,
    hueDarkBackL =  0.35;

    hueDarkBackS2 =  0.55,
    hueDarkBackL2 =  0.375;

// Decline the colors (different tones).
var h1s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h1},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h1},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h1},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h1},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h1},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h1}
    },
    h2s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h2},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h2},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h2},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h2},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h2},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h2}
    },
    h3s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h3},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h3},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h3},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h3},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h3},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h3}
    },
    h4s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h4},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h4},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h4},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h4},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h4},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h4}
    },
    h5s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h5},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h5},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h5},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h5},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h5},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h5}
    },
    h6s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h6},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h6},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h6},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h6},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h6},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h6}
    },
    h7s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h7},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h7},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h7},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h7},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h7},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h7}
    },
    h8s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h8},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h8},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h8},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h8},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h8},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h8}
    },
    h9s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h9},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h9},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h9},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h9},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h9},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h9}
    },
    h10s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h10},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h10},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h10},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h10},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h10},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h10}
    },
    h11s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h11},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h11},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h11},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h11},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h11},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h11}
    },
    h12s = {
      'dark-type'    : {mode: 'okhsl', alpha: 1, s: hueDarkTypeS,   l: hueDarkTypeL,   h: h12},
      'light-back'   : {mode: 'okhsl', alpha: 1, s: hueLightBackS,  l: hueLightBackL,  h: h12},
      'light-back-2' : {mode: 'okhsl', alpha: 1, s: hueLightBackS2, l: hueLightBackL2, h: h12},
      'light-type'   : {mode: 'okhsl', alpha: 1, s: hueLightTypeS,  l: hueLightTypeL,  h: h12},
      'dark-back'    : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,   l: hueDarkBackL,   h: h12},
      'dark-back-2'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS2,  l: hueDarkBackL2,  h: h12}
    };

// Create an array of the colors.
var colors = [];

colors.push(
  h1s,
  h2s,
  h3s,
  h4s,
  h5s,
  h6s,
  h7s,
  h8s,
  h9s,
  h10s,
  h11s,
  h12s
);

//console.log(colors);

/*
** Setup playground.
*/

document.body.style.backgroundColor = culori.formatHex({ mode: 'okhsl', alpha: 1, s: 1.00, l: 1.00, h: 0 });

/*
** Generate the color swatches.
*/

var contentSwatches = SVG().addTo('.swatches').size(rectWidth*colors.length, rectHeight*Object.keys(h1s).length);

for(var i = 0; i < colors.length; i++) {

  Object.keys(colors[i]).forEach(function(tone, j) {
      // tone: the name of the object key.
      // j: the index of the key within the object.

      var hex = culori.formatHex(colors[i][tone]);

      // Generate the color swatch.
      var rect = contentSwatches.rect(rectWidth, rectHeight);

      rect.attr({
        fill: hex,
        x: 0 + rectWidth*i,
        y: 0 + rectHeight*j,
      });

      // Generate the label of the color swatch.
      var labelColor;

      if (j < 4) {
        labelColor = culori.formatHex(colors[i]['70']);
      } else if (j >= 4 && j < 6) {
        labelColor = culori.formatHex(colors[i]['100']);
      } else if (j >= 6) {
        labelColor = culori.formatHex(colors[i]['10']);
      };

      //var label = contentSwatches.text(tone + ' / ' + color.name);
      var label = contentSwatches.text(tone);

      label.attr({
        x: 2 + rectWidth*i,
        y: rectHeight - 6 + rectHeight*j
      });

      label.font({
        fill: labelColor,
        family: 'sans-serif',
        size: 14
      })

  });

};

/*
** Create dark type swatches SCSS.
*/

let darkTypeSwatches = '';

darkTypeSwatches = '$d-type-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['dark-type']),
      colorH = colors[i]['dark-type']['h'],
      colorS = colors[i]['dark-type']['s'],
      colorL = colors[i]['dark-type']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  darkTypeSwatches += line;

  darkTypeSwatches += '\n';
}

darkTypeSwatches += ');';

console.log(darkTypeSwatches);

/*
** Create light back swatches SCSS.
*/

let lightBackSwatches = '';

lightBackSwatches = '$l-back-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['light-back']),
      colorH = colors[i]['light-back']['h'],
      colorS = colors[i]['light-back']['s'],
      colorL = colors[i]['light-back']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  lightBackSwatches += line;

  lightBackSwatches += '\n';
}

lightBackSwatches += ');';

console.log(lightBackSwatches);

/*
** Create light back 2 swatches SCSS.
*/

let lightBack2Swatches = '';

lightBack2Swatches = '$l-back-2-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['light-back-2']),
      colorH = colors[i]['light-back-2']['h'],
      colorS = colors[i]['light-back-2']['s'],
      colorL = colors[i]['light-back-2']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  lightBack2Swatches += line;

  lightBack2Swatches += '\n';
}

lightBack2Swatches += ');';

console.log(lightBack2Swatches);

/*
** Create light type swatches SCSS.
*/

let lightTypeSwatches = '';

lightTypeSwatches = '$l-type-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['light-type']),
      colorH = colors[i]['light-type']['h'],
      colorS = colors[i]['light-type']['s'],
      colorL = colors[i]['light-type']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  lightTypeSwatches += line;

  lightTypeSwatches += '\n';
}

lightTypeSwatches += ');';

console.log(lightTypeSwatches);

/*
** Create dark back swatches SCSS.
*/

let darkBackSwatches = '';

darkBackSwatches = '$d-back-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['dark-back']),
      colorH = colors[i]['dark-back']['h'],
      colorS = colors[i]['dark-back']['s'],
      colorL = colors[i]['dark-back']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [okhsl: ${colorH}, ${colorS}, ${colorL}]`;

  darkBackSwatches += line;

  darkBackSwatches += '\n';
}

darkBackSwatches += ');';

console.log(darkBackSwatches);

/*
** Create dark back 2 swatches SCSS.
*/

let darkBack2Swatches = '';

darkBack2Swatches = '$d-back-2-colors: (\n';

for (let i = 0; i < colors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(colors[i]['dark-back-2']),
      colorH = colors[i]['dark-back-2']['h'],
      colorS = colors[i]['dark-back-2']['s'],
      colorL = colors[i]['dark-back-2']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [okhsl: ${colorH}, ${colorS}, ${colorL}]`;

  darkBack2Swatches += line;

  darkBack2Swatches += '\n';
}

darkBack2Swatches += ');';

console.log(darkBack2Swatches);

/*
** Merge light and dark swatches.
*/

var swatches = '';

swatches += darkTypeSwatches;
swatches += '\n';
swatches += lightBackSwatches;
swatches += '\n';
swatches += lightBack2Swatches;
swatches += '\n';
swatches += lightTypeSwatches;
swatches += '\n';
swatches += darkBackSwatches;
swatches += '\n';
swatches += darkBack2Swatches;

/*
** Download the color swatches as a SVG file.
*/

var contentSwatchesFile = contentSwatches.svg();

// This code snippet taken from:
// https://gist.github.com/danallison/3ec9d5314788b337b682
function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

/*
** Download the color swatches as a SCSS file.
*/

function downloadSCSS(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/*
** Listen to keys being pressed.
*/

window.addEventListener('keydown', checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "67") { // “c” key.
    downloadString(contentSwatchesFile, 'image/svg+xml', 'Content_Swatches');
  } else if (e.keyCode == "70") { // “f” key.
    downloadSCSS('_swatches.scss', swatches);
  }
}
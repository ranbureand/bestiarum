/*!
** Generate a color palette by interpolating a start and end color.
*/

var rectWidth = 160,
    rectHeight = 64;

/*
** Background colors.
*/

var backs = {
    'lighter' : {mode: 'okhsl', alpha: 1, s: 0.00, l: 0.00, h: 0},
    'light'   : {mode: 'okhsl', alpha: 1, s: 0.00, l: 0.99, h: 0},
    'dark'    : {mode: 'okhsl', alpha: 1, s: 0.00, l: 0.95, h: 0},
    'darker'  : {mode: 'okhsl', alpha: 1, s: 0.00, l: 0.00, h: 0},
};

/*
** Interface colors.
*/

var texts = {
    '0'   : {mode: 'okhsl', alpha: 0.00, s: 0.00, l: 0.00, h: 0},
    '10'  : {mode: 'okhsl', alpha: 0.10, s: 0.00, l: 0.00, h: 0},
    '20'  : {mode: 'okhsl', alpha: 0.20, s: 0.00, l: 0.00, h: 0},
    '30'  : {mode: 'okhsl', alpha: 0.30, s: 0.00, l: 0.00, h: 0},
    '40'  : {mode: 'okhsl', alpha: 0.40, s: 0.00, l: 0.00, h: 0},
    '50'  : {mode: 'okhsl', alpha: 0.50, s: 0.00, l: 0.00, h: 0},
    '60'  : {mode: 'okhsl', alpha: 0.60, s: 0.00, l: 0.00, h: 0},
    '70'  : {mode: 'okhsl', alpha: 0.70, s: 0.00, l: 0.00, h: 0},
    '80'  : {mode: 'okhsl', alpha: 0.80, s: 0.00, l: 0.00, h: 0},
    '90'  : {mode: 'okhsl', alpha: 0.90, s: 0.00, l: 0.00, h: 0},
    '100' : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 0.00, h: 0},

    'l0'   : {mode: 'okhsl', alpha: 0.00, s: 0.00, l: 1.00, h: 0},
    'l10'  : {mode: 'okhsl', alpha: 0.10, s: 0.00, l: 1.00, h: 0},
    'l20'  : {mode: 'okhsl', alpha: 0.20, s: 0.00, l: 1.00, h: 0},
    'l30'  : {mode: 'okhsl', alpha: 0.30, s: 0.00, l: 1.00, h: 0},
    'l40'  : {mode: 'okhsl', alpha: 0.40, s: 0.00, l: 1.00, h: 0},
    'l50'  : {mode: 'okhsl', alpha: 0.50, s: 0.00, l: 1.00, h: 0},
    'l60'  : {mode: 'okhsl', alpha: 0.60, s: 0.00, l: 1.00, h: 0},
    'l70'  : {mode: 'okhsl', alpha: 0.70, s: 0.00, l: 1.00, h: 0},
    'l80'  : {mode: 'okhsl', alpha: 0.80, s: 0.00, l: 1.00, h: 0},
    'l90'  : {mode: 'okhsl', alpha: 0.90, s: 0.00, l: 1.00, h: 0},
    'l100' : {mode: 'okhsl', alpha: 1.00, s: 0.00, l: 1.00, h: 0}
};

// Define the interface hues.
var type =      100,
    interact =  100,
    cheer =     100,
    warn =      100,
    alert =     100;

// Decline the interface hues in different tones.

/*
** Content colors.
*/

// Define the content hues.
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

var hueLightBackS = 0.55,
    hueLightBackL = 0.80,
    hueDarkBackS =  0.55,
    hueDarkBackL =  0.35;

// Decline the content colors (different tones).
var h1s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h1},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h1}
    },
    h2s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h2},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h2}
    },
    h3s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h3},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h3}
    },
    h4s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h4},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h4}
    },
    h5s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h5},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h5}
    },
    h6s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h6},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h6}
    },
    h7s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h7},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h7}
    },
    h8s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h8},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h8}
    },
    h9s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h9},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h9}
    },
    h10s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h10},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h10}
    },
    h11s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h11},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h11}
    },
    h12s = {
      'light-back' : {mode: 'okhsl', alpha: 1, s: hueLightBackS, l: hueLightBackL,  h: h12},
      'dark-back'  : {mode: 'okhsl', alpha: 1, s: hueDarkBackS,  l: hueDarkBackL,   h: h12}
    };

// Create an array of the content colors.
var contentColors = [];

contentColors.push(
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

/*
** Setup playground.
*/

document.body.style.backgroundColor = culori.formatHex(backs['light']);

/*
** Generate the content color swatches.
*/

var contentSwatches = SVG().addTo('.content-swatches').size(rectWidth*contentColors.length, rectHeight*Object.keys(h1s).length);

for(var i = 0; i < contentColors.length; i++) {

  Object.keys(contentColors[i]).forEach(function(tone, j) {
      // tone: the name of the object key.
      // j: the index of the key within the object.

      var hex = culori.formatHex(contentColors[i][tone]);

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
        labelColor = culori.formatHex(contentColors[i]['70']);
      } else if (j >= 4 && j < 6) {
        labelColor = culori.formatHex(contentColors[i]['100']);
      } else if (j >= 6) {
        labelColor = culori.formatHex(contentColors[i]['10']);
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

let lSwatches = '';

lSwatches = '$l-colors: (\n';

for (let i = 0; i < contentColors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(contentColors[i]['light-back']),
      colorH = contentColors[i]['light-back']['h'],
      colorS = contentColors[i]['light-back']['s'],
      colorL = contentColors[i]['light-back']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  lSwatches += line;

  //console.log(contentColors[i]['light-back']);
  //console.log(contentColors[i]['light-back']['s']);

  /*if (i !== contentColors.length - 1) { // This checks to make sure we are not on the last item.
    lSwatches += '\n'; // This adds a new line.
  }*/
  lSwatches += '\n';
}

lSwatches += ');';

console.log(lSwatches);

let dSwatches = '';

dSwatches = '$d-colors: (\n';

for (let i = 0; i < contentColors.length; i++) {

  var hue = i+1,
      color = culori.formatHex(contentColors[i]['dark-back']),
      colorH = contentColors[i]['dark-back']['h'],
      colorS = contentColors[i]['dark-back']['s'],
      colorL = contentColors[i]['dark-back']['l'],
      line = [];

  var line = `"s${hue}" : ${color}, // [${colorH}, ${colorS}, ${colorL}]`;

  dSwatches += line;

  //console.log(contentColors[i]['light-back']);
  //console.log(contentColors[i]['light-back']['s']);

  /*if (i !== contentColors.length - 1) { // This checks to make sure we are not on the last item.
    dSwatches += '\n'; // This adds a new line.
  }*/
  dSwatches += '\n';
}

dSwatches += ');';

console.log(dSwatches);

var swatches = '';

swatches += lSwatches;
swatches += '\n';
swatches += dSwatches;

/*
** Download the color swatches in a SCSS file.
*/

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

download('_swatches.scss', swatches);

/*
** Generate the content color experiments.
*/

function generateExperiments(container, textTone, backTone) {

  var experiments = SVG().addTo(container).size(rectWidth*contentColors.length, rectHeight);

  for(var i = 0; i < contentColors.length; i++) {

    var name;

    /*if (mode == 'back') {
      textColor = texts[textTone];
      textOpacity = texts[textTone].a;
      backColor = contentColors[i][backTone];
      tone = backTone;
      name = contentColors[i][backTone].name;
    } else if (mode == 'text') {
      textColor = contentColors[i][textTone];
      textOpacity = 100;
      backColor = backs[backTone];
      tone = textTone;
      name = contentColors[i][textTone].name;
    };*/

    var textHex = culori.formatHex(textTone), // convert the color from HSLuv code to HEX code.
        backHex = culori.formatHex(backTone); // convert the color from HSLuv code to HEX code.

    // Generate the background of the experiment.
    var rect = experiments.rect(rectWidth - 16, rectHeight);

    rect.attr({
      fill: backHex,
      //rx: 8,
      x: 8 + rectWidth*i,
      y: 0,
    });

    // Generate the text of the experiment.
    //var text = experiments.text( toreTone + ' / ' + name);

    text.attr({
      x: 8 + (rectWidth-16)/2 + rectWidth*i,
      y: rectHeight/2,
      'dominant-baseline' : 'middle',
      //'fill-opacity' : textOpacity + '%',
      'text-anchor': 'middle',
    });

    text.font({
      fill: textHex,
      family: 'sans-serif',
      size: 14
    })

  };
}

// Light typography on dark colored background.
//generateExperiments('.experiments', 'l100', '40');
//generateExperiments('.experiments', 'l100', '50');


/*
** Download the color swatches.
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

window.addEventListener('keydown', checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode == "67") { // “c” key.
    downloadString(contentSwatchesFile, 'image/svg+xml', 'Content_Swatches');
  } else if (e.keyCode == "70") { // “f” key.
    downloadString(flagSwatchesFile, 'image/svg+xml', 'Flag_Swatches');
    downloadString(flagGradientSwatchesFile, 'image/svg+xml', 'Flag_Gradient_Swatches');
    downloadString(flagGradientFile, 'image/svg+xml', 'Flag_Gradient');
    downloadString(logoFlatFile, 'image/svg+xml', 'Logo_Flat');
  } else if (e.keyCode == "73") { // “i” key.
    downloadString(interfaceSwatchesFile, 'image/svg+xml', 'Interface_Swatches');
  }
}
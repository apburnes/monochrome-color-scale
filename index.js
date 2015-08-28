'use strict';

var converter = require('color-convert')();

function monochrome(rgb, units, options) {
  options = options || {};
  var scale = {};
  var min = lRange(options.min, 5);
  var max = lRange(options.max, 95);
  var hue = converter.rgb(rgb).hsl();

  function buildScale(luminosity, index) {
    var hsl = hue.slice(0, 2).concat(luminosity);
    var color = { index: index, hsl: hsl };

    if (options.rgb) {
      color['rgb'] = converter.hsl(hsl).rgb();
    }

    return color;
  }

  var intervals = lumIntervals(units, min, max);
  scale['colors'] = intervals.map(buildScale);

  return scale;
}

function lumIntervals(units, min, max) {
  var intervals = [min];
  var steps = units - 1;
  var range = max - min;
  var division = range/steps;

  for (var i = 0; i < steps; i++) {
    intervals[i+1] = intervals[i] + division;
  }

  return intervals;
}

function lRange(num, def) {
  num = parseInt(num);
  return num >= 0 && num <= 100 ? num : def;
}

module.exports = monochrome;

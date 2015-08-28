monochrome-color-scale
======================

Feed an rgb array and the number of scale units to create a monochromatic color scale

## Install

`$ npm install monochrome-color-scale`

## Usage

#### monochrome(color, units, [options])

__Params__

- `color`: Array <(RGB)> - Array length of three integers from 0 to 255 to create the red, green, blue color
- `units`: Integer - The number of scale divisions
- `options`: Object <(Optional)> - Output and scale options
  - `min`: Integer <Default: 5> - the luminosity value 0 to 100
  - `max`: Integer <Default: 95> - the luminosity value 0 to 100
  - `rgb`: Boolean <Default: false> - Add RGB color to output scale


```js
var monochrome = require('monochrome-color-scale');

var rgbColor = [61, 181, 182];
var units = 3;

var scale = monochrome(color, units);

// console.log(scale) result
//
// {
//   "colors": [
//     {
//       "index": 0,
//       "hsl": [180, 50, 5]
//     },
//     {
//       "index": 1,
//       "hsl": [180, 50, 50]
//     },
//     {
//       "index": 2,
//       "hsl": [180, 50, 95]
//     }
//   ]
// }
```

## Contact

Andy B

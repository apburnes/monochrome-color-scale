'use strict';

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var monochrome = require('../');

var color1 = [61, 181, 182];
var units1 = 6;
var opts = { min: 10, max: 90 };

lab.experiment('Monochromatic Color Scale Generator', function() {

  lab.test('returns object with array prop "colors" with 6 color objects', function(done) {
    var scale = monochrome(color1, units1, opts);

    Code.expect(scale).to.be.an.object();
    Code.expect(scale.colors).to.be.an.array();
    Code.expect(scale.colors.length).to.equal(units1);
    Code.expect(scale.colors[0].hsl[2]).to.equal(10);
    Code.expect(scale.colors[units1-1].hsl[2]).to.equal(90);

    scale.colors.map(function(color, index) {
      Code.expect(color.index).to.equal(index);
      Code.expect(color.hsl).to.be.an.array();
      Code.expect(color.rgb).to.be.undefined();
    });

    done();
  });

  lab.test('returns scale object with additional "rgb" prop in each color', function(done) {
    var newOpts = {min: 10, max: 90, rgb: true};
    var scale = monochrome(color1, units1, newOpts);

    Code.expect(scale).to.be.an.object();
    Code.expect(scale.colors).to.be.an.array();
    Code.expect(scale.colors.length).to.equal(units1);
    Code.expect(scale.colors[0].hsl[2]).to.equal(10);
    Code.expect(scale.colors[units1-1].hsl[2]).to.equal(90);

    scale.colors.map(function(color, index) {
      Code.expect(color.index).to.equal(index);
      Code.expect(color.hsl).to.be.an.array();
      Code.expect(color.rgb).to.be.an.array();
    });

    done();
  });

  lab.test('return min/max default luminosity if not specified', function(done) {
    var scale = monochrome(color1, units1);

    Code.expect(scale).to.be.an.object();
    Code.expect(scale.colors).to.be.an.array();
    Code.expect(scale.colors.length).to.equal(units1);
    Code.expect(scale.colors[0].hsl[2]).to.equal(5);
    Code.expect(scale.colors[units1-1].hsl[2]).to.equal(95);

    scale.colors.map(function(color, index) {
      Code.expect(color.index).to.equal(index);
      Code.expect(color.hsl).to.be.an.array();
      Code.expect(color.rgb).to.be.an.undefined();
    });

    done();
  });
});

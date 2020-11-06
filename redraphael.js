var RedRaphael = require('redraphael');

RedRaphael(10, 10, 600, 400, function () {
    var paper = window.pap = this;

    // Draw a red rectangle with red fill color.
    rect = paper.rect({
    	x: 0,
    	y: 0,
    	width: 500,
    	height: 200
    })
    .attr({
    	fill: '#FF0000'
    });
});
var ctx;
var width = 100;
var height = 100;
var start = (new Date).getTime();

var testFunctions = new Array();
var testCanvasNames = new Array();
var points = new Array();

var colors = new Array("#ff0000", "#00ff00", "#0000ff",
				"#880000", "#008800", "#000088",
				"#888800", "#088880", "#008888",
				"#080808", "#808080", "#880088"
				);
function preparaColors(step)
{
	colors= [];
	for (blue=1;blue<256;blue+=step)
		for (green=1;green<256;green+=step)
			for (red=1;red<256;red+=step)
			{
				rgb = blue | (green << 8) | (red << 16);
				colors.push( '#' + rgb.toString(16));								
			}
}

function startTest()
{
	start = (new Date).getTime();
}

function endTest()
{	
	return (new Date).getTime() - start;
}
	

function Random(max)
{
	return Math.floor((Math.random()*max)+1); 
}
	
function onLoad()
{
	preparaColors(5);	
}

window.onload = onLoad; 

function initCanvas(canvasID)
{
	var c=document.getElementById(canvasID);
	ctx=c.getContext("2d");
	width = c.width;
	height = c.height;	
}	


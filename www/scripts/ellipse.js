var FULL_CIRCLE =2*Math.PI;
function prepareCircleData(step, max_r)
{	
	var r=5;
	var color=0;
	var color2=colors.length/2;
	var wielkosc_testu=0;
	points = [];
	
	for (x=0;x<width;x+=step)
	{		
		for (y=0;y<height;y+=step)
		{		
			points.push({x:x, y:y,r:r,c:colors[color],c2:colors[color2]});
			
			if (++color>colors.length)
				color=0;	
			
			if (++color2>colors.length)
				color2=0;	
			
			r+=max_r/10;
			if (r>max_r)
				r=max_r/10;	
				
			wielkosc_testu++;
		}
	}
	return wielkosc_testu;	
}				

function drawFillCircle(x,y,r,color, color2)
{
	ctx.fillStyle=color;
	ctx.strokeStyle = color2;
	ctx.beginPath();
	ctx.arc(x,y,r,0, FULL_CIRCLE);
	ctx.fill();
	ctx.stroke();
}

function drawCircles(wielkosc_testu, lp)
{
	var suma=0;	
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();
		drawFillCircle(points[i].x, points[i].y,points[i].r,points[i].c,points[i].c2);
		suma+=endTest();		
	}	
	
	return suma;
}



function testFillCircle(ilosc_testow, canvasID)
{
	var wynik = 0;
	initCanvas(canvasID);
	wielkosc_testu = prepareCircleData(5, 20);
	
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawCircles(wielkosc_testu, lp);		
	return wynik / ilosc_testow;	
}

testFunctions.push(testFillCircle);


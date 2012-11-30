function preparePixelData(step)
{		
	var color=0;
	var wielkosc_testu=0;
	
	points=[];
	for (x=0;x<width;x+=step)
	{		
		for (y=0;y<height;y+=step)
		{		
			points.push({x:x, y:y,c:colors[color]});
			
			if (++color>colors.length)
				color=0;	
			wielkosc_testu++;
		}
	}
	return wielkosc_testu;
}				
		
function putPixel(x,y,color)
{
	ctx.fillStyle=color;
	ctx.fillRect(x,y,1,1);
}

function drawPixels(wielkosc_testu, lp)
{
	var suma=0;
	
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();
		putPixel(points[i].x, points[i].y, points[i].c);
		suma+=endTest();		
	}	
	
	return suma;
}

function testPixels(ilosc_testow, canvasID)
{    
	var wynik = 0;
	initCanvas(canvasID);
	
	wielkosc_testu = preparePixelData(1);
	
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawPixels(wielkosc_testu, lp);	
	return wynik / ilosc_testow;		
}

testFunctions.push(testPixels);

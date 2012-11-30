function prepareLineData(step)
{	
	var color=0;
	var wielkosc_testu = 0;
	points=[];
	
	for (x=0;x<width;x+=step)
	{		
		points.push({x1:x, y1:0,x2:width - x,y2:height,c:colors[color]});
		color+=4;
		if (color>colors.length)
			color=0;
		wielkosc_testu++;
	}
	
	for (y=0;y<height;y+=step)
	{	
		points.push({x1:0, y1:y,x2:width,y2:height-y,c:colors[color]});
		color+=4;
		if (color>colors.length)
			color=0;
		wielkosc_testu++;
	}
			
	
	return wielkosc_testu;
}				
				
function drawLines(wielkosc_testu, lp)
{
	var suma=0;	
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();		

		ctx.strokeStyle = points[i].c;		
		ctx.beginPath();
		ctx.moveTo(points[i].x1,points[i].y1);
		ctx.lineTo(points[i].x2,points[i].y2);    
		ctx.closePath();
		ctx.stroke();	
		
		suma+=endTest();		
	}	
	
        return suma;

}

function testLine(ilosc_testow, canvasID)
{
	initCanvas(canvasID);
	wielkosc_testu = prepareLineData(1);
	var wynik=0;
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawLines(wielkosc_testu, lp);		
        
       return wynik / ilosc_testow;
		
}

testFunctions.push(testLine);

function preparePathData(step)
{	
	var color1=0;
	var color2=10;
	var wielkosc_testu = 0;
	var skala=1;
	points=[];
	
	for (x=0;x<width;x+=step)
	{		
		for (y=0;y<height;y+=step)
		{	
			
			points.push(
					{
					c1:colors[color1],
					c2:colors[color2],
					x1:x -(skala*3),
					y1:y+ (skala *4),
					x2:x - (skala *7),	
					y2:y,
					x3:x - (skala*5),
					y3:y-(skala *3),
					
					x4:x +skala,
					y4:y-(skala*4),
					
					x4cp1:x-(skala*2),
					y4cp1:y-(skala*6),	
					x4cp2:x-skala,	
					y4cp2:y-(skala*6),
					
					
					x5:x +(skala*6),
					y5:y -skala,
					x5cp1:x+(skala*5),
					y5cp1:y-(skala*6),	
					x5cp2:x+(skala*6),
					y5cp2:y-(skala*5),
					
					
					x6:x +(skala*3),	
					y6:y + (skala*4),
					x6cp:x+(skala*6),
					y6cp:y+(skala*4),

					x7:x - (skala*3),
					y7:y+(skala*4),
					x7cp:x,
					y7cp:y+(skala*7)	
					}
				);
			
			
			skala++;
			if (skala>10)
				skala=1;
			
			color1+=4;
			if (color1>colors.length)
				color1=0;
			
			color2+=4;
			if (color2>colors.length)
				color2=0;
				
			wielkosc_testu++;
		}
	}
	
	return wielkosc_testu;
}				
				
function drawPaths(wielkosc_testu, lp)
{
	var suma=0;	
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();		

		ctx.strokeStyle = points[i].c1;		
		ctx.fillStyle = points[i].c2;		
		ctx.beginPath();
		ctx.moveTo(points[i].x1,points[i].y1);
		
		ctx.lineTo(points[i].x2,points[i].y2);    
		ctx.lineTo(points[i].x3,points[i].y3);    
		
		ctx.bezierCurveTo(points[i].x4cp1,points[i].y4cp1,points[i].x4cp2,points[i].y4cp2,points[i].x4,points[i].y4);
		ctx.bezierCurveTo(points[i].x5cp1,points[i].y5cp1,points[i].x5cp2,points[i].y5cp2,points[i].x5,points[i].y5);
		
		ctx.quadraticCurveTo(points[i].x6cp,points[i].y6cp,points[i].x6,points[i].y6);
		ctx.quadraticCurveTo(points[i].x7cp,points[i].y7cp,points[i].x7,points[i].y7);
		
		//ctx.closePath();
		ctx.fill();
		ctx.stroke();	
		
		suma+=endTest();		
	}	
	 ctx.beginPath();
   
	return suma;
}

function testPath(ilosc_testow, canvasID)
{
	var wynik=0;
	initCanvas(canvasID);
	wielkosc_testu = preparePathData(5);
	
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawPaths(wielkosc_testu, lp);		
		
	return wynik / ilosc_testow;
}

testFunctions.push(testPath);


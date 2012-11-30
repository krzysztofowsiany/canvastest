var fonts = new Array(
	"5pt Arial",
	"10pt Arial",
	"15pt Arial",
	"20pt Arial",
	"25pt Arial"
);

function prepareTextData(step)
{	
	var x=0;
	var y=0;
	var nu_f=0;
	var color=0;
	var wielkosc_testu = 0;
	points=[];
	
	for (x=0;x<width;x+=step)
	{		
		for (y=0;y<height;y+=step)
		{	
			points.push({x:x, y:y,c:colors[color],f:fonts[nu_f],txt:"TEXT"+x+"x"+y});
			
			color++;
			if (color>colors.length)
				color=0;
			nu_f++;
			
			if (nu_f>fonts.length)
				nu_f=0;
				
			wielkosc_testu++;
		}		
	}
	return wielkosc_testu;
}				
				
function drawTexts(wielkosc_testu, lp)
{
	var suma=0;	
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();		
		ctx.font = points[i].f;
		ctx.fillStyle = points[i].c;
		ctx.fillText(points[i].txt, points[i].x, points[i].y);		
		suma+=endTest();		
	}
	

    return suma;
}

function testText(ilosc_testow, canvasID)
{
	initCanvas(canvasID);
	wielkosc_testu = prepareTextData(10);
	var wynik=0;
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawTexts(wielkosc_testu, lp);		
        
       return wynik / ilosc_testow;		
}

testFunctions.push(testText);

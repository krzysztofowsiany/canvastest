function drawGradientsLinear(wielkosc_testu, lp)
{
	var suma=0;	
	color_count = colors.length/5;
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();			
		
		var grd = ctx.createLinearGradient(0, 0, width, height);
        
        grd.addColorStop(0, "red");        
        grd.addColorStop(0.2, "white");
		grd.addColorStop(0.4, "black");
		grd.addColorStop(0.6, "blue");
		grd.addColorStop(0.8, "yellow");
		grd.addColorStop(1, "green");
		
        ctx.fillStyle = grd;
		ctx.fillRect(0,0,width,height);	
		
		suma+=endTest();		
	}	
	
	return suma;
}

function drawGradientsRadial(wielkosc_testu, lp)
{
	var suma=0;	
	color_count = colors.length/5;
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();			
		
		var radgrad = ctx.createRadialGradient(width/2,height/2,height/4,
												width/2,height/2,height/2);
		radgrad.addColorStop(0, "red");        
        radgrad.addColorStop(0.2, "white");
		radgrad.addColorStop(0.4, "black");
		radgrad.addColorStop(0.6, "blue");
		radgrad.addColorStop(0.8, "yellow");
		radgrad.addColorStop(1, "green");
		ctx.fillStyle = radgrad;
		ctx.fillRect(0,0,width,height);
		
		suma+=endTest();		
	}	
	return suma;
}	

function testGradientLinear(ilosc_testow)
{	
	for (lp=1;lp<=ilosc_testow;lp++)
		drawGradientsLinear(50, lp);
		
}

function testGradientRadial(ilosc_testow)
{	
	var wynik = 0;
	initCanvas(canvasID);
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawGradientsRadial(25, lp);	
	return wynik / ilosc_testow;
		
}
testFunctions.path(testGradientRadial);


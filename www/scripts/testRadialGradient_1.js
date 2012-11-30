function drawGradientsRadial(wielkosc_testu, lp)
{
	var suma=0;	
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

function testGradientRadial(ilosc_testow,canvasID)
{	
	var wynik = 0;
	initCanvas(canvasID);
	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=drawGradientsRadial(25, lp);	
	return wynik / ilosc_testow;
		
}

testFunctions.push(testGradientRadial);


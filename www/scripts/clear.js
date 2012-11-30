function clearCanvas(color)
{
	ctx.fillStyle=color;
	ctx.fillRect(0,0,width,height);
}

function clears(wielkosc_testu, lp)
{
	var suma=0;
	for (i=0;i<wielkosc_testu;i++)
	{
		startTest();
		clearCanvas("#ff0000");			
		suma+=endTest();		
	}
	return suma;
}


function testClear(ilosc_testow, canvasID)
{
	var wynik = 0;
	initCanvas(canvasID);

	for (lp=1;lp<=ilosc_testow;lp++)
		wynik+=clears(1000, lp);		
	return wynik / ilosc_testow;
		
}

testFunctions.push(testClear);


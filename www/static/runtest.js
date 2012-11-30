function sleep(milliseconds) 
{
	var start = new Date().getTime();
	while ((new Date().getTime() - start) < milliseconds);
}


function SendToServer2()
{
	
}

function SendToServer(base,post)
{
	var xmlHttpReq = false;
	var self = this;
	
	if (window.XMLHttpRequest) {
		self.xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
		self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	self.xmlHttpReq.open('POST', "/dodaj", true);
	self.xmlHttpReq.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	//self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	self.xmlHttpReq.setRequestHeader('Content-Type', 'application/json');
	//self.xmlHttpReq.setRequestHeader('Content-length', post.length);
	self.xmlHttpReq.onreadystatechange = function() {
		if (self.xmlHttpReq.readyState == 4) {	        	
			document.getElementById("results").innerHTML =  self.xmlHttpReq.responseText;
			alert("TEST ZOSTA£ZAKOÑZONY")
	
			//scroll(0, document.body.scrollHeight);		
		}
	}
		
	self.xmlHttpReq.send(post);	
}





function RunTests()
{	
	
	var map = new Object();
	map['csrfmiddlewaretoken']= getCookie('csrftoken');
	
	for (var i=0;i<testFunctions.length;i++)
	{
		map["wynik"+(i+1)] = encodeURI(testFunctions[i](1, testCanvasNames[i]));
	}
		
	$.ajax({
		type: 'POST',
        url: '/dodaj',
		success: function(data){
			document.getElementById("results").innerHTML =  data;
			scroll(0, document.body.scrollHeight);	
		},
        data: map
    });
	
	//post = post.slice(0, -1);
	//SendToServer(post);

}

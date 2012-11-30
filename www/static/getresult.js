
function GetResult(form)
{
	if (isNaN(form.id_wyniku.value))
	{
	}
	else
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
	
		self.xmlHttpReq.open('POST', "/wyszukaj", true);
		self.xmlHttpReq.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
		//self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		self.xmlHttpReq.setRequestHeader('Content-Type', 'application/json');
		//self.xmlHttpReq.setRequestHeader('Content-length', post.length);
		self.xmlHttpReq.onreadystatechange = function() {
			if (self.xmlHttpReq.readyState == 4) {	        	
				document.getElementById("results").innerHTML =  self.xmlHttpReq.responseText;		
		
				//scroll(0, document.body.scrollHeight);		
			}
		}
		self.xmlHttpReq.send("&id_wyniku=" + encodeURI(form.id_wyniku.value));	
	}
}

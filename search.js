

window.onload =function(){

  search();

  };


function search(){
  var buttonA = document.getElementById("search-button");
  buttonA.onclick=function(){
    var xhr = new XMLHttpRequest();
    var word = document.getElementById("search-bar").value;
    var url = "https://info2180-lab6-apalm03.c9users.io/request.php?q=" + word;
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status === 200) {
        document.getElementById("result").innerHTML=this.responseText;
        
      }
      
    };
    xhr.open("GET",url );
    xhr.send();
    
  };
  
  var buttonB= document.getElementById("all-def");
	buttonB.onclick = function ()
	{
		var allXHR = new XMLHttpRequest();
		var url1 ="request.php?q=&all=true";
		allXHR.onreadystatechange = function ()
		{
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
			{
			
					var output = document.getElementById("result");
					var parser = new DOMParser();
					 var response =  parser.parseFromString(allXHR.responseXML,'text/xml');
					var defWord = response.getElementsByTagName('definition');
					var order = document.createElement("ol");
					order.setAttribute("id", "list");
					
			
					for (var i = 0; i < defWord.length; i++) 
					{ 
						
						var list = document.createAttribute("li");
						var dict = document.createTextNode(defWord[i].children[0].childNodes[0].nodeValue);
						
						list.appendChild(dict);
						order.appendChild(list);
					}
					
					output.innerHTML=order;
					
				}
				
				
			
			
		};
		
		allRequest.open('GET',url1,true);
		allRequest.send();
	};
	

}
  
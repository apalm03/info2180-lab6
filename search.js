

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
		var url1 ="https://info2180-lab6-apalm03.c9users.io/request.php?q=&all=true";
		allXHR.onreadystatechange = function ()
		{
		var output = document.getElementById("result");
		var order = document.createElement("ol");
		output.innerHTML ='<h3> Result </h3>';
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
			{
				
					var parser = new DOMParser();
					var response =  parser.parseFromString(allXHR.responseText,'application/xml');
					var definitions = response.getElementsByTagName('definition');
					
					
					output.appendChild(order);
					
			
					for (var i = 0; i < definitions.length; i++) 
					{ 
						
						var definition = document.createElement("li");
						var heading = document.createElement('h3');
						var p1 = document.createElement('p');
						var p2 = document.createElement('p');
						
						var word =document.createTextNode(definitions[i].getAttribute('name'));
            	heading.appendChild(word);
						
						var meaning = document.createTextNode(definitions[i].childNode[0].nodeValue);
						
							p1.appendChild(meaning);
					var author =document.createTextNode('-'+definitions[i].getAttribute('author'));
            	p2.appendChild(author);

                definition.appendChild(heading);
                definition.appendChild(p1);
                definition.appendChild(p2);
                order.appendChild(definition);
						
					
					}
					
					
				}
				
				
			
			
		};
		
		allXHR.open('GET',url1,true);
		
		allXHR.send();
	};
	

}
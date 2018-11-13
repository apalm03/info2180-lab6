

window.onload = function(){
	search();
};
 function search(){
 	var button = document.getElementById("search-button");
	button.onclick = function (){
		var request = new XMLHttpRequest();
		var url = "https://info2180-lab6-apalm03.c9users.io/request.php?q=definition";
		request.onreadystatechange = function (){
			if (this.readyState == XMLHttpRequest.DONE) {
				if (this.status == 200) {
					var resp = this.responseText;
					alert(resp);
				}else{
					console.log('There is an error ');
				}
			}
		}
		request.open('GET',url);
		request.send();
	}
}

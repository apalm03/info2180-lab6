

window.onload =function(){

  search();
  };


function search(){

var button = document.getElementById("search-button");
button.onclick=function(){
var xhr = new XMLHttpRequest();
var word = document.getElementById("search-bar").value;
var url = "https://info2180-lab6-apalm03.c9users.io/request.php?q=" + word;

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status === 200) {
    document.getElementById("result").innerHTML=this.responseText;
  }
}
xhr.open("GET",url );
xhr.send();

};
};
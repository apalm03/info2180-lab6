

window.onload =function(){

  var button=document.getElementById('search-button');
  button.addEventListener('click',search);
  }



function search(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://info2180-lab6-apalm03.c9users.io/request.php?q=definition");
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status === 200) {

    var response = xhr.responseText;
    alert(response);
  }
}
xhr.send();
};

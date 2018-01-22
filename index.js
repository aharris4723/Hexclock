

function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  

  
  
 
  var color = "" + s + m + h;
  document.getElementById('se').innerHTML = + s;
  document.getElementById('mi').innerHTML = + m;
  document.getElementById('ho').innerHTML = + h;
  document.body.style.background = "#" + color;
  
  setTimeout(function() {
    time()
  }, 500);
}
time();


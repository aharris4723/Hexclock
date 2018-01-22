

function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
   if (h<=9){
      h = "0" + h;
    
    }
   if (m<=9){
      m = '0' + m;
    } 
  
  
  var color = "" + s + m + h;
  document.getElementById('se').innerHTML = s;
  document.getElementById('mi').innerHTML = m;
  document.getElementById('ho').innerHTML = h;
  document.body.style.background = "#" + color;

  setInterval(function() {
    time()
  }, 500);
}
time();


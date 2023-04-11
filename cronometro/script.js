window.onload = function(){
   
    var minutos = 00; 
    var segundos = 00;

    var apend_1 = document.getElementById("segundos");
    var apend_2 = document.getElementById("minutos");

    var comecar = document.getElementById("comecar"); 
    var pausar = document.getElementById("pausar");
    var zerar = document.getElementById("zerar");

    var intervalo = document.getElementById("intervalo")
    
    
}



buttonStart.onclick = function() {
      
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
      seconds = "00";
    appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("cronometo");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  


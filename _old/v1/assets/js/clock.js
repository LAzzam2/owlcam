var updateClock = function( ) {
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var animationStarted = false;

  console.log('current hours: '+ currentHours);
  
  if(currentHours >=  && currentSeconds < 8){
   var city = 'San Francisco';
  }if(currentSeconds > 7 && currentSeconds < 15){
   var city = 'Los Angeles';
  }if(currentSeconds > 14 && currentSeconds < 21){
   var city = 'Seattle';
  }if(currentSeconds > 20 && currentSeconds < 27){
   var city = 'Portland';
  }if(currentSeconds > 26 && currentSeconds < 33){
   var city = 'Las Vegas';
  }if(currentSeconds > 32 && currentSeconds < 39){
   var city = 'Vancouver';
  }if(currentSeconds > 38 && currentSeconds < 47){
   var city = 'Prince George';
  }if(currentSeconds > 46 && currentSeconds < 60){
   var city = 'Baja California';
  }

 
  $("#time").html(currentTimeString + "<br/>" +"<p>Cheers,</p><span class='city'>"+city+"!</span>");

}

function startTimer(){
  updateClock();
    setInterval(function(){updateClock();}, 1000);
}

$(document).ready(function(){
    startTimer();
});
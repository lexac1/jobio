$( document ).on('turbolinks:load', function(){

  $(".start").on("click", function(event){
		// console.log("clicked");
    $("#settings-button").hide();
     var fiftyFiveMinutes = 60 * 55,
        display = document.querySelector('#time');
    startTimer(fiftyFiveMinutes, display);
		$('#line-container').show();
        var line = new ProgressBar.Line('#line-container', {
        strokeWidth: 4,
    	trailWidth: 1,
        color: '#ED6A5A',
        duration: 3300000
       });
      line.set(1);
      line.animate(0,0);

   

})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


 $("#settings-button").on("click", function(event){
  event.preventDefault();
  // console.log("clicked settings");
  $("#main-page").css("display", "none");
  $("#settings").show();

 })
 

});

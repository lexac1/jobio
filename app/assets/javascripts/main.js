$( document ).on('turbolinks:load', function(){
	$(".start").on("click", function(event){
		console.log("clicked");
		$('#line-container').show();
        var line = new ProgressBar.Line('#line-container', {
        color: '#ED6A5A',
        duration: 60000
       });
      line.set(1);
      line.animate(0,0);
})

});

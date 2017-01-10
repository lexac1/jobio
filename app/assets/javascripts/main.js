$( document ).on('turbolinks:load', function(){

  $(".start").on("click", function(event){
		// console.log("clicked");
		$('#line-container').show();
        var line = new ProgressBar.Line('#line-container', {
        strokeWidth: 3,
    	trailWidth: 1,
        color: '#ED6A5A',
        duration: 3300000
       });
      line.set(1);
      line.animate(0,0);
})
 $("#settings-button").on("click", function(event){
  event.preventDefault();
  // console.log("clicked settings");
  $("#main-page").css("display", "none");
  $("#settings").show();

 })
 $("#calendar").on("click", function(event){
	  event.preventDefault();
		var blocks = $("#tasks-container").children("div.block");
		var orders = $("#tasks-container").find("h2");
		// console.log("orders are herehrhehrhehrhehe")
		// console.log(orders)

		var user = $('#user').html()
		console.log(user)

		// var ids = {};
		// var orders = {};
		var data = [];
		for (let i = 0; i < blocks.length; i ++) {

			data.push({ id: blocks[i].id, order: orders[i].id });
		}

		// datas = Array.from(datas)
		console.log(blocks)
		console.log("**********************")
		console.log(data)
		// data = JSON.stringify(datas)
		// console.log(Array.from(data));
		// console.log("CLICKED!!!");
		$.ajax({
			type: 'PUT',
      dataType:"script",
			url: "/users/"+user,
			contentType : "application/json",
			data: JSON.stringify({ blocks: data, _method: 'put' })

		})
 })
});

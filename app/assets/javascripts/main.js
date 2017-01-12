$( document ).on('turbolinks:load', function(){
 
  // startBtnListener();
  // // setBlockName();
  // settingsBtnListener();
  var current_block = $('.sortable').children().toArray()
  $("#time").hide();



var incriment = 0;
 var current_block = $('.sortable').children().toArray()

 
  $(".start").on("click", function(event){
    $(".start").hide();
    $("#time").show();
    $("#settings-button").hide();
       var next = current_block.shift();
         displayBlock($(next));
         initializeProgressBar();
  // var timerId = setInterval(function(){countdown(); },1000);
  // initializeProgressBar();

  })


function initializeProgressBar() {
  $('#line-container').hide();
  $('#line-container').show();
  var line = new ProgressBar.Line('#line-container', {
    strokeWidth: 4,
    trailWidth: 1,
    text: {
      value: $('#time'),
    },
    color: '#ED6A5A',
    duration: 10000
  });
  line.set(1);
  line.animate(0,0);
}


// var countdown = function() {
//     var i = document.getElementById('time');
//     i.innerHTML = parseInt(i.innerHTML)-1;
    
//     if (parseInt(i.innerHTML)===0) {
        
//        $("#here").removeClass("animated bounceIn");
//        $("#myModalNorm").modal('show')
//        $(".modal-footer").unbind().click(function() {
//          $('#time').html(10);
//        var next = current_block.shift();
//          displayBlock($(next));
         
//          $("#myModalNorm").modal('hide');
//          $('#line-container').empty()
//          initializeProgressBar();

//        });
//      }
// }


// new timer 
// timer settings/ activate
  var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {

          $("#here").removeClass("animated bounceIn");
          $("#myModalNorm").modal('show')
          $(".modal-footer").unbind().click(function() {
             timer = duration;
             var next = current_block.shift();
             displayBlock($(next));
             $("#myModalNorm").modal('hide');
             $('#line-container').empty()
            initializeProgressBar();
           }); 
        }
    }, 1000);
}



// -----------------------------------------



  $("#settings-button").on("click", function(event){
    event.preventDefault();
    $(document).ready(ready);
    $("#settings-button").hide();
    $("#main-page").css("display", "none");
    $("#settings").show();
    $("#settings").addClass("animated slideInUp");

    });
  


  $("#createTask").unbind().click(function(e){
    $("#TaskModal").modal('show');
      $("#NEWTASK").unbind().click(function(e){
         
         var data = $(this).parent().serialize();
         
         e.preventDefault();      
         
         var name = $("#TaskModal").find(".modal-body").find(".form-group").find("input");
       
           $.ajax({
            type: "Post",
            url: '/tasks',
            data: data    
          })
           .done(function(response){
               console.log(response.category_id);
               $("[data-id="+response.category_id+"]").find(".panel-body").prepend("<p>"+response.name+"</P>");
               $("#TaskModal").modal('hide');
                 $(document).ready(ready);
                 $(name).val("");
           })
            
      });
  });





function displayBlock(current_block){
   
    if (current_block[0] === undefined) {
      $("#complete").modal('show');
      $(".modal-footer").unbind().click(function() {
          $("#out").children().trigger("click");
      });

    }
    $("#here").html("");

  $("#here").append(current_block[0]).addClass("animated bounceIn");
    // $(current_block).hide();
}
});
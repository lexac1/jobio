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
         animateTimer();
 

  })

  // TIMER ANIMATION
 function animateTimer(){
   $("#time").animate({ "right" : "450px"},3300000);
  }     
 

function initializeProgressBar() {
  $('#line-container').hide();
  $('#line-container').show();
  var line = new ProgressBar.Line('#line-container', {
    strokeWidth: 4,
    color: '#A5E945',
    from: { color: '#ED6A5A'},
    to: {color: '#A5E945' },
    duration: 3300000,
    step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
  });
  line.set(1);
  line.animate(0.0);

}



// new timer 
// timer settings/ activate
  var fiftyFiveMinutes = 60 * 55,
        display = document.querySelector('#time');
    startTimer(fiftyFiveMinutes, display);

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

// resources toggles--------------
var resOn = false;
var reachOn = false;
var presenceOn = false;
var algoOn = false;
 
 $("#resume").on("click", function(e){
   if (resOn === false ){
     $("#res").show();
       resOn = true; 
   } else {
      $("#res").hide();
        resOn = false; 
   }
   
});
  
 $("#outreach").on("click", function(e){
    if (reachOn === false ){
     $("#reach").show();
       reachOn = true; 
   } else {
      $("#reach").hide();
        reachOn = false; 
   }
});

 $("#webpresence").on("click", function(e){
     if (presenceOn === false){
        $("#presence").show();
          presenceOn = true;   
     } else {
      $("#presence").hide();
        presenceOn = false;
     }
   
});
  
 $("#algorithms").on("click", function(e){
    if (algoOn === false){
      $("#algo").show();
        algoOn = true;
    } else {
      $("#algo").hide();
        algoOn = false;
    }
  });

// -------------------------------------
    
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
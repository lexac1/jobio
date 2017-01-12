$( document ).on('turbolinks:load', function(){
  // hideModal();
  // startBtnListener();
  // // setBlockName();
  // settingsBtnListener();
  var current_block = $('.sortable').children().toArray()




var incriment = 0;
 var current_block = $('.sortable').children().toArray()

// var hideModal = function() {
//   $('#myModalNorm').modal({ show: false});
// }

  $(".start").on("click", function(event){
    $(".start").hide();
    $("#settings-button").hide();
      // displayBlock($(current_block));
  var timerId = setInterval(function(){countdown(); },1000);
  initializeProgressBar();

  })


function initializeProgressBar() {
  $('#line-container').hide();
  $('#line-container').show();
  var line = new ProgressBar.Line('#line-container', {
    strokeWidth: 4,
    trailWidth: 1,
    color: '#ED6A5A',
    duration: 10000
  });
  line.set(1);
  line.animate(0,0);
}


var countdown = function() {
    var i = document.getElementById('time');
    i.innerHTML = parseInt(i.innerHTML)-1;

    if (parseInt(i.innerHTML)===0) {
        

       $("#myModalNorm").modal('show')
       $(".modal-footer").unbind().click(function() {
         $('#time').html(10);
    // displayBlock($(current_block));
    // console.log($(current_block))
    var next = current_block.pop();
         displayBlock($(next));
       
         $("#myModalNorm").modal('hide');
         $('#line-container').empty()
         initializeProgressBar();

        

       });
     }
}
// newTaskListener();


// var newTaskListener = function() {
//   $("#new_task").on("click", function() {
//     event.preventDefault();
//
//     var form = $(this);
//     var method ="PUT"
//     var url = "/tasks/1"
//     var data = $(form).serialize();
//     console.log('newtasklistener')
//     $.ajax({
//       method: method,
//       url: url,
//       data: data
//     })
//   })
// }

var settingsBtnListener = function() {
  $("#settings-button").on("click", function(event){
    event.preventDefault();
    $(document).ready(ready);
    $("#settings-button").hide();
    $("#main-page").css("display", "none");
    $("#settings").show();
    $("#settings").addClass("animated slideInUp");

    });
  }

var formBtnListener = function () {
  $("#form-button").on("click",function(e){
    $("#TaskModal").modal('show')
    $("#NEWTASK").on("click",function(e){
      $("#TaskModal").modal({ show: false});
      $(document).ready(ready);
    })
  })
}

// var setBlockName = function() {
//   if (incriment == 5) {
//     return;
//   } else {
//     var blockObj = $('.sortable').children()[incriment]
//     var previousObj = $('.sortable').children()[incriment - 1]
//     $(blockObj).show();
//     $(previousObj).hide();
//      console.log(incriment)
//      incriment ++;
    
//   }
// }



function displayBlock(current_block){
    console.log(current_block[0])
    $("#here").html("");
  $("#here").append(current_block[0]);
    // $(current_block).hide();
}
});
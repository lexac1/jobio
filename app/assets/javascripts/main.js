$( document ).on('turbolinks:load', function(){
  hideModal();
  startBtnListener();
  // newTaskListener();
  setBlockName();
  settingsBtnListener();

});

var incriment = 1

var hideModal = function() {
  $('#myModalNorm').modal({ show: false});
}
var startBtnListener = function() {
  $(".start").on("click", function(event){
    $(".start").hide();
    $("#settings-button").hide();
    // var fiftyFiveMinutes = 60 * 55,
    var fiftyFiveMinutes = 2
    var display = document.querySelector('#time');

    startTimer(fiftyFiveMinutes, display);

  })
}

function initializeProgressBar() {
  $('#line-container').hide();
  $('#line-container').show();
  var line = new ProgressBar.Line('#line-container', {
    strokeWidth: 4,
    trailWidth: 1,
    color: '#ED6A5A',
    duration: 2000
  });
  line.set(1);
  line.animate(0,0);
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    initializeProgressBar();

    if (--timer < 0) {
      timer = duration;

      $("#myModalNorm").modal('show')
      $(".modal-footer").on('click', function() {
        setBlockName();
        $("#myModalNorm").modal('toggle')
        $('#line-container').empty()
        initializeProgressBar();
      })
    }
  }, 1000);
}

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

  })
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

var setBlockName = function() {
  if (incriment === 5) {
    return;
  } else {
    var blockObj = $('.sortable').children()[incriment]
    var previousObj = $('.sortable').children()[incriment - 1]
    $(blockObj).show();
    $(previousObj).hide();
    incriment += 1
    console.log(incriment)
  }
}

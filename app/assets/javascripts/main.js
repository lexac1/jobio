$( document ).on('turbolinks:load', function(){
  hideModal();
  startBtnListener();
  newTaskListener();
  setBlockName();
  settingsBtnListener();

});

var incriment = 1

var hideModal = function() {
  $('#myModalNorm').modal({ show: false});
}
var startBtnListener = function() {
  $(".start").on("click", function(event){
    // console.log("clicked");
    $(".start").hide();
    $("#settings-button").hide();
    // var fiftyFiveMinutes = 60 * 55,
    var fiftyFiveMinutes = 2,
    display = $('#time');

    startTimer(fiftyFiveMinutes, display);

  })
}

function initializeProgressBar() {
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
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    initializeProgressBar();

    if (--timer < 0) {
      timer = duration,
      $("#myModalNorm").modal('show')
      setBlockName()
    }
  }, 1000);
}

var newTaskListener = function() {
  $("#new_task").on("submit", function() {
    event.preventDefault();

    var form = $(this);
    var method ="PUT"
    var url = "/tasks/1"
    var data = $(form).serialize();
    console.log('newtasklistener')
    $.ajax({
      method: method,
      url: url,
      data: data
    })
  })
}

var settingsBtnListener = function() {
  $("#settings-button").on("click", function(event){
    event.preventDefault();
    $(document).ready(ready);
    $("#settings-button").hide();
    // console.log("clicked settings");
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

// var changeBlockName = function() {
//   var blocks = $('#blocks').children();
//   var blockDisplayName = $('#block-name').html()
//   var blockNames = [];
//
//   for (var i = 0; i < blocks.length; i++) {
//     blockNames.push($(blocks[i]).html())
//   }
//
//   var currentIndex = blockNames.indexOf(blockDisplayName)
//   console.log(currentIndex)
//
//   var nextBlockTitle = $('#block-name').html(blockNames[currentIndex + 1])
// }

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

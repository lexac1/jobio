$( document ).ready(function() {
  nextBtnListener();

});

var nextBtnListener = function() {
  $('#next-btn').on('submit', function() {
    event.preventDefault();

    var duration = 2
    var display = $('#time')
    var blocks = $('#blocks').children();
    var blockDisplayName = $('#block-name').html()
    var blockNames = [];

    for (var i = 0; i < blocks.length; i++) {
      blockNames.push($(blocks[i]).html())
    }

    // startTimer(duration, display);
    changeBlockName(blockDisplayName, blockNames);
  })
}

var changeBlockName = function(blockDisplayName, blockNames) {
  var currentIndex = blockNames.indexOf(blockDisplayName)
  console.log(currentIndex)

  var nextBlockTitle = $('#block-name').html(blockNames[currentIndex + 1])
}

// var startTimer = function(duration, display) {
//
//   var timer = duration, minutes, seconds;
//   console.log(timer)
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);
//
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//
//     display.textContent = minutes + ":" + seconds;
//
//     initializeProgressBar();
//
//     if (--timer < 0) {
//       timer = duration,
//     }
//   }, 1000);
// }

// var initializeProgressBar = function() {
//   $('#line-container').show();
//   var line = new ProgressBar.Line('#line-container', {
//     strokeWidth: 4,
//     trailWidth: 1,
//     color: '#ED6A5A',
//     duration: 2000
//   });
//   line.set(1);
//   line.animate(0,0);
// }

var delay;
var active;

function countDown() {
  var min = $("#min").html();
  var sec = $("#sec").html();
  if (sec > 0) {
    sec--;
    if (sec >= 10) {
      $("#sec").html(sec);
    } else {
      $("#sec").html("0" + sec);
    }
  } else if (min > 0) {
    $("#sec").html(59);
    $("#min").html(min - 1);
  }
}

function toggleClock() {
  if (active) {
    active = false;
    clearInterval(delay);
    $("#min").html("25");
    $("#sec").html("00");
  } else {
    active = true;
    delay = setInterval(countDown, 1000);
  }
}

function settings(e) {
  if (active) {
    toggleClock();
  }

  var minLength;
  switch(e.target.id) {
    case "lessTime":
      minLength = $("#minTime").html();
      if (minLength > 1) {
        $("#minTime").html(minLength - 1);
        $("#min").html(minLength - 1);
        $("#sec").html("00");
      }
      break;
    case "moreTime":
      minLength = parseInt($("#minTime").html(), 10);
      $("#minTime").html(minLength + 1);
      $("#min").html(minLength + 1);
      $("#sec").html("00");
      break;
    case "lessBreak":
      minLength = $("#minBreak").html();
      if (minLength > 1)
        $("#minBreak").html(minLength - 1);
      break;
    case "moreBreak":
      minLength = parseInt($("#minBreak").html(), 10);
      $("#minBreak").html(minLength + 1);
      break;
  }
}

$(document).ready(function() {
  active = false;
  $("#clock").on("click", toggleClock);
  $(".change").on("click", settings);
});

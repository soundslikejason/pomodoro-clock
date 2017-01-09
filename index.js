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
  } else {
    if ($("#workText").html() === "Working") {
      $("#workText").html("Break");
      $("#min").html($("#minBreak").html());
      $("#clock").css("color", "red");
    } else {
      $("#workText").html("Working");
      $("#min").html($("#minWork").html());
      $("#clock").css("color", "green");
    }
  }
}

function toggleClock() {
  if (active) {
    active = false;
    clearInterval(delay);
    $("#workText").html("Click");
    $("#min").html($("#minWork").html());
    $("#sec").html("00");
    $("#clock").css("color", "inherit");
  } else {
    active = true;
    delay = setInterval(countDown, 1000);
    $("#clock").css("color", "green");
    $("#workText").html("Working");
  }
}

function settings(e) {
  if (active) {
    toggleClock();
  }
  var minLength;
  switch(e.target.id) {
    case "lessWork":
      minLength = $("#minWork").html();
      if (minLength > 1) {
        $("#minWork").html(minLength - 1);
        $("#min").html(minLength - 1);
        $("#sec").html("00");
      }
      break;
    case "moreWork":
      minLength = parseInt($("#minWork").html(), 10);
      $("#minWork").html(minLength + 1);
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

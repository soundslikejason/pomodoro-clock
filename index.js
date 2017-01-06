var delay = setInterval(countDown, 1000);

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
    delay;
  }
}

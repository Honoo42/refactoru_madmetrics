$(document).on('ready', function() {
  

  var clickMetrics = function() {
  	var time = new Date();
  	$('.btn-met').click(function() {
  		console.log("Metric Button Clicked"+ time);
  		alert("This is random text that may be filled in with actual value if Sean gets his shit together");
  	});
  };
  	$(this).click(clickMetrics);
// making a count down timer
  	var count=10;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return alert("This time is up!");
  }

  //Do code for showing the number of seconds here
  document.getElementById("timer").innerHTML=count + " secs";
}

var start = new Date().getTime(),
    elapsed = '0.0';

window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    document.title = elapsed;

}, 100);
});

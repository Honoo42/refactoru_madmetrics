$(document).on('ready', function() {
  
  var getContainerDim= function getContainerSize () {
    var container= document.getElementById('#container');
    var cMessage ="The width of the contents width padding: "  + "px.\n"+
            "The height of the contents width padding: " + container.scrollHeight + "px.\n"; 
          console.log(cMessage);
          };
  var clickMetrics = function() {
  	var time = new Date();
    var elapsedTime = time.getTime();
  		console.log("Metric Button Clicked"+ time + "\nElapsed Time "+ elapsed);
  		alert("This is random text that may be filled in with actual value if Sean gets his shit together");
  	};

  	$(document).on('click','.btn-met',clickMetrics);
    $(document).on('click','.demo',getContainerDim);
// making a count down timer
//   	var count=10;

// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      return alert("This time is up!");
//   }

//   //Do code for showing the number of seconds here
//   document.getElementById("timer").innerHTML=count + " secs";
// }

// creating a timer on page load
var start = new Date().getTime(),
    elapsed = '0.0';

window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    document.title = elapsed;

}, 100);

// creates a clock
var clockTimer = setInterval(function() {myClock()}, 1000);
  function myClock() {
    var localTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML=localTime;
  };

// creates a scrolling function that returns the px location
// of the scroll bar in the console
  $(window).on('scroll',function () {
  var info = document.getElementById('info');
  var scrollTop = $(window).scrollTop();
  var scrollLeft = $(window).scrollLeft();
  console.log( "Horizontal: " + $(window).scrollLeft() + "px\n Vertical: " + $(window).scrollTop() + "px");
});


// container height
  // function getContainerSize () {
  //   var container= document.getElementById('#container');
  //   var cMessage ="\n The width of the contents width padding: " + container.scrollWidth + "px.\n";
  //           "The height of the contents width padding: " + container.scrollHeight + "px.\n"; 
  //         };
  


});



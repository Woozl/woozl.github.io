

$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "ewp.mp3";
    obj.volume = 1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = false;
  
    $(document).on("mousemove", function (ev) {

        var mouseX = ev.originalEvent.pageX
        var mouseY = ev.originalEvent.pageY
    
        $("img").css("top", mouseY)
        $("img").css("left", mouseX)
    
    
    })

    $(document).on("click", function(){
        obj.play();
    })

    // $(".playSound").click(function() {
    //   obj.play();
    //   // obj.pause();
    // });
  });
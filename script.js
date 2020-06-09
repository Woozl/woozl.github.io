$(document).ready(function() {
    var ewp = document.createElement("audio");
    ewp.src = "audio/ewp.mp3";
    ewp.volume = 1;
    ewp.autoPlay = false;
    ewp.preLoad = true;
    ewp.controls = false;

    var whew = document.createElement("audio");
    whew.src = "audio/whew.mp3";
    whew.volume = 1;
    whew.autoPlay = false;
    whew.preLoad = true;
    whew.controls = false;

    var ohsnap = document.createElement("audio");
    ohsnap.src = "audio/ohsnap.mp3";
    ohsnap.volume = 1;
    ohsnap.autoPlay = false;
    ohsnap.preLoad = true;
    ohsnap.controls = false;
  
    var xCmp = 0;
    $(document).on("mousemove", function (ev) {

        var mouseX = ev.originalEvent.pageX
        var mouseY = ev.originalEvent.pageY

        $(".dinkles").css("top", mouseY)
        $(".dinkles").css("left", mouseX)

        if(mouseX < xCmp) {
            $("img").css("transform", "scaleX(1)")
        } else {
            $("img").css("transform", "scaleX(-1)")
        }
        xCmp = mouseX;

    })

    $(document).on("click", function(){ 
        test = generator();
        console.log(test);
        switch(test) {
            case 0:
                openMouth();
                ewp.play();
                setTimeout(closeMouth, ewp.duration * 1000)
                break;
            case 1:
                openMouth();
                whew.play();
                setTimeout(closeMouth, whew.duration * 1000)
                break; 
            case 2:
                openMouth();
                ohsnap.play();
                setTimeout(closeMouth, ohsnap.duration * 1000)
                break;   
            default:
                openMouth();
                ewp.play();
                setTimeout(closeMouth, ewp.duration * 1000)
                break;
        }
    })

  });

function generator() {
    var x = Math.random()
    if(x < 0.60) {  // ewp
        return 0;
    } else if(x >= 0.60 && x < 0.90) {  // whew
        return 1;
    } else {    // oh snap
        return 2;
    }
}

function closeMouth() {
    $(".dinkles").attr("src", "img/gas_dinkles.PNG")
}

function openMouth() {
    $(".dinkles").attr("src", "img/gas_dinkles_open.PNG")
}
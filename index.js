//============= Variables =============//

let index = 0; // Page section index 
let lastTime = 0; // Last recorded mouse wheel event time.
let pageMove = false; // Boolean to see if page animation has completed
let lastTouch = 0 //Last touch event value
let firstPt; // First Y coordinate
let scndTch// Secony Y coordinate
const animDur = 500; // Animation duration
const touchDur = 250; //Touch duration

//============= Scroll wheel detection and page movement =============//

$(window).on('wheel', { passive: false },function(e){
    const delta = e.originalEvent.wheelDelta;
    const currentTime = new Date().getTime();
    if((currentTime - lastTime) < animDur ){
        pageMove = true;
        return;
    }
    else{
        pageMove = false;
    }

    if(delta < 0 && pageMove == false){
        pageMove = true;
        if(index != $("section").length-1){
           index++; 
        }
        $('section')[index].scrollIntoView({behavior:'smooth'});
    }
    if(delta > 0 && pageMove == false){
        pageMove = true;
      
        if(index != 0){
            index--; 
        }
        $('section')[index].scrollIntoView({behavior:'smooth'});
    }
    lastTime = currentTime;
})

$(window).on('touchstart', function(e){
    firstPt = e.originalEvent.changedTouches[0].pageY; 
    console.log("Start");
})

$(window).on('touchend', function(e){
    scndTch = e.originalEvent.changedTouches[0].pageY;
    console.log(e.originalEvent.changedTouches[0].pageY);

    if(firstPt > scndTch){
        if (index == 2){
            index = 2;
        } else{
            index++;
        } 
    }
    if(firstPt < scndTch){
        if (index == 0){
            index = 0;
        } else{
            index--;
        }
    }
    movePage();
    console.log("Test run finished");
})

function movePage(){
    console.log('Moved');
    $('section')[index].scrollIntoView({behavior:'smooth'});
}


//============= SideNav bar page control =============//

$('.one').click(function(){
    index = 0;
    $('section')[index].scrollIntoView({behavior:'smooth'});
});

$('.two').click(function(){
    index = 1;
    $('section')[index].scrollIntoView({behavior:'smooth'});   
});

$('.three').click(function(){
    index = 2;
    $('section')[index].scrollIntoView({behavior:'smooth'});
});

//============= Mobile btn control =============//

$('.downTab').click(function(){
    if (index < 2){
        index++;
    }
    $('section')[index].scrollIntoView({behavior:'smooth'});
    console.log(index);
});

$('.upTab').click(function(){
    if (index > 0){
        index--;
    }
    $('section')[index].scrollIntoView({behavior:'smooth'});
    console.log(index);
});

//============= Dynamic text =============//

let time = new Date();
time.getHours();
if (time >= 24 || time < 12){
    $('.varTxt').text('Good morning');
} else
if (time >= 12 || time < 17){
    $('.varTxt').text('Good afternoon');
} else
if (time >= 17 || time < 24){
    $('.varTxt').text('Good evening');
}


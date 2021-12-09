//============= Variables =============//

let index = 0; // Page section index 
let lastTime = 0; // Last recorded mouse wheel event time.
let pageMove = false; // Boolean to see if page animation has completed
const animDur = 500; // Animation duration

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


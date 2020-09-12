document.addEventListener('DOMContentLoaded', () => {
    swup.on('contentReplaced', function() {
        setTimeout(function() {location.reload(); }, 1210);
            console.log("HELLO")
    })
})


// MOUSE FOLLOW-------------------------------------------------------

$(document).bind('mousemove', function(e){
    $('#follower').css({
       left:  e.pageX - 50,
       top:   e.pageY
    });
});


// CUSTOM CURSOR----------------------------------------------------

(function () {

      const link = document.querySelectorAll('#hover-this');
      const cursor = document.querySelector('.cursor');

      const animateit = function (e) {
            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
      };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };;
      window.addEventListener('mousemove', editCursor);

})();




// PARALLAX SCRIPT---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline
    
    // START OF HEADER-----------------------------------------------
    
    // FOREGROUND HILLS TO THE TOP
    
    .to('.mouse', 6, {
        opacity: 0
    })
    
    .from('#2', 6, {
        y: -1500, ease: Power3.easeInOut,
    })

    .from('#3', 6, {
        x: -1500, ease: Power3.easeInOut,
    })

    .from('#4', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#5', 6, {
        y: 1500, ease: Power3.easeInOut,
    })

    .from('#6', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#7', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#8', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#9', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#10', 6, {
        y: 1500, ease: Power3.easeInOut,
    })

    .from('#11', 6, {
        y: 1500, ease: Power3.easeInOut,
    })

    .from('#12', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#13', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#14', 6, {
        y: 1500, ease: Power3.easeInOut,
    })

    .from('#15', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#16', 6, {
        y: 1500, ease: Power3.easeInOut,
    })

    .from('#17', 6, {
        x: -1500, ease: Power3.easeInOut,
    })

    .from('#18', 6, {
        x: -1500, ease: Power3.easeInOut,
    })

    .from('#19', 6, {
        x: -1500, ease: Power3.easeInOut,
    })

    .from('#20', 6, {
        x: -1500, ease: Power3.easeInOut,
    })

    .from('#21', 6, {
        x: 1500, ease: Power3.easeInOut,
    })

    .from('#22', 6, {
        opacity: 0, ease: Power3.easeInOut,
    })

    .from('.enter', 6, {
        opacity: 0, ease: Power3.easeInOut,
    },'+=7')

   
    

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '1000%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);
})


// BACK TO TOP---------------------------------------------

mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





// SCROLL INDICATOR
var counter = document.querySelector(".percent");

function progress() {
    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    var $bgColor = progress > 99 ? "#fff" : "#fff";
    var $textColor = progress > 99 ? "#fff" : "#333";

    $("h1")
        .text(Math.round(progress) + "%")
        .css({ color: $textColor });

    $(".fill")
        .height(progress + "%")
        .css({ backgroundColor: $bgColor });
}
progress();
$(document).on("scroll", progress);

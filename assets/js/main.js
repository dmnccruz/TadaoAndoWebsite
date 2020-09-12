document.addEventListener('DOMContentLoaded', () => {
    swup.on('contentReplaced', function() {
        setTimeout(function() {location.reload(); }, 1210);
            console.log("HELLO")
    })
})


// CONTACTS PAGE SCRIPTS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (window.location.pathname=='/contactpage.html') {

    // SKETCHPAD-------------------------------------------------------------
    
    var canvas = document.getElementById('paint');
    var ctx = canvas.getContext('2d');
     
    var sketch = document.getElementById('sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = 2500;
    canvas.height = 1500;
    
    var mouse = {x: 0, y: 0};
     
    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);
    
    /* Drawing on Paint App */
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    ctx.strokeStyle = "white";
    function getColor(colour){ctx.strokeStyle = colour;}
    
    function getSize(size){ctx.lineWidth = size;}
    
    
    //ctx.strokeStyle = 
    //ctx.strokeStyle = document.settings.colour[1].value;
     
    canvas.addEventListener('mousedown', function(e) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
     
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);
     
    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
     
    var onPaint = function() {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };
    
    // DRAGGABLES GOOGLE MAPS-------------------------------------------------------------
    
    //Make the DIV element draggagle:
    dragElement(document.getElementById("mydiv"));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    
    // DRAGGABLES FORM--------------------------------------------------------------
    
    //Make the DIV element draggagle:
    dragElement(document.getElementById("mydiv2"));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    
    }
    
    
    //  HOMEPAGE SCRIPTS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    if (document.documentElement.clientWidth > 770) {
        
    // PARALLAX SCRIPT---------------------------------------------------
    
    document.addEventListener('DOMContentLoaded', () => {
    
        let controller = new ScrollMagic.Controller();
        let timeline = new TimelineMax();
        timeline
        
        // START OF HEADER-----------------------------------------------
        
        // FOREGROUND HILLS TO THE TOP
        .to('.mouse', 2, {
            opacity: 0
        })
        
        .to('#twelfth', 6, {
            y: -900
        })
        
        .to('#eleventh', 6, {
            y: -1100
        }, '-=6')
        
        // FOREGROUND CLOUDS TO THE SIDE
        
        .to('#cloud2', 6, {
            x: 2000,
            y: -1200,
        }, '-=6')
        
        .to('#cloud1', 6, {
            y: -1100,
            x: -2500
        }, '-=6')
        
        // FOREGROUND HILLS TO THE SIDE 
        
        // .to('#twelfth2', 6, {
        //     y: -1300,
        //     x: -100,
        //     scale: 3
        // }, '-=6')
        
        // .to('#eleventh2', 6, {
        //     y: -1100,
        //     x: 1000,
        //     scale: 3
        // }, '-=6')
        
        // OTHER IMAGES
        
        .to('#tenth', 6, {
            y: -800
        }, '-=6')
        
        .to('#nineth', 6, {
            y: -900
        }, '-=6')
        
        .to('#eighth', 6, {
            y: -800
        }, '-=6')
        
        .to('#seventh', 6, {
            y: -1000
        }, '-=6')
        
        .to('#sixth', 6, {
            y: -600
        }, '-=6')
        
        .to('#fifth', 6, {
            y: -500
        }, '-=6')
        
        .to('#fourth', 6, {
            y: -400
        }, '-=6')
        
        .to('#third', 6, {
            y: -200
        }, '-=6')
        
        .to('#second', 6, {
            y: -200
        }, '-=6')
        
        .to('#first', 6, {
            y: -200
        }, '-=6')
        
        // TADAO ANDO NAME
        
            .to('.title', 6, {
            y: -1200,
        }, '-=7')
        
        // BLUR
        
        .to('.blurimage', 6, {
            top: '0%'
        }, '-=6')
    
        .to('.blurimage', 6, {
            borderTopColor:"rgba( 255, 255, 255, 1)"
        }, '-=5')
    
        .from('.about', 6, {
            x: 2000, ease: Power3.easeInOut 
        }, '-=6')
        
        .from('.japtext3', 6, {
            x: 2000, ease: Power3.easeInOut 
        }, '-=3')
    
        .from('.aboutbuilding', 6, {
            y: 1500, ease: Power3.easeInOut 
        }, '-=2')
        
        .to('.blurimage', 6, {
            borderBottomColor:"rgba( 255, 255, 255, 1)"
        }, '-=5')
    
        .to('.about', 6, {
            color: "#9dd3dd" 
        }, '-=1')
    
        let scene = new ScrollMagic.Scene({
            triggerElement: 'section',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);
    
        // END OF SECTION 1--------------------------------------------------------
    
        let timeline2 = new TimelineMax();
        timeline2
    
        .to('.text-wrapper2', 6, {
            borderLeftColor:"rgba( 255, 255, 255, 1)"
        }, '-=5')
    
        .from('.portrait1', 6, {
            x: -1000, ease: Power3.easeInOut
        },'-=5')
    
    
        .from('.wrapped-text2.abouttext1', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
        .to('.second-section', 6, {
            backgroundColor:"#121212", ease: Power3.easeInOut 
        },)
    
        .from('.wrapped-text2.abouttext2', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0,
        },)
    
    
        .to('.portrait1', 6, {
            x: -1000, ease: Power3.easeInOut
        },)
    
    
        .from('.wrapped-text2.abouttext3', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0,
        },)
    
    
        .from('.portrait2', 6, {
            x: -1200, ease: Power3.easeInOut
        },)
    
    
        .from('.wrapped-text2.abouttext4', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0,
        },)
    
        .from('.wrapped-text2.abouttext5', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0,
        },)
    
        .to('.second-section', 6, {
            borderBottomColor:"rgba( 255, 255, 255, 1)"
        }, '-=5')
    
    
    
        let scene2 = new ScrollMagic.Scene({
            triggerElement: '.second-section',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline2)
        .setPin('.second-section')
        .addTo(controller);
    
    
        // END OF SECTION 2--------------------------------------------------------
    
    
        let timeline3 = new TimelineMax();
        timeline3
    
        .to('.concretepicture', 15, {
            opacity: 1, ease: Power3.easeInOut,
        },)
    
        .to('.hider2', 6, {
            borderBottomColor:"rgba( 255, 255, 255, 1)"
        }, '-=11')
    
        .to('.concretetext', 6, {
            y: 550, ease: Power3.easeInOut,
        },'-=12')
    
    
        let scene3 = new ScrollMagic.Scene({
            triggerElement: '.abouttext1',
            duration: '200%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline3)
        // .setPin('.concretepicture')
        .addTo(controller);
    
        // END OF CONCRETE HEADER--------------------------------------------------------
    
        let timeline4 = new TimelineMax();
        timeline4
    
        .to('.text-wrapper3', 6, {
            borderRightColor:"rgba( 255, 255, 255, 1)"
        },)
    
        .from('.wrapped-text3.concretetext1', 6, {
            x: -1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
        .from('.concretevideo', 6, {
            x: 2000, ease: Power3.easeInOut
        },)
    
        .from('.wrapped-text3.concretetext2', 6, {
            x: -1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
        .from('.wrapped-text3.concretetext3', 6, {
            x: -1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
        .from('.wrapped-text3.concretetext4', 6, {
            x: -1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
        .from('.wrapped-text3.concretetext5', 6, {
            x: -1500, ease: Power3.easeInOut,
            opacity: 0, 
        },)
    
    
        // .to('.third-section', 6, {
        //     borderBottomColor:"rgba( 255, 255, 255, 1)"
        // }, '-=5')
    
    
    
    
        let scene4 = new ScrollMagic.Scene({
            triggerElement: '.third-section',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline4)
        .setPin('.third-section')
        .addTo(controller);
    
    
        
        // END OF SECTION 3--------------------------------------------------------
    
        let timeline5 = new TimelineMax();
        timeline5
    
        .from('.pritzkerlogo', 6, {
            y: -750
        },)
    
        .from('.wrapped-text4.pritzkertext1', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },'-=5')
    
        .from('.pritzkerlogo', 6, {
            color: '#FFFFFF',
            textShadow: "0px 0px 0px rgb(0, 0, 0)"
        },)
    
        .from('.pritzker2', 6, {
            x: -1000, ease: Power3.easeInOut
        },'-=5')
    
        .from('.wrapped-text4.pritzkertext2', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },'-=5')
    
        .from('.wrapped-text4.pritzkertext3', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },'-=5')
    
        .from('.pritzker1', 6, {
            x: -1000, ease: Power3.easeInOut
        },'-=5')
    
        .from('.wrapped-text4.pritzkertext4', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },'-=5')
    
        .from('.wrapped-text4.pritzkertext5', 6, {
            x: 1500, ease: Power3.easeInOut,
            opacity: 0, 
        },'-=5')
    
        let scene5 = new ScrollMagic.Scene({
            triggerElement: '.fourth-section',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline5)
        .setPin('.fourth-section')
        .addTo(controller);
    
        
        
        // END OF SECTION 4--------------------------------------------------------
    
        let timeline6 = new TimelineMax();
        timeline6
    
        .from('.pointy', 6, {
            y: 750, ease: Power3.easeInOut,
        },)
    
        .from('.quote', 6, {
            y: 750, ease: Power3.easeInOut,
            opacity: 0
        },'-=2.5')
    
    
        .from('.quote2', 6, {
            opacity: 0
        },)
    
        let scene6 = new ScrollMagic.Scene({
            triggerElement: '.quotewrapper',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline6)
        .setPin('.quotewrapper')
        .addTo(controller);
    
        // END OF QUOTE--------------------------------------------------------
    
        let timeline7 = new TimelineMax();
        timeline7
    
        .from('#line1', 2, {
            opacity: 0
        },)
    
        .from('#line2', 2, {
            opacity: 0
        },)
    
        .from('#line3', 2, {
            opacity: 0
        },)
    
        .from('#line4', 2, {
            opacity: 0
        },)
    
        .from('#building1', 6, {
            y: -750, ease: Power3.easeInOut,
        },)
    
        .to('#line1', 6, {
            opacity: 0
        },)
    
        .from('#building2', 6, {
            y: -750, ease: Power3.easeInOut,
        },)
    
        .to('#line2', 6, {
            opacity: 0
        },)
    
        .from('#building3', 6, {
            y: -750, ease: Power3.easeInOut,
        },)
    
        .to('#line3', 6, {
            opacity: 0
        },)
    
        .from('#building4', 6, {
            y: -750, ease: Power3.easeInOut,
        },)
    
        .to('#line4', 6, {
            opacity: 0
        },)
    
    
    
    
    
        let scene7 = new ScrollMagic.Scene({
            triggerElement: '.fifth-section',
            duration: '500%',
            triggerHook: 0,
            offset: '0'
        })
        .setTween(timeline7)
        .setPin('.fifth-section')
        .addTo(controller);
    })
    
    // BACK TO TOP---------------------------------------------
    
    mybutton = document.getElementById("myBtn");
    
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    
    // MOUSE FOLLOW-------------------------------------------------------
    
    $(document).bind('mousemove', function(e){
        $('#follower').css({
           left:  e.pageX - 50,
           top:   e.pageY
           
           
        });
    });
    
    
    // $(document).bind('mousemove', function(e){
    //       $('.cursor').css({
    //          left:  e.pageX,
    //          top:   e.pageY,
             
             
    //       });
    //   });
    
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
    }
    
    
    // SCROLLBAR PROGRESS SCRIPT-----------------------------------------------
    
    if (window.location.pathname=='/homepage.html' || window.location.pathname=='/index.html') {
    
    var counter = document.querySelector(".percent");
    
    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
    
        var $bgColor = progress > 99 ? "#fff" : "#fff";
        var $textColor = progress > 99 ? "#333" : "#333";
    
        $("h1")
            .text(Math.round(progress) + "%")
            .css({ color: $textColor });
    
        $(".fill")
            .height(progress + "%")
            .css({ backgroundColor: $bgColor });
    }
    progress();
    $(document).on("scroll", progress);
            
    }
    // NAVBAR SCRIPT-----------------------------------------------
    
    
    function showNav(){
        document.getElementsByClassName("navigation")[0].classList.toggle("active");
        // document.getElementById("hide").style.display = "none";
    }
    
    // NAV BAR VIDEO SCRIPT
    
    // Get the video
    var video = document.getElementById("myVideo");
    
    // Get the button
    var btn = document.getElementById("myBtn");
    
    // Pause and play the video, and change the button text
    function myFunction() {
        if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
        } else {
        video.pause();
        btn.innerHTML = "Play";
        }
    }
    
    
    // PROJECTS PAGE SCRIPTS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    if (document.documentElement.clientWidth > 720) {
    
          var sickPrimary = {
                autoplay: false,
                autoplaySpeed: 2400,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 1000,
                cssEase: 'cubic-bezier(.84, 0, .08, .99)',
                asNavFor: '.text-slider, .text-slider2', 
                centerMode: true,
                prevArrow: $('.prev'),
                nextArrow: $('.next')
          }
          
          var sickSecondary = {
                autoplay: false,
                autoplaySpeed: 2400,
                slidesToShow:     1,
                slidesToScroll: 1,
                speed: 1000,
                cssEase: 'cubic-bezier(.84, 0, .08, .99)',
                asNavFor: '.image-slider, .text-slider2',
                prevArrow: $('.prev'),
                nextArrow: $('.next')
          }
          
          var sickThird = {
                autoplay: false,
                rtl: false,
                autoplaySpeed: 2400,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                cssEase: 'cubic-bezier(.84, 0, .08, .99)',
                asNavFor: '.image-slider, .text-slider',
                prevArrow: $('.prev'),
                nextArrow: $('.next')
          }
    
                $('.image-slider').slick(sickPrimary);
                
                $('.text-slider').slick(sickSecondary);
                
                $('.text-slider2').slick(sickThird);
    
          }
    
    
    if (document.documentElement.clientWidth < 720) {
    
              
    var sickPrimary = {
          autoplay: false,
          autoplaySpeed: 2400,
          slidesToShow: .9,
          slidesToScroll: 1,
          speed: 1000,
          cssEase: 'cubic-bezier(.84, 0, .08, .99)',
          asNavFor: '.text-slider, .text-slider2', 
          centerMode: false,
          prevArrow: $('.prev'),
          nextArrow: $('.next')
    }
    
    var sickSecondary = {
          autoplay: false,
          autoplaySpeed: 2400,
          slidesToShow:     1,
          slidesToScroll: 1,
          speed: 1000,
          cssEase: 'cubic-bezier(.84, 0, .08, .99)',
          asNavFor: '.image-slider, .text-slider2',
          prevArrow: $('.prev'),
          nextArrow: $('.next')
    }
    
    var sickThird = {
          autoplay: false,
          rtl: false,
          autoplaySpeed: 2400,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          cssEase: 'cubic-bezier(.84, 0, .08, .99)',
          asNavFor: '.image-slider, .text-slider',
          prevArrow: $('.prev'),
          nextArrow: $('.next')
    }
    
    
    
          $('.image-slider').slick(sickPrimary);
          
          $('.text-slider').slick(sickSecondary);
          
          $('.text-slider2').slick(sickThird);
    
    }
    
    // SPECIFIC PROJECTS PAGE SCRIPTS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    
    // var sickPrimary = {
    //       autoplay: false,
    //       autoplaySpeed: 2400,
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       speed: 1000,
    //       cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    //       asNavFor: '.text-slider', 
    //       centerMode: true,
    //       prevArrow: $('.prev'),
    //       nextArrow: $('.next')
    // }
    
    
    // var sickThird = {
    //       autoplay: false,
    //       rtl: false,
    //       autoplaySpeed: 2400,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       speed: 1000,
    //       cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    //       asNavFor: '.image-slider',
    //       prevArrow: $('.prev'),
    //       nextArrow: $('.next')
    // }
    
    //       var sickSecondary = {
    //       autoplay: false,
    //       autoplaySpeed: 2400,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       speed: 1000,
    //       cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    //       asNavFor: '.image-slider',
    //       prevArrow: $('.prev'),
    //       nextArrow: $('.next')
    // }
    
    
    
    //       $('.image-slider').slick(sickPrimary);
          
    //       $('.text-slider').slick(sickSecondary);
          
    //       $('.text-slider2').slick(sickThird);
    
    
    var swiper = new Swiper('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        });




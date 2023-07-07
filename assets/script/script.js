/* Cursor */
var cursor = document.getElementsByClassName("cursor");
var cursorFollower = document.getElementsByClassName("follower");

/* If mobile, put the default cursor */
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    cursor[0].style.display="none"; 
    cursorFollower[0].style.display="none";
} 

/* When the page is loaded */
window.addEventListener("load", () => {
    checkClassBody();

    /* Launch function to check if page have home body class */
    // checkClassBodyHome();

    /* Remove the loader */
    setTimeout(function() {
        jQuery('.loader-first').removeClass('preload');
        jQuery('.wrapper').addClass('loaded');
    }, 3000000);

    jQuery(".loader-first").fadeToggle(3000); 

    // change of page animation
    function delay(n) {
        n = n || 2000;
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n); 
        });
    }

    // change of page animation
    function pageTransition() {
        var tl = gsap.timeline();
        tl.to(".loading-screen", { 
            duration: 1.2,
            width: "100%",
            left: "0%",
            ease: "Expo.easeInOut",
        });

        tl.to(".loading-screen", {
            duration: 1, 
            width: "100%",
            left: "100%",
            ease: "Expo.easeInOut",
            delay: 0.1, 
        });
        tl.set(".loading-screen", { left: "-100%" });
    }

     //content animation
    function contentAnimation() {
        var tl = gsap.timeline(); 
        tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
    }

     // change of page animation
    $(function () { 
        barba.init({ 
            sync: true,

            transitions: [
                {
                    async leave(data) {
                        const done = this.async();
                        pageTransition();
                        await delay(1000);
                        done();
                    },

                    async enter(data) {
                        contentAnimation();
                    },

                    async once(data) {
                        contentAnimation();
                    },
                },
            ],
        });
    });

    // Update body class when transition between page is done
    barba.hooks.afterLeave((data) => {
        // Set <body> classes for "next" page
        var nextHtml = data.next.html;
        var response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml)
        var bodyClasses = $(response).filter('notbody').attr('class')
        $("body").attr("class", bodyClasses);
        checkClassBody(); 
      });

    barba.hooks.after(() => {
        checkClassBody(); 
    }); 
});

/* Check body class */
function checkClassBody() { 
    if($('body').hasClass('a-propos') || $('body').hasClass('projet-item')) {
        // Rounded text
     var Emblem = {
        init: function (el, str) {
            var elements = document.querySelectorAll(el);
            elements.forEach(element => {
                var text = str ? str : element.innerHTML;
                element.innerHTML = ''; 
                for (var i = 0; i < text.length; i++) {
                    var letter = text[i];
                    var span = document.createElement('span');
                    var node = document.createTextNode(letter);
                    var r = (360 / text.length) * (i); 
                    var x = (Math.PI / text.length).toFixed(0) * (i);
                    var y = (Math.PI / text.length).toFixed(0) * (i);
                    span.appendChild(node);
                    span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    element.appendChild(span);
                }
            });
        }
    };
    
    Emblem.init('.emblem');

    } else if ($('body').hasClass('home-page')) {
         //Initialisation of the locomotive scroll
         const lscroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            direction: 'horizontal',
            mobile: {
                direction: 'vertical'
            },
            tablet: {
                direction: 'vertical'
            } 
        });
        lscroll.update();
       
        //On click go to the target
        document.getElementById("menu-contact").addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector('#contact');
            lscroll.scrollTo(target);
        }, true);
        document.getElementById("menu-projet").addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector('#projets');
            lscroll.scrollTo(target);
        }, true);
    
        document.getElementById("rotated").addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector('#projets');
            lscroll.scrollTo(target);
        }, true);

        lscroll.update();

        const circleOppo = new CircleType(document.getElementById("open-oppo"));
        circleOppo.dir(1).radius(370);

    
        //When the scroll is at this end, change color of the menu
        var options = {
            root: null, 
            rootMargin: '0px',  
            threshold: 1.0
          } 
         
          function callback(entries, observer) {
           
            entries.forEach(entry => {
    
                var isIntersecting = IntersectionObserverEntry.isIntersecting;
                var itemsNav = document.getElementsByClassName('span-nav');
    
                if (entry.isIntersecting) {
                    for (var i = 0; i < itemsNav.length; i++){
                        itemsNav[i].style.color = "#fff6e9";
                    }
                     
                  } else {
            
                    for (var i = 0; i < itemsNav.length; i++){
                        itemsNav[i].style.color = "#e84e1b";
                    }
                  }
            });
          };
        
        var observer = new IntersectionObserver(callback, options);
    
        var target = document.querySelector('.infos-contact');
    
        if (window.innerWidth>1024){ 
            observer.observe(target);
        }
    
        var sizeWindow = function(){
            if (window.innerWidth>1024){ 
                observer.observe(target);
            } 
        };
        window.addEventListener("resizeWindow", sizeWindow);

         //if the page is resized, update locomotive scroll
        window.addEventListener('resize', function(event){
            lscroll.update();  
        }); 

        // Rounded text
    var Emblem = {
        init: function (el, str) {
            var elements = document.querySelectorAll(el);
            elements.forEach(element => {
                var text = str ? str : element.innerHTML;
                element.innerHTML = ''; 
                for (var i = 0; i < text.length; i++) {
                    var letter = text[i];
                    var span = document.createElement('span');
                    var node = document.createTextNode(letter);
                    var r = (360 / text.length) * (i); 
                    var x = (Math.PI / text.length).toFixed(0) * (i);
                    var y = (Math.PI / text.length).toFixed(0) * (i);
                    span.appendChild(node);
                    span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    element.appendChild(span); 
                } 
            });
        }
    };
    
    Emblem.init('.emblem');
    } 

    /* Cursor */ 
    gsap.set('.follower',{xPercent:-50,yPercent:-50}); 
    gsap.set('.cursor',{xPercent:-50,yPercent:-50});
    
    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');
    
    window.addEventListener('mousemove',e => {
        gsap.to(cur,0.2,{x:e.clientX,y:e.clientY}); 
        gsap.to(follow,0.2,{x:e.clientX,y:e.clientY}); 
    });  

    /*Cursor Hover*/
    var links = document.querySelectorAll(".hover-link");
 
    links.forEach(function(link){
        link.addEventListener('mouseover', function() {
            cur.style.width="20px";
            cur.style.height="20px";
        });

        link.addEventListener('mouseout', function() { 
            cur.style.width="10px";
            cur.style.height="10px";
        });
    }); 
}


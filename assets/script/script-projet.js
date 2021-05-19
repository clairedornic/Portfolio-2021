if (window.innerWidth>400){
    const circleAlt = new CircleType(document.getElementById("search-alt"));
    circleAlt.dir(1).radius(60); 
} 

window.addEventListener("load", () => {
 
    /* Cursor */ 
    gsap.set('.follower',{xPercent:-50,yPercent:-50}); 
    gsap.set('.cursor',{xPercent:-50,yPercent:-50});
    
    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');
    
    window.addEventListener('mousemove',e => {
        gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
        gsap.to(follow,0.3,{x:e.clientX,y:e.clientY}); 
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

        // Animation changement de page 
        function delay(n) {
            n = n || 2000;
            return new Promise((done) => {
                setTimeout(() => {
                    done();
                }, n);
            });
        }
    
        function pageTransition() {
            var tl = gsap.timeline();
            tl.to(".loading-screen", {
                duration: 2.2,
                width: "100%",
                left: "0%",
                ease: "Expo.easeInOut",
            });
    
            tl.to(".loading-screen", {
                duration: 2,
                width: "100%",
                left: "100%",
                ease: "Expo.easeInOut",
                delay: 0.3, 
            });
            tl.set(".loading-screen", { left: "-100%" });
        }
    
        function contentAnimation() {
            var tl = gsap.timeline(); 
            tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
        }
    
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
});

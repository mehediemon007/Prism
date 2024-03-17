;(function($){

    // scrollTop init

    var totop = $('#toTop'),
        win = $(window)

    win.on('scroll', function () {

        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
        
    });

    totop.on('click', function () {

        $("html,body").animate({
            scrollTop: 0
        }, 500)

    });

    new WOW().init();

    // Slider Four Column
  
    $(".team-cards").owlCarousel({
        loop:false,
        smartSpeed: 2000,
        stagePadding: 8,
        dots:false,
        nav: false,
        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        margin: 16,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 1,
                nav: true,
            },
            992:{
                items: 2,
            }
        }
    })
  
    $(".owl-nav button").attr('aria-label', 'owlNav');
  
  
    // Mobile Nav
  
    $(".nav-toggle").on("click",function(){
  
      $(".nav-toggle i").toggleClass("fa-xmark");
  
      $(".syn-nav-wpr").slideToggle("3000");
      
    })

    $(".nav-item a").on("click", function() {

        $(".syn-nav-wpr").slideToggle("3000");

        $(".nav-toggle i").toggleClass("fa-xmark");

    })

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".syn-header-wpr");
    window.onscroll = ()=>{
        this.scrollY > 50 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    function removeCard () {
        let cards = document.querySelectorAll(".member-cards .timeline");
        cards.forEach(c => {

            if (c.classList.contains('active')){
                c.classList.remove('active')
            }

        })
    }
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const card = entry.target;
        
            if (entry.isIntersecting) {
                removeCard();
                card.classList.add('active');
                return
            }
        
            // We're not intersecting, so remove the class!
            card.classList.remove('active');
        },
        {
            threshold: 0, /* top is 200 below top of viewport - something for the box to scroll into*/
        });
    });

    document.querySelectorAll('.member-cards .timeline').forEach(card => { observer.observe(card) })


    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const anim = entry.target;
        
            if (entry.isIntersecting) {
                anim.classList.add('active');
                return
            }

            // anim.classList.remove('active');
        },
        {
            threshold: 0, /* top is 200 below top of viewport - something for the box to scroll into*/
        });
    });

    observer2.observe(document.querySelector(".anim-text svg"))

    // observer.observe(document.querySelectorAll('.member-cards .single-card'));

    const player1 = new Plyr('#player1');
    const player2 = new Plyr('#player2');
    const player3 = new Plyr('#player3');

    gsap.config({ nullTargetWarn: false, trialWarn: false, });

    const cursor = document.getElementById("cursor"),
        follower = document.getElementById("aura"),
        links = document.getElementById("a")

        mouseX = 0, mouseY = 0, posX = 0, posY = 0

        function mouseCoords (e) {
            mouseX = e.clientX
            mouseY = e.clientY
        }
    
        gsap.to({}, .01, {

            repeat : -1,

            onRepeat : ()=> {

                posX += (mouseX - posX) / 5
                posY += (mouseY - posY) / 5

                gsap.set(cursor, {

                    css : {
                        x: mouseX,
                        y: mouseY
                    }
                })

                gsap.set(follower, {

                    css : {
                        x: posX - 23,
                        y: posY - 23
                    }
                })
            },
            ease:"Power2.easeOut"
        })

    const body = document.querySelector("body")

    body.addEventListener('mousemove', e => {
        mouseCoords(e)
    })

    const blkBg = document.querySelectorAll(".blk-bg")

    for(i = 0 ; i < blkBg.length ; i++) {
        blkBg[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })

        blkBg[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })
    }


})();



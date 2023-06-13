var isDesktop = false;
//Verify if the user it's on desktop
if (!/Mobi|Android/i.test(navigator.userAgent)) {
    isDesktop = true;
}

function validateForm() {
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var checkboxes = document.querySelectorAll('input[name="recordLabel"]:checked');
    var messageSuccess = document.getElementById("messageSuccess").style;
    var messageError = document.getElementById("messageError").style;
    messageSuccess.display = 'none';
    messageError.display = 'none';
    console.log(country)
    if (email === "" || country === "" || checkboxes.length === 0) {
        messageError.display = 'block';
        return false;
    }
    messageSuccess.display = 'block';
    return false;
}

function toggleMobileMenu() {
    let elem = document.querySelector('.topmenu');
    elem.classList.toggle('active');
};

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

function scrolltoView(targetId) {
    var targetElement = document.querySelector('#'+targetId);
    var targetOffset = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
    if(!isDesktop){
        let elem = document.querySelector('.topmenu');
        elem.classList.remove('active');
    }
}

gsap.registerPlugin(ScrollTrigger);

requestAnimationFrame(raf)

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});

if(isDesktop) {

    let scrollTrigger = {
        stagger: function(index, target, list) {
            return index * 0.1;
        },
        trigger: null,
        scrub: true,
        // markers: true
    }
    
    var fxElements = ['.album', '.tour', '.video', '.store', '.photo'];
    fxElements.forEach(el => {
        let scrollTrigger = {
            trigger: el,
            stagger: .1,
            // stagger: function(index, target, list) {
            //     return index * 0.1;
            // },
            trigger: el,
            scrub: true,
        }
        gsap.timeline({
            scrollTrigger: scrollTrigger
        })
        .from(el, {
            // y: -100,
            opacity: 0
        })
        .to(el, { 
            // y: 0,
            opacity: 1
        })
    });

}
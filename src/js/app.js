const KM_div = document.getElementById('KM_div');
    const K_div = document.getElementById('K_div');
    const M_div = document.getElementById('M_div');

    KM_div.addEventListener('mouseover', () => {
        K_div.classList.remove('invisible')
        M_div.classList.remove('invisible')
    });

    KM_div.addEventListener('mouseout', () => {
        K_div.classList.add('invisible')
        M_div.classList.add('invisible')
    });

    document.addEventListener("DOMContentLoaded", (event) => {
      gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
    
      let lastScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          navbar.classList.remove("visible-nav");
          navbar.classList.add("hidden-nav");
        } else {
          // Scrolling up
          navbar.classList.remove("hidden-nav");
          navbar.classList.add("visible-nav");
        }
        lastScrollY = window.scrollY;
      });
    });


    const callback = function (entries) {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");

        }
        // else{
        //     entry.target.classList.remove("animate-fadeIn");
        // }
    });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
      targets.forEach(function (target) {
      target.classList.add("opacity-1");
      observer.observe(target);
    });

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // prevent default link behavior

        // get the target section from the link's href attribute
        const targetSection = link.getAttribute('href');

        // use the scrollTo method to smoothly scroll to the target section
        gsap.to(window, {duration: 1, scrollTo: {y: targetSection}});
     });
    });

    ScrollTrigger.create({
        
        start: "top top",
        end: "bottom top",
        onToggle: self => {
            const navbar = document.querySelector('nav');
            if (self.isActive) {
            navbar.classList.add('md:h-20');
            navbar.classList.add('backdrop-blur-sm');
            navbar.classList.add('bg-gray-900');
            navbar.classList.add('bg-opacity-50');
            navbar.classList.add('rounded-b-lg');
            }
            else{
            navbar.classList.remove('md:h-20');
            navbar.classList.remove('backdrop-blur-sm');
            navbar.classList.remove('bg--gray-900');
            navbar.classList.remove('bg-opacity-50');
            navbar.classList.remove('rounded-b-lg');
            }

        }
    });

const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 100px",
      end: "bottom 100px",
      onEnter: () => highlightLink(index),
      onLeaveBack: () => highlightLink(index - 1)
    });
  });

  function highlightLink(index) {
    navLinks.forEach((link, i) => {
      if (i === index) {
        link.classList.add("md:text-[#F9D304]");
        link.classList.add("text-[#F9D304]");
        link.classList.remove("md:text-white");
        link.classList.remove("text-[#001a4a]");
      } else {
        link.classList.remove("md:text-[#F9D304]");
        link.classList.remove("text-[#F9D304]");
        link.classList.add("md:text-white");
        link.classList.add("text-[#001a4a]");
      }
    });
  }

  const mobileButton = document.getElementById('mobileButton')

  function hideMobileButton(){
    mobileButton.click();
  }

    
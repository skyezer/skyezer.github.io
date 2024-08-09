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
      trigger: "#scroll",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onEnter: () => {
        const navbar = document.querySelector('nav');
        navbar.classList.add('md:h-20', 'backdrop-blur-sm', 'bg-black', 'bg-opacity-50', 'rounded-b-lg');
      },
      onLeaveBack: () => {
        const navbar = document.querySelector('nav');
        navbar.classList.remove('md:h-20', 'backdrop-blur-sm', 'bg-black', 'bg-opacity-50', 'rounded-b-lg');
      },
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

  gsap.to(".absolute.inset-0", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".about-parallax.w-full", {
    xPercent: 70,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  const timeline = document.querySelector(".timeline");
  const events = document.querySelectorAll(".event");

  // Calculate the width of the entire timeline
  const timelineWidth = timeline.scrollWidth;
  const timelineContainerWidth = timeline.parentElement.clientWidth;

  // Create the horizontal scroll animation
  gsap.to(timeline, {
    x: -(timelineWidth - timelineContainerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".section",
      start: "top top",
      end: () => "+=" + (timelineWidth - timelineContainerWidth),
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // onLeave: () => {
      //   gsap.to(".section", {
      //     autoAlpha: 0,
      //     duration: 0.5,
      //     onComplete: () => {
      //       gsap.to(".section", { autoAlpha: 1 });
      //     }
      //   });
      // }
    }
  });

  const timeliner = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top center', // Trigger animation when the top of the container hits the bottom of the viewport
      end: 'bottom bottom', // Animation ends when the bottom of the container hits the top of the viewport
      once: true, // Makes the animation smooth with the scroll
    },
    defaults: {
      duration: 1,
      ease: "power2.out"
    }
  });

  // Select all the list items
  const items = document.querySelectorAll('.fade-up');

  // Animate the items with a stagger
  timeliner.from(items, {
    opacity: 0,
    x: 50,
    stagger: 0.3,
    delay: 0.5
  });

  const timelines = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom', // Trigger animation when the top of the container hits the bottom of the viewport
      end: 'bottom center', // Animation ends when the bottom of the container hits the top of the viewport
      scrub: true, // Makes the animation smooth with the scroll
    },
    defaults: {
      duration: 1,
      ease: "power2.out"
    }
  });

  // Select all the list items
  const items2 = document.querySelectorAll('.fade-up-mobile');

  // Animate the items with a stagger
  timelines.from(items2, {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    delay: 0.5
  });

  

  const mobileButton = document.getElementById('mobileButton')

  function hideMobileButton(){
    mobileButton.click();
  }

    
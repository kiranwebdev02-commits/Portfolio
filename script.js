/* ==========================================================================
   PREMIUM PORTFOLIO JAVASCRIPT - KIRAN GOSWAMI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CUSTOM CURSOR --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Fast follow for dot
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Smooth follow for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect to links and buttons
        const hoverElements = document.querySelectorAll('a, button, .project-img-wrapper, .service-card, .skill-card, .certificate-card, .social-link');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hover-active');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hover-active');
            });
        });
    }

    /* --- MOUSE SPOTLIGHT --- */
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            spotlight.style.setProperty('--x', `${x}%`);
            spotlight.style.setProperty('--y', `${y}%`);
        });
    }

    /* --- STICKY NAVBAR & ACTIVE LINKS --- */
    const navbar = document.querySelector('.glass-nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* --- TYPING ANIMATION --- */
    const typingText = [
        "Frontend Developer",
        "Web Developer",
        "Bootstrap Expert",
        "PHP Developer",
        "Python Learner",
        "Data Analytics Learner",
        "UI / UX Designer"
    ];
    let typeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typingElement');
    
    function typeEffect() {
        if (!typingElement) return;
        
        const currentText = typingText[typeIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeIndex = (typeIndex + 1) % typingText.length;
            typeSpeed = 500; // Pause before typing next
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);

    /* --- SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) --- */
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            
            // Trigger counter animation if it's a stat card
            const counters = entry.target.querySelectorAll('.counter');
            if (counters.length > 0) {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const increment = target / 50; // Speed adjustment
                    
                    const updateCount = () => {
                        const current = +counter.innerText;
                        if (current < target) {
                            counter.innerText = Math.ceil(current + increment);
                            setTimeout(updateCount, 40);
                        } else {
                            counter.innerText = target;
                            // Format zeroes for single digits to keep consistent width (e.g., 08)
                            if(target < 10 && target > 0) {
                                counter.innerText = '0' + target;
                            }
                        }
                    };
                    updateCount();
                });
            }

            // Trigger skill bar fill animation
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            if (skillBars.length > 0) {
                skillBars.forEach(bar => {
                    const targetWidth = bar.style.getPropertyValue('--target-width');
                    bar.style.width = targetWidth;
                });
            }

            observer.unobserve(entry.target);
        });
    }, revealOptions);

    const fadeElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    fadeElements.forEach(el => revealOnScroll.observe(el));

    /* --- 3D TILT EFFECT --- */
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    /* --- MOBILE MENU TOGGLE --- */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinksContainer) {
        mobileBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active-mobile');
            // We would need to add CSS for this, but since we are writing clean JS,
            // we handle the toggle. In a real premium site, this would trigger a fullscreen glass menu.
        });
    }

    /* --- FORM SUBMISSION PREVENT (Demo) --- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = "<i class='bx bx-check'></i> Sent Successfully!";
            btn.style.background = "linear-gradient(135deg, #10B981, #059669)";
            btn.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)";
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = "";
                btn.style.boxShadow = "";
                contactForm.reset();
            }, 3000);
        });
    }

});
const themeToggle = document.getElementById("themeToggle");

const body = document.body;

const icon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

    body.classList.add("light-mode");

    icon.className="bx bx-sun";

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        icon.className="bx bx-sun";

        localStorage.setItem("theme","light");

    }

    else{

        icon.className="bx bx-moon";

        localStorage.setItem("theme","dark");

    }

});

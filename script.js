document.addEventListener('DOMContentLoaded', function() {
    const profilePicContainer = document.querySelector('.profile-pic-container');
    const profileSection = document.querySelector('.profile-section');
    
    
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 1.8,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 15,
                "color": "#ffffff",
                "opacity": 1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2.75,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false, 
                    "rotateX": 750,
                    "rotateY": 5
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false, 
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false, 
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
    

    const animationContainer = document.createElement('div');
    animationContainer.className = 'profile-animation-container';
    profileSection.insertBefore(animationContainer, profilePicContainer);
    animationContainer.appendChild(profilePicContainer);
    
 
    const style = document.createElement('style');
    style.textContent = `
        .profile-animation-container {
            position: relative;
            width: 100%;
            height: 200px; /* Match your profile pic height */
            margin: 20px 0;
            overflow: hidden;
            z-index: 10;
        }
        
        .profile-pic-container {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%) translateX(-150%);
            z-index: 20;
            animation: slideInPauseOut 8s infinite ease-in-out;
        }
        
        @keyframes slideInPauseOut {
            0% {
                transform: translateX(-50%) translateX(-150%);
                opacity: 0;
            }
            20% {
                transform: translateX(-50%) translateX(0);
                opacity: 1;
            }
            70% {
                transform: translateX(-50%) translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateX(-50%) translateX(150%);
                opacity: 0;
            }
        }
        
        /* Mobile optimization */
        @media (max-width: 768px) {
            .profile-animation-container {
                height: 180px;
            }
            .profile-pic-container {
                animation-duration: 6s;
            }
        }
    `;
    document.head.appendChild(style);
    

    profilePicContainer.addEventListener('animationiteration', function() {
        this.style.transform = 'translateX(-50%) translateX(-150%)';
    });
});

const typingElement = document.getElementById('typingEffect');
const phrases = ["Entrepreneur |", "Web Developer |", "Pharmacist."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isTyping = true;
let cursorVisible = true;


const cursor = document.createElement('span');
cursor.className = 'cursor';
cursor.textContent = '|';
typingElement.appendChild(cursor);


const style = document.createElement('style');
style.textContent = `
    .cursor {
        animation: blink 1s infinite;
        color: #4a6fa5;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .jump {
        display: inline-block;
        animation: jump 0.5s ease;
        color: #4a6fa5;
    }
    @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

function typeWriter() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      
        const charSpan = document.createElement('span');
        charSpan.textContent = currentPhrase[currentCharIndex];
        charSpan.className = 'jump';
        
        
        typingElement.insertBefore(charSpan, cursor);
        
       
        setTimeout(() => {
            charSpan.classList.remove('jump');
        }, 500);
        
        currentCharIndex++;
        
        if (currentCharIndex === currentPhrase.length) {
            isTyping = false;
            
           
            if (currentPhraseIndex < phrases.length - 1) {
                const space = document.createTextNode(' ');
                typingElement.insertBefore(space, cursor);
            }
            
            
            setTimeout(() => {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                
                if (currentPhraseIndex === 0) {
                   
                    typingElement.innerHTML = '';
                    typingElement.appendChild(cursor);
                }
                
                currentCharIndex = 0;
                isTyping = true;
                typeWriter();
            }, 1000);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
}


setTimeout(typeWriter, 500);


setInterval(() => {
    cursorVisible = !cursorVisible;
    cursor.style.opacity = cursorVisible ? '1' : '0';
}, 500);

document.addEventListener('DOMContentLoaded', function() {
   
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
 
    mobileMenu.innerHTML = `
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    `;
    
    document.body.appendChild(mobileMenu);
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
      
        if (this.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
 
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
   
    const themeSwitch = document.getElementById('theme-switch');
    const root = document.documentElement;
    

    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
    
    themeSwitch.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
    

    const projectCards = document.querySelectorAll('.project-card');
    
    const animateOnScroll = () => {
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '3';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    

    projectCards.forEach(card => {
        card.style.opacity = '1.5';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 1s ease, transform 1s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});

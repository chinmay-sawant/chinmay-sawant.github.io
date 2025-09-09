// Theme management
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector(".theme-toggle");

  body.classList.toggle("light");
  button.textContent = body.classList.contains("light") ? "🌙" : "☀️";

  // Save theme preference
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
  
  // Add a small animation to the toggle
  button.style.transform = "scale(0.8)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);
}

// Load saved theme and initialize
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const button = document.querySelector(".theme-toggle");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    button.textContent = "🌙";
  }
  
  // Initialize animations
  initializeAnimations();
  
  // Add scroll animations
  setupScrollAnimations();
  
  // Add typing effect to subtitle
  addTypingEffect();
});

// Fetch GitHub stars count
async function fetchGitHubStars(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    return null;
  }
}

// Update GitHub stars display
async function updateGitHubStars() {
  const starsElement = document.getElementById('gopdfsuit-stars');
  if (!starsElement) return;
  
  const starCount = await fetchGitHubStars('chinmay-sawant/gopdfsuit');
  const countElement = starsElement.querySelector('.star-count');
  
  if (starCount !== null) {
    countElement.textContent = starCount;
  } else {
    countElement.textContent = 'N/A';
  }
}

// Initialize GitHub stars on page load
document.addEventListener('DOMContentLoaded', function() {
  updateGitHubStars();
  updateChromeStoreRating();
});

// Fetch Chrome Web Store rating and review count
async function fetchChromeStoreRating(extensionId) {
  try {
    return {
      rating: 5.0,
      reviewCount: 4
    };
    
  } catch (error) {
    console.error('Error fetching Chrome Web Store rating:', error);
    // Return the correct values as fallback
    return { rating: 5.0, reviewCount: 4 };
  }
}

// Update Chrome Web Store rating display
async function updateChromeStoreRating() {
  const ratingElement = document.getElementById('youtube-comments-rating');
  if (!ratingElement) return;
  
  const extensionId = 'youtube-user-comment-view/monlejnbfmbmokaeopljdejmldiinpmb';
  const { rating, reviewCount } = await fetchChromeStoreRating(extensionId);
  
  const scoreElement = ratingElement.querySelector('.rating-score');
  const countElement = ratingElement.querySelector('.rating-count');
  
  if (rating !== null) {
    scoreElement.textContent = rating.toFixed(1);
  } else {
    scoreElement.textContent = 'N/A';
  }
  
  if (reviewCount !== null) {
    countElement.textContent = reviewCount.toLocaleString();
  } else {
    countElement.textContent = '0';
  }
}

// Initialize page animations
function initializeAnimations() {
  // Set animation delays for staggered effect
  const animatedElements = document.querySelectorAll('.section, .project-card, .skill-tag, .interest-item');
  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
  // Simplified scroll animations - just add a class for enhanced effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe project cards and experience items for enhanced effects
  const elementsToObserve = document.querySelectorAll('.project-card, .experience-item');
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
}

// Add typing effect to various elements
function addTypingEffect() {
  // Disabled for now to avoid conflicts with CSS animations
  return;
  
  const subtitle = document.querySelector('.header .subtitle');
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing effect after header animation
    setTimeout(typeWriter, 2000);
  }
}

// Add smooth scrolling for anchor links
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add interactive hover effects
function addInteractiveEffects() {
  // Parallax effect for cards
  const cards = document.querySelectorAll('.project-card, .experience-item');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * 5;
      const rotateY = (centerX - x) / centerX * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// Add particle background effect
function createParticleBackground() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.1';
  
  document.body.appendChild(canvas);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  const particles = [];
  const particleCount = 50;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Add matrix rain effect for fun
function createMatrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-2';
  canvas.style.opacity = '0.05';
  
  document.body.appendChild(canvas);
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const matrix = chars.split('');
  
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(0);
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 100);
}

// Enhanced scroll reveal animation
function enhancedScrollReveal() {
  const reveals = document.querySelectorAll('.project-card, .experience-item');
  
  function reveal() {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', reveal);
  reveal(); // Check on load
}

// Add CSS for enhanced animations
function addEnhancedStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .active {
      animation: slideInFromBottom 0.6s ease-out forwards;
    }
    
    @keyframes slideInFromBottom {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-in {
      animation: slideInFromBottom 0.6s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
}

// Initialize everything when page loads
window.addEventListener('load', () => {
  addEnhancedStyles();
  setupSmoothScrolling();
  addInteractiveEffects();
  enhancedScrollReveal();
  
  // Optional: Add particle background (uncomment if desired)
  // createParticleBackground();
  
  // Optional: Add matrix rain effect (uncomment if desired - very subtle)
  // createMatrixRain();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Toggle theme with Ctrl/Cmd + Shift + T
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
    e.preventDefault();
    toggleTheme();
  }
});

// Add easter egg
let konami = [];
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konami.push(e.code);
  konami = konami.slice(-konamiCode.length);
  
  if (konami.join(',') === konamiCode.join(',')) {
    // Easter egg: Create a fun animation
    const body = document.body;
    body.style.animation = 'pulse 0.5s ease-in-out 3';
    
    // Show a fun message
    const message = document.createElement('div');
    message.textContent = '🚀 Konami Code Activated! 🚀';
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--accent);
      color: white;
      padding: 20px;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 600;
      z-index: 9999;
      animation: pulse 1s ease-in-out 3;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      document.body.removeChild(message);
    }, 3000);
    
    konami = []; // Reset
  }
});

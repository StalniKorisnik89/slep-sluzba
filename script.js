// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Highlight active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .why-us-card, .step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Click to call functionality (already handled by tel: links, but adding analytics placeholder)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Analytics placeholder - can be replaced with actual tracking
        console.log('Phone call initiated:', this.getAttribute('href'));
    });
});

// Header logo scroll functionality
const headerLogo = document.querySelector('.header-logo');

// Sticky call button visibility on scroll
let lastScrollTop = 0;
const stickyButton = document.querySelector('.sticky-call-button');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Header logo scroll effect
    if (headerLogo) {
        if (scrollTop > 200) {
            headerLogo.classList.add('scrolled');
        } else {
            headerLogo.classList.remove('scrolled');
        }
    }
    
    if (stickyButton) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            stickyButton.style.opacity = '0.8';
        } else {
            // Scrolling up
            stickyButton.style.opacity = '1';
        }
    }
    
    // Parallax effect for Why Us section background (desktop only)
    if (window.innerWidth > 767) {
        const whyUsBg = document.querySelector('.why-us-background');
        if (whyUsBg) {
            const whyUsSection = document.querySelector('.why-us');
            if (whyUsSection) {
                const rect = whyUsSection.getBoundingClientRect();
                const sectionTop = rect.top + scrollTop;
                
                // Only apply parallax when section is in viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const parallaxSpeed = 0.5;
                    const yPos = -(scrollTop - sectionTop) * parallaxSpeed;
                    whyUsBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Add hover effect enhancement for cards
document.querySelectorAll('.service-card, .why-us-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Performance: Lazy load images when they enter viewport
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Prevent layout shift on theme toggle
const style = document.createElement('style');
style.textContent = `
    * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }
`;
document.head.appendChild(style);

// Set OG image and URL dynamically based on current domain
// This runs immediately to set URLs before Facebook crawler reads the page
(function() {
    const baseUrl = window.location.origin;
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    
    // Set OG image URL
    if (ogImage) {
        const imagePath = '/og-image.jpg';
        ogImage.setAttribute('content', baseUrl + imagePath);
    }
    if (ogImageSecure) {
        const imagePath = '/og-image.jpg';
        ogImageSecure.setAttribute('content', baseUrl + imagePath);
    }
    
    // Set URLs
    if (ogUrl && !ogUrl.getAttribute('content')) {
        ogUrl.setAttribute('content', baseUrl + window.location.pathname);
    }
    if (twitterImage) {
        const imagePath = '/og-image.jpg';
        twitterImage.setAttribute('content', baseUrl + imagePath);
    }
    if (twitterUrl && !twitterUrl.getAttribute('content')) {
        twitterUrl.setAttribute('content', baseUrl + window.location.pathname);
    }
    if (canonical && !canonical.getAttribute('href')) {
        canonical.setAttribute('href', baseUrl + window.location.pathname);
    }
})();

// Price Calculator Function
function calculatePrice() {
    const distanceInput = document.getElementById('distance');
    const resultDiv = document.getElementById('calculator-result');
    const priceSpan = document.getElementById('calculated-price');
    const detailsDiv = document.getElementById('result-details');
    
    const distance = parseFloat(distanceInput.value);
    
    if (isNaN(distance) || distance < 0) {
        alert('Molimo unesite validnu udaljenost (broj veći ili jednak 0)');
        return;
    }
    
    let price = 0;
    let details = '';
    
    if (distance <= 50) {
        price = 50;
        details = `Fiksna cena za udaljenost do 50km`;
    } else {
        const additionalKm = distance - 50;
        const additionalPrice = additionalKm * 0.7;
        price = 50 + additionalPrice;
        details = `50€ (do 50km) + ${additionalKm.toFixed(1)}km × 0.7€ = ${additionalPrice.toFixed(2)}€`;
    }
    
    priceSpan.textContent = price.toFixed(2);
    detailsDiv.textContent = details;
    resultDiv.style.display = 'block';
    
    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', () => {
    const distanceInput = document.getElementById('distance');
    if (distanceInput) {
        distanceInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculatePrice();
            }
        });
    }
    
    // Update copyright year dynamically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


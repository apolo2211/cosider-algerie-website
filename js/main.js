// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Achievements filter
const filterBtns = document.querySelectorAll('.filter-btn');
const achievementCards = document.querySelectorAll('.achievement-card');

if (filterBtns.length > 0 && achievementCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            achievementCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Subsidiaries slider
const subsidiariesContainer = document.getElementById('subsidiaries-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const subsidiaryCards = document.querySelectorAll('.subsidiary-card');

if (subsidiariesContainer && prevBtn && nextBtn && subsidiaryCards.length > 0) {
    let currentSlide = 0;
    const totalSlides = subsidiaryCards.length;
    
    function updateSlider() {
        const width = subsidiaryCards[0].clientWidth;
        subsidiariesContainer.style.transform = `translateX(-${currentSlide * width}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    
    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
}

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter le code pour envoyer le formulaire
        // Pour l'instant, on simule l'envoi
        alert('Merci pour votre message! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on window load
window.addEventListener('load', () => {
    // Trigger scroll event to set initial header state
    window.dispatchEvent(new Event('scroll'));
    
    // Set initial slider position
    if (subsidiariesContainer && subsidiaryCards.length > 0) {
        const width = subsidiaryCards[0].clientWidth;
        subsidiariesContainer.style.transform = `translateX(0px)`;
    }
});
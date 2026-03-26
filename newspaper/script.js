/*
 * The Daily Chronicle - Interactive Enhancements
 * Modern interactions for a classic newspaper experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initReadingProgress();
    initNewsCardInteractions();
    initNavigation();
    initSubscribeForm();
    initAnimations();
    initWeatherWidget();
    initBriefsInteractions();
    initPrintEnhancements();

    // Add subtle newspaper texture effect
    addNewspaperTexture();

    console.log('The Daily Chronicle - Interactive newspaper loaded');
});

/**
 * Reading progress indicator
 * Shows how far the user has scrolled through the article
 */
function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress-bar');
    if (!progressBar) return;

    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;

        const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;

        // Add a glow effect when nearing the end
        if (progress > 85) {
            progressBar.style.boxShadow = '0 0 15px rgba(139, 0, 0, 0.5)';
        } else {
            progressBar.style.boxShadow = '0 0 10px rgba(139, 0, 0, 0.3)';
        }
    }

    // Update on scroll with throttling
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(updateProgress, 50);
    }, false);

    // Initial update
    updateProgress();
}

/**
 * Interactive news cards with hover effects
 */
function initNewsCardInteractions() {
    const newsCards = document.querySelectorAll('.news-card, .sports-card');

    newsCards.forEach(card => {
        // Add a subtle lift effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';

            // Add a newspaper "rustle" sound effect in imagination
            // (In a real implementation, this could trigger a subtle audio cue)

            // Highlight related category tag
            const categoryTag = this.querySelector('.category-tag, .opinion-label, .brief-category');
            if (categoryTag) {
                categoryTag.style.transform = 'scale(1.05)';
                categoryTag.style.transition = 'transform 0.2s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            // Reset category tag
            const categoryTag = this.querySelector('.category-tag, .opinion-label, .brief-category');
            if (categoryTag) {
                categoryTag.style.transform = 'scale(1)';
            }
        });

        // Click to "read" animation
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return; // Don't interfere with link clicks
            }

            // Create a subtle "ink spread" effect
            const inkEffect = document.createElement('div');
            inkEffect.style.position = 'absolute';
            inkEffect.style.top = '50%';
            inkEffect.style.left = '50%';
            inkEffect.style.width = '5px';
            inkEffect.style.height = '5px';
            inkEffect.style.backgroundColor = 'rgba(139, 0, 0, 0.1)';
            inkEffect.style.borderRadius = '50%';
            inkEffect.style.transform = 'translate(-50%, -50%)';
            inkEffect.style.pointerEvents = 'none';
            inkEffect.style.zIndex = '1';

            this.style.position = 'relative';
            this.appendChild(inkEffect);

            // Animate the ink spread
            const duration = 600;
            const startTime = Date.now();

            function animate() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const scale = 1 + (progress * 20);
                const opacity = 0.1 * (1 - progress);

                inkEffect.style.transform = `translate(-50%, -50%) scale(${scale})`;
                inkEffect.style.opacity = opacity;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    inkEffect.remove();
                }
            }

            requestAnimationFrame(animate);

            // Simulate "reading time" indicator
            const headline = this.querySelector('.story-headline, .lead-headline');
            if (headline) {
                const originalColor = headline.style.color;
                headline.style.color = '#8b0000';
                headline.style.transition = 'color 0.5s ease';

                setTimeout(() => {
                    headline.style.color = originalColor;
                }, 1000);
            }
        });
    });

    // Special effect for breaking news tag
    const breakingTag = document.querySelector('.category-tag.breaking');
    if (breakingTag) {
        // Add intermittent "urgency" pulse
        setInterval(() => {
            breakingTag.style.transform = breakingTag.style.transform === 'scale(1.05)' ? 'scale(1)' : 'scale(1.05)';
        }, 2000);
    }
}

/**
 * Enhanced navigation with section tracking
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section, .secondary-stories, .sports-stories');

    // Highlight current section in nav based on scroll position
    function updateActiveNav() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.id || section.classList[0];
                currentSection = sectionId.toUpperCase();
            }
        });

        navLinks.forEach(link => {
            const linkText = link.textContent.trim();
            if (currentSection && linkText.includes(currentSection)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Update on scroll with debouncing
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 100);
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.textContent.trim().toLowerCase().replace(' ', '-');
            const targetElement = document.getElementById(targetId) ||
                                 document.querySelector(`.${targetId}`);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Interactive subscribe form
 */
function initSubscribeForm() {
    const subscribeForm = document.querySelector('.subscribe-form');
    if (!subscribeForm) return;

    const emailInput = subscribeForm.querySelector('.subscribe-input');
    const subscribeBtn = subscribeForm.querySelector('.subscribe-btn');

    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (!emailInput.value || !isValidEmail(emailInput.value)) {
            // Shake animation for invalid input
            emailInput.style.animation = 'shake 0.5s ease';
            emailInput.style.borderColor = '#ff6b6b';

            setTimeout(() => {
                emailInput.style.animation = '';
                emailInput.style.borderColor = '';
            }, 500);

            return;
        }

        // Success animation
        const originalText = subscribeBtn.textContent;
        const originalBg = subscribeBtn.style.backgroundColor;

        subscribeBtn.textContent = 'SUBSCRIBED!';
        subscribeBtn.style.backgroundColor = '#22543d';
        subscribeBtn.disabled = true;
        emailInput.value = '';

        // Confetti effect
        createConfetti();

        // Reset after delay
        setTimeout(() => {
            subscribeBtn.textContent = originalText;
            subscribeBtn.style.backgroundColor = originalBg;
            subscribeBtn.disabled = false;
        }, 3000);
    });

    // Email validation
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Simple confetti effect
    function createConfetti() {
        const confettiCount = 50;
        const colors = ['#8b0000', '#b8860b', '#2c5282', '#22543d'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';

            document.body.appendChild(confetti);

            // Animation
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }
}

/**
 * Staggered animations for page elements
 */
function initAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.news-card, .lead-story, .sports-card, .briefs-section, .weather-widget');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, observerOptions);

    // Set initial states
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Special animation for lead headline
    const leadHeadline = document.querySelector('.lead-headline');
    if (leadHeadline) {
        leadHeadline.style.opacity = '0';
        leadHeadline.style.transform = 'translateY(30px)';

        setTimeout(() => {
            leadHeadline.style.opacity = '1';
            leadHeadline.style.transform = 'translateY(0)';
            leadHeadline.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300);
    }

    // Typewriter effect for newspaper title (optional)
    const newspaperTitle = document.querySelector('.newspaper-title');
    if (newspaperTitle && window.innerWidth > 768) {
        const originalText = newspaperTitle.textContent;
        newspaperTitle.textContent = '';

        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                newspaperTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        // Start after a brief delay
        setTimeout(typeWriter, 500);
    }
}

/**
 * Interactive weather widget
 */
function initWeatherWidget() {
    const weatherDays = document.querySelectorAll('.weather-day');

    weatherDays.forEach(day => {
        day.addEventListener('click', function() {
            // Show detailed forecast
            const dayName = this.querySelector('.day-name').textContent;
            const temp = this.querySelector('.weather-temp').textContent;
            const icon = this.querySelector('.weather-icon').className;

            // Create a simple modal/tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'weather-tooltip';
            tooltip.innerHTML = `
                <strong>${dayName}</strong><br>
                Temperature: ${temp}<br>
                Conditions: ${getConditionsFromIcon(icon)}
            `;
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'white';
            tooltip.style.padding = '10px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            tooltip.style.zIndex = '1000';
            tooltip.style.border = '1px solid #e8e5df';

            // Position and show
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width/2 - 75}px`;
            tooltip.style.top = `${rect.top - 100}px`;

            document.body.appendChild(tooltip);

            // Remove after delay
            setTimeout(() => {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, 2000);
        });
    });

    function getConditionsFromIcon(iconClass) {
        if (iconClass.includes('fa-sun')) return 'Sunny';
        if (iconClass.includes('fa-cloud-sun')) return 'Partly Cloudy';
        if (iconClass.includes('fa-cloud-rain')) return 'Rainy';
        return 'Clear';
    }
}

/**
 * Interactive news briefs
 */
function initBriefsInteractions() {
    const briefItems = document.querySelectorAll('.brief-item');

    briefItems.forEach(item => {
        item.addEventListener('click', function() {
            // Expand brief to show more details
            const briefText = this.querySelector('.brief-text');
            const originalHeight = briefText.clientHeight;

            if (briefText.style.maxHeight && briefText.style.maxHeight !== 'none') {
                briefText.style.maxHeight = 'none';
                this.style.backgroundColor = 'rgba(248, 245, 240, 0.5)';
            } else {
                briefText.style.maxHeight = `${originalHeight}px`;
                this.style.backgroundColor = '';

                // Auto-collapse after delay
                setTimeout(() => {
                    briefText.style.maxHeight = '';
                    this.style.backgroundColor = '';
                }, 5000);
            }
        });
    });
}

/**
 * Print-friendly enhancements
 */
function initPrintEnhancements() {
    // Add print styles dynamically
    const printStyle = document.createElement('style');
    printStyle.textContent = `
        @media print {
            .reading-progress,
            .subscribe-form,
            .social-links,
            .newspaper-fold {
                display: none !important;
            }

            body {
                background: white !important;
                color: black !important;
                font-size: 12pt !important;
            }

            .newspaper-header {
                position: static !important;
                border-bottom: 2px solid black !important;
            }

            .news-card,
            .sports-card {
                break-inside: avoid;
                box-shadow: none !important;
                border: 1px solid #ddd !important;
            }

            a {
                color: black !important;
                text-decoration: underline !important;
            }

            .footer-bottom {
                border-top: 1px solid black !important;
                margin-top: 2cm !important;
            }

            @page {
                margin: 2cm;
            }
        }
    `;
    document.head.appendChild(printStyle);

    // Add print button dynamically
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ PRINT EDITION';
    printButton.style.position = 'fixed';
    printButton.style.bottom = '20px';
    printButton.style.right = '20px';
    printButton.style.zIndex = '1000';
    printButton.style.padding = '10px 15px';
    printButton.style.backgroundColor = 'var(--color-ink)';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '4px';
    printButton.style.fontFamily = 'var(--font-ui)';
    printButton.style.fontSize = '0.8rem';
    printButton.style.fontWeight = '600';
    printButton.style.cursor = 'pointer';
    printButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    printButton.style.transition = 'all 0.3s ease';

    printButton.addEventListener('mouseenter', () => {
        printButton.style.backgroundColor = 'var(--color-accent-red)';
        printButton.style.transform = 'translateY(-2px)';
    });

    printButton.addEventListener('mouseleave', () => {
        printButton.style.backgroundColor = 'var(--color-ink)';
        printButton.style.transform = 'translateY(0)';
    });

    printButton.addEventListener('click', () => {
        window.print();
    });

    document.body.appendChild(printButton);
}

/**
 * Add subtle newspaper texture for authenticity
 */
function addNewspaperTexture() {
    const textureOverlay = document.createElement('div');
    textureOverlay.style.position = 'fixed';
    textureOverlay.style.top = '0';
    textureOverlay.style.left = '0';
    textureOverlay.style.right = '0';
    textureOverlay.style.bottom = '0';
    textureOverlay.style.pointerEvents = 'none';
    textureOverlay.style.zIndex = '9999';
    textureOverlay.style.opacity = '0.03';
    textureOverlay.style.backgroundImage = `
        repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)
    `;
    textureOverlay.style.mixBlendMode = 'multiply';

    // Only add on larger screens for performance
    if (window.innerWidth > 768) {
        document.body.appendChild(textureOverlay);
    }
}

/**
 * Utility: Add CSS animation keyframes dynamically
 */
function addKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes glow {
            0%, 100% { box-shadow: 0 0 10px rgba(139, 0, 0, 0.3); }
            50% { box-shadow: 0 0 20px rgba(139, 0, 0, 0.6); }
        }
    `;
    document.head.appendChild(style);
}

// Add keyframes when DOM is loaded
addKeyframes();
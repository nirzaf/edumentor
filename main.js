// Sample course data
const courses = [
    {
        title: 'Mathematics',
        level: 'Advanced',
        rating: 4.8,
        students: 1200,
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
    },
    {
        title: 'Physics',
        level: 'Intermediate',
        rating: 4.7,
        students: 800,
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
    },
    {
        title: 'Chemistry',
        level: 'Beginner',
        rating: 4.9,
        students: 1500,
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb'
    }
];

// Sample tutor data
const tutors = [
    {
        name: 'Dr. Sarah Johnson',
        subject: 'Mathematics',
        experience: '10+ years',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
        name: 'Prof. Michael Chen',
        subject: 'Physics',
        experience: '8+ years',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
        name: 'Dr. Emily Williams',
        subject: 'Chemistry',
        experience: '12+ years',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    {
        name: 'Prof. David Brown',
        subject: 'Biology',
        experience: '15+ years',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    }
];

// Sample pricing data
const pricingPlans = [
    {
        name: 'Basic',
        price: 29,
        features: [
            '1-on-1 Tutoring Sessions',
            'Access to Recorded Sessions',
            'Basic Study Materials',
            'Email Support'
        ]
    },
    {
        name: 'Pro',
        price: 49,
        features: [
            'All Basic Features',
            'Unlimited Tutoring Sessions',
            'Premium Study Materials',
            '24/7 Support',
            'Practice Tests'
        ]
    },
    {
        name: 'Premium',
        price: 79,
        features: [
            'All Pro Features',
            'Personalized Study Plan',
            'Progress Tracking',
            'Career Guidance',
            'Certificate of Completion'
        ]
    }
];

// Populate courses section
document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.querySelector('#courses .grid');
    courses.forEach(course => {
        const courseCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-blue-600 font-semibold">${course.level}</span>
                        <span class="text-sm text-gray-600">⭐ ${course.rating}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
                    <p class="text-gray-600 mb-4">${course.students} students enrolled</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-blue-600">$${course.price}</span>
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 enroll-btn">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        coursesContainer.innerHTML += courseCard;
    });

    // Populate tutors section
    const tutorsContainer = document.querySelector('#tutors .grid');
    tutors.forEach(tutor => {
        const tutorCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${tutor.image}" alt="${tutor.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1">${tutor.name}</h3>
                    <p class="text-gray-600 mb-2">${tutor.subject}</p>
                    <p class="text-sm text-gray-500 mb-2">${tutor.experience} experience</p>
                    <div class="flex items-center">
                        <span class="text-yellow-400">⭐</span>
                        <span class="ml-1 text-gray-600">${tutor.rating}</span>
                    </div>
                </div>
            </div>
        `;
        tutorsContainer.innerHTML += tutorCard;
    });

    // Populate pricing section
    const pricingContainer = document.querySelector('#pricing .grid');
    pricingPlans.forEach((plan, index) => {
        const isPopular = index === 1; // Middle plan is popular
        const pricingCard = `
            <div class="bg-white rounded-lg shadow-md overflow-hidden relative ${isPopular ? 'border-2 border-blue-600' : ''}">
                ${isPopular ? '<div class="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">Most Popular</div>' : ''}
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4">${plan.name}</h3>
                    <div class="mb-4">
                        <span class="text-4xl font-bold">$${plan.price}</span>
                        <span class="text-gray-600">/month</span>
                    </div>
                    <ul class="space-y-3 mb-6">
                        ${plan.features.map(feature => `
                            <li class="flex items-center">
                                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                    <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>
        `;
        pricingContainer.innerHTML += pricingCard;
    });
});

// Initialize course category buttons
function initializeCourseCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            
            // Add active class to clicked button
            button.classList.remove('bg-white', 'text-gray-700');
            button.classList.add('bg-blue-600', 'text-white');
        });
    });
}

// Initialize course cards
function initializeCourseCards() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        // Add hover effect for enroll button
        const enrollBtn = card.querySelector('.enroll-btn');
        const cardImage = card.querySelector('img');
        
        // Parallax effect on card image
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 20;
            const deltaY = (y - centerY) / 20;
            
            cardImage.style.transform = `scale(1.1) translate(${deltaX}px, ${deltaY}px)`;
        });
        
        // Reset image position on mouse leave
        card.addEventListener('mouseleave', () => {
            cardImage.style.transform = 'scale(1) translate(0, 0)';
        });
        
        // Add click animation to enroll button
        enrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'absolute bg-white/30 rounded-full pointer-events-none';
            const rect = enrollBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            enrollBtn.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 1000);
        });
    });
}

// Initialize view all courses button
function initializeViewAllButton() {
    const viewAllBtn = document.querySelector('.view-all-btn');
    
    viewAllBtn.addEventListener('mouseenter', () => {
        const icon = viewAllBtn.querySelector('.fas');
        icon.style.transform = 'translateX(5px)';
    });
    
    viewAllBtn.addEventListener('mouseleave', () => {
        const icon = viewAllBtn.querySelector('.fas');
        icon.style.transform = 'translateX(0)';
    });
}

// Initialize all course section features
document.addEventListener('DOMContentLoaded', () => {
    initializeCourseCategoryButtons();
    initializeCourseCards();
    initializeViewAllButton();
});

// Tutors Section Animations and Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Tutor Filter Buttons
    const tutorFilterBtns = document.querySelectorAll('.tutor-filter-btn');
    const tutorCards = document.querySelectorAll('.tutor-card');

    tutorFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tutorFilterBtns.forEach(b => {
                b.classList.remove('bg-purple-600', 'text-white');
                b.classList.add('bg-white', 'text-gray-700');
            });
            
            // Add active class to clicked button
            btn.classList.remove('bg-white', 'text-gray-700');
            btn.classList.add('bg-purple-600', 'text-white');

            // Get selected category
            const category = btn.textContent.trim().toLowerCase();

            // Filter tutor cards
            tutorCards.forEach(card => {
                const cardCategory = card.querySelector('span').textContent.trim().toLowerCase();
                if (category === 'all subjects' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
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

    // Book Session Button Animation
    const bookSessionBtns = document.querySelectorAll('.book-session-btn');
    bookSessionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            btn.appendChild(ripple);

            // Get button position
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set ripple position
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Animate tutor cards on scroll
    const animateTutorCards = () => {
        tutorCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.85;

            if (isVisible) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 100);
            }
        });
    };

    // Initial check for visible cards
    animateTutorCards();

    // Check for new cards becoming visible on scroll
    window.addEventListener('scroll', animateTutorCards);

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
        
        @keyframes blob {
            0% {
                transform: translate(0px, 0px) scale(1);
            }
            33% {
                transform: translate(30px, -50px) scale(1.1);
            }
            66% {
                transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
                transform: translate(0px, 0px) scale(1);
            }
        }

        .tutor-card {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease-out;
        }

        .tutor-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: currentColor;
            opacity: 0.3;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Pricing Section Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Monthly/Annual Toggle
    const billingToggle = document.getElementById('billing-toggle');
    const priceElements = document.querySelectorAll('.price-amount');
    const periodLabels = document.querySelectorAll('.price-amount + span');

    billingToggle.addEventListener('change', () => {
        const isAnnual = billingToggle.checked;
        
        priceElements.forEach(element => {
            const monthlyPrice = element.getAttribute('data-monthly');
            const annualPrice = element.getAttribute('data-annual');
            
            // Animate price change
            element.style.transform = 'translateY(-10px)';
            element.style.opacity = '0';
            
            setTimeout(() => {
                element.textContent = `$${isAnnual ? annualPrice : monthlyPrice}`;
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }, 200);
        });

        // Update period labels
        periodLabels.forEach(label => {
            label.textContent = isAnnual ? '/year' : '/month';
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('svg');
        
        button.addEventListener('click', () => {
            const isOpen = answer.classList.contains('show');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('svg');
                    otherAnswer.classList.remove('show');
                    otherAnswer.classList.add('hidden');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            if (isOpen) {
                answer.classList.remove('show');
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.classList.add('show');
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Add hover effects to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button:not(.faq-item button)');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple-effect');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .price-amount {
            transition: all 0.3s ease;
        }
        
        .pricing-card {
            transition: transform 0.5s ease;
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.7);
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        
        .faq-answer.show {
            max-height: 200px;
        }
        
        .faq-item button svg {
            transition: transform 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: translateY(-10px);
        }
    `;
    document.head.appendChild(style);
});

// Animate stats counter when in view
function animateCounters() {
    const counters = document.querySelectorAll('.stat-counter [data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const step = target / (duration / 16); // Update every 16ms (60fps)
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        // Start counter animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Create and animate particles for feature cards
function createParticles(container) {
    const particlesContainer = container.querySelector('.particles');
    const numParticles = 15;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-white rounded-full';
        
        // Random initial position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = '0';
        
        particlesContainer.appendChild(particle);
        
        // Animate each particle
        const animation = particle.animate([
            {
                transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0)`,
                opacity: 0
            },
            {
                transform: `translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(1)`,
                opacity: 0.5,
                offset: 0.5
            },
            {
                transform: `translate(${Math.random() * 120 - 60}px, ${Math.random() * 120 - 60}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 2000 + Math.random() * 1000,
            iterations: Infinity,
            delay: Math.random() * 1000
        });
    }
}

// Enhanced feature cards interaction
function initializeFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        // Create particles on hover
        card.addEventListener('mouseenter', () => {
            createParticles(card);
            
            // Add magnetic effect to icon
            const icon = card.querySelector('.icon-container');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / 15;
                const deltaY = (y - centerY) / 15;
                
                icon.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
            });
        });

        // Reset icon position on mouse leave
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.icon-container');
            icon.style.transform = 'translate(0, 0) scale(1)';
        });

        // Add ripple effect on click
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'absolute bg-white/30 rounded-full pointer-events-none';
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            card.appendChild(ripple);

            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });
}

// Add styles for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .feature-card .absolute {
        animation: ripple 1s linear;
    }
`;
document.head.appendChild(style);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    initializeFeatureCards();
    
    // Smooth scrolling for navigation links (previously defined)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

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

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
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
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

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

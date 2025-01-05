// Toggle theme function
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Function to populate sections with data
function populateSections(data) {
    // About
    const aboutContainer = document.getElementById('about-content');
    if (aboutContainer) {
        aboutContainer.innerHTML = `
            <h3>${data.about.title}</h3>
            <p>${data.about.description}</p>
            <h4>Skills:</h4>
            <ul>
                ${data.about.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
            <h4>Education:</h4>
            <ul>
                ${data.about.education.map(edu => `
                    <li>${edu.degree} - ${edu.institution}, ${edu.year}</li>
                `).join('')}
            </ul>
            <h4>Certifications:</h4>
            <ul>
                ${data.about.certifications.map(cert => `<li>${cert}</li>`).join('')}
            </ul>
        `;
    }

    // Education
    const educationList = document.getElementById('education-list');
    if (educationList && data.education) {
        educationList.innerHTML = data.education.map(edu => `
            <div class="education-item">
                <h4>${edu.degree}</h4>
                <h5>${edu.year}</h5>
                <p><em>${edu.institution}</em></p>
                <p>${edu.description}</p>
            </div>
        `).join('');
    }

    // Experience
    const experienceContainer = document.getElementById('experience-items');
    if (experienceContainer) {
        data.experience.forEach(exp => {
            experienceContainer.innerHTML += `
                <div class="col-lg-6">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <h5>${exp.period}</h5>
                    <p>${exp.description}</p>
                </div>
            `;
        });
    }

    // Projects
    const projectsContainer = document.getElementById('project-items');
    if (projectsContainer) {
        data.projects.forEach(project => {
            projectsContainer.innerHTML += `
                <div class="col-lg-4 col-md-6 portfolio-item">
                    <div class="portfolio-wrap">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            `;
        });
    }

    // Blogs
    const blogsContainer = document.getElementById('blog-items');
    if (blogsContainer) {
        data.blogs.forEach(blog => {
            blogsContainer.innerHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="post-box">
                        <h3>${blog.title}</h3>
                        <p>${blog.summary}</p>
                        <a href="${blog.link}" class="readmore" target="_blank">Read More</a>
                    </div>
                </div>
            `;
        });
    }
}

// Function to load data and populate sections
function loadData() {
    fetch('assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            populateSections(data);
        })
        .catch(error => console.error('Error:', error));
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fadeInUp');

const fadeInOptions = {
    threshold: 0.3
};

const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('fadeInUp');
        observer.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Theme toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// Alternate for above code (SwitchTheme function)
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }    
// }

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ['Machine Learning Engineer', 'Tech Writer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Load data after DOM is fully loaded
    loadData();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('#header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

// Initialize EmailJS
emailjs.init('user_3mcbEVgXohft2xMWLcxH2');

// Add contact form handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send('service_3i5la44', 'template_8mxvrcs', templateParams)
        .then(function() {
            showNotification('Message sent successfully!', 'success');
            document.getElementById('contact-form').reset();
        }, function(error) {
            showNotification('Failed to send message. Please try again.', 'error');
            console.log('Error:', error);
        })
        .finally(function() {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        });
});

// Add this function at the top of your script.js
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    
    // Add icon based on type
    const icon = type === 'success' ? '✓' : '✕';
    
    // Set notification content
    notification.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;
    
    // Add notification to document
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
    
    // Remove on click
    notification.addEventListener('click', () => {
        notification.classList.add('hide');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    });
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbarUl = document.querySelector('#navbar ul');

    mobileNavToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        navbarUl.classList.toggle('active');
        
        // Toggle icon between menu and close
        const icon = this.querySelector('i');
        if (icon.classList.contains('bi-list')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x');
        } else {
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarUl.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            navbarUl.classList.remove('active');
            const icon = mobileNavToggle.querySelector('i');
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarUl.classList.remove('active');
            const icon = mobileNavToggle.querySelector('i');
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        });
    });
});

  
// Selecting elements from the DOM
const hamburger = document.querySelector('.hamburger'); // Hamburger icon
const navMenu = document.querySelector('.nav-menu'); // Navigation menu
const mainContent = document.querySelector('main'); // Main content area
const navLinks = document.querySelectorAll('.nav-link'); // Navigation links

// Close the hamburger menu when clicking outside
document.addEventListener('click', function(event) {
    // Check if the click occurred inside the navigation links
    const isClickInsideNav = Array.from(navLinks).some(link => link.contains(event.target));

    // Check if the click was not on the hamburger icon, navigation menu, or any of its links
    if (!event.target.matches('.hamburger') && !event.target.matches('.hamburger *') && !event.target.matches('.nav-menu') && !event.target.matches('.nav-menu *') && !isClickInsideNav) {
        // Remove active classes to close the hamburger menu and reset main content positioning
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        mainContent.classList.remove('main-content-push');
    }
});

// Toggle the hamburger menu
hamburger.addEventListener('click', function() {
    // Toggle the active class on the hamburger icon and navigation menu
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    // Toggle a class on the main content to push it when the menu is active
    mainContent.classList.toggle('main-content-push');
});

// Smooth scroll functionality (Doesn't work as intended!!!)
document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links with the class .scroll-link
    var scrollLinks = document.querySelectorAll('.scroll-link');

    // Add click event listeners to each scroll link
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Retrieve the target element to scroll to based on the href attribute
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align top of the target element with the top of the viewport
                });

                // Close the hamburger menu after scrolling
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                mainContent.classList.remove('main-content-push');
            }
        });
    }
});
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

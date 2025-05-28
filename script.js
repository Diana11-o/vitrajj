// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Modal window functionality
    const form = document.getElementById('newsletter-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    if (form && modal && closeBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            modal.style.display = 'flex'; // Show modal
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none'; // Hide modal
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none'; // Hide modal on outside click
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none'; // Hide modal on Esc
            }
        });
    }

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (menuToggle && siteHeader) {
        menuToggle.addEventListener('click', function() {
            siteHeader.classList.toggle('menu-open');
        });
    }
    // Disappearing section
    const disappearingSection = document.querySelector('.disappearing-section');
    if (disappearingSection) {
        setTimeout(function() {
            disappearingSection.style.opacity = '0';
            setTimeout(function() {
                disappearingSection.style.display = 'none';
            }, 1000); // Wait for fade-out transition
        }, 10000); // Wait 10 seconds before starting fade-out
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    // Show modal on form submission
    if (form && modal && closeBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            modal.style.display = 'flex'; // Show modal
        });

        // Close modal on cross click
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Close modal on Esc key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });
    }
});
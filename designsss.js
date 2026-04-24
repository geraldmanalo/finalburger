
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all elements
    const orderBtn = document.querySelector('.order-now-btn') || document.querySelector('.cta-button');
    const navLinks = document.querySelectorAll('nav a');
    const searchIcon = document.querySelector('.search-icon');

    // 2. Order Now Button Function
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            alert('Redirecting to your cart! 🍔');
            // You can also use window.location.href = 'order.html';
        });
    }

    // 3. Navigation Links (Smooth Scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(targetId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 4. Search Icon Function
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            const query = prompt("What are you looking for?");
            if (query) {
                console.log("Searching for: " + query);
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    console.log("Burger site is live!");

    // This adds the alert when you click the order button
    const orderBtn = document.querySelector('.cta-button') || document.querySelector('.order-now-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            alert('¡Gracias! Tu Tito Burger está en preparación. 🍔🔥');
        });
    }
});
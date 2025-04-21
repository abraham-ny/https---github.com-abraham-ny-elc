document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('href').substring(1);
            const targetCard = document.getElementById(targetId);

            // Remove active class from all cards
            cards.forEach(card => card.classList.remove('active-card'));

            // Add active class to the selected card
            targetCard.querySelector('.card').classList.add('active-card');
        });
    });
});
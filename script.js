document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element to fade in
    const content = document.querySelector('.fade-in');

    // Add a small delay for a better visual effect
    setTimeout(() => {
        if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }
    }, 100);
});

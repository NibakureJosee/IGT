document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.opacity = 1;
        });

        item.addEventListener('mouseout', () => {
            const overlay = item.querySelector('.overlay');
            overlay.style.opacity = 0;
        });
    });
});

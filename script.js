document.addEventListener('DOMContentLoaded', () => {
    // Search input focus effect
    const searchInput = document.querySelector('.search-bar input');
    const searchShortcut = document.querySelector('.search-bar .shortcut');

    searchInput.addEventListener('focus', () => {
        searchShortcut.style.opacity = '0';
    });

    searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
            searchShortcut.style.opacity = '1';
        }
    });

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // Hero Slider (Visual only for now, can be extended)
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    const updateSlider = (index) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => updateSlider(index));
    });

    const leftBtn = document.querySelector('.slider-btn.left');
    const rightBtn = document.querySelector('.slider-btn.right');

    leftBtn.addEventListener('click', () => {
        let prev = currentSlide - 1;
        if (prev < 0) prev = dots.length - 1;
        updateSlider(prev);
    });

    rightBtn.addEventListener('click', () => {
        let next = currentSlide + 1;
        if (next >= dots.length) next = 0;
        updateSlider(next);
    });

    // Like buttons interaction
    const likeBtns = document.querySelectorAll('.btn-like');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.replace('fa-regular', 'fa-solid');
                this.style.color = '#ec4899';
            } else {
                icon.classList.replace('fa-solid', 'fa-regular');
                this.style.color = 'white';
            }
        });
    });

    // Random recommend animation
    const randomBtn = document.querySelector('.btn-random');
    const randomCat = document.querySelector('.random-recommend img');
    
    randomBtn.addEventListener('click', () => {
        randomCat.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            randomCat.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

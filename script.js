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

    // ===== Sakura Falling Effect =====
    function createSakura() {
        const petal = document.createElement('div');
        petal.classList.add('sakura-petal');
        
        // 隨機大小
        const size = Math.random() * 12 + 8; // 8px ~ 20px
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // 隨機起始水平位置
        petal.style.left = `${Math.random() * 100}vw`;
        
        // 隨機動畫時間
        const fallDuration = Math.random() * 5 + 7; // 7s ~ 12s
        const swayDuration = Math.random() * 2 + 2; // 2s ~ 4s
        
        // 加入動畫
        petal.style.animation = `fall ${fallDuration}s linear forwards, sway ${swayDuration}s ease-in-out infinite alternate`;
        
        document.body.appendChild(petal);
        
        // 動畫結束後移除 DOM
        setTimeout(() => {
            petal.remove();
        }, fallDuration * 1000);
    }

    // 初始先產生幾片櫻花
    for(let i = 0; i < 15; i++) {
        setTimeout(createSakura, Math.random() * 4000);
    }

    // 持續產生櫻花
    setInterval(createSakura, 400);
});

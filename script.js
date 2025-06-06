document.addEventListener('DOMContentLoaded', function() {

    // スムーズスクロール
    const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // モバイルナビゲーションを閉じる
                if (mobileNav.classList.contains('is-active')) {
                    hamburger.classList.remove('is-active');
                    mobileNav.classList.remove('is-active');
                }
            }
        });
    });
    
    // モバイル用ハンバーガーメニュー
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
    });


    // スクロール時のフェードイン
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // 10%表示されたら実行
    });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});

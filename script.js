function toggleMenu() {
    var nav = document.querySelector('.nav');
        nav.classList.toggle('active');
}

document.querySelectorAll('.nav li a').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = event.target.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        // 檢查目標元素是否存在
        if (targetElement) {
            // 設置滾動效果
            window.scrollTo({
                top: targetElement.offsetTop - 30, // 距離頂部 30px
            });
        }
        var nav = document.querySelector('.nav');
        nav.classList.remove('active');
    });
});

document.querySelector('.info-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var targetId = event.target.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);
    // 檢查目標元素是否存在
    if (targetElement) {
        // 設置滾動效果
        window.scrollTo({
            top: targetElement.offsetTop - 30, // 距離頂部 30px
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img.hidden-up');
    const imgElement = document.getElementById('aboutImg');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        const targetsEn = document.querySelectorAll('.content-title-en');
        targetsEn.forEach(target => {
            if (isInViewport(target)) {
                target.classList.add('visible');
            }
        });

        const targetsZh = document.querySelectorAll('.content-title-zh');
        const story = document.querySelector('.story');
        const aboutImg = document.querySelector('.about-img');
        let storyVisible = false, imgVisible = false;

        targetsZh.forEach(target => {
            if (isInViewport(target)) {
                target.classList.add('visible-Y');
                storyVisible = true;
                imgVisible = true;
            }
        });

        if (storyVisible && imgVisible) {
            setTimeout(() => {
                story.classList.add('visible-Y');
            }, 1000);
            setTimeout(() => {
                aboutImg.classList.add('visible-X');
            }, 1500);
        }

        const service = document.querySelectorAll('.services-content li');
        service.forEach(target => {
            if (isInViewport(target)) {
                target.classList.add('visible-Y');
            }
        });

        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.client-form');
        if (contactInfo && isInViewport(contactInfo)) {
            contactInfo.classList.add('visible-Y');
            setTimeout(() => {
                contactForm.classList.add('visible-X');
            }, 300);
        }
    }

    function checkIfInView() {
        const windowHeight = window.innerHeight;
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < windowHeight - 100) { // 当图片距离视窗底部100像素内时触发
                img.classList.add('visible-Y');
            }
        });
    }

    function updateImageSource() {
        if (window.innerWidth <=1200) {
            imgElement.src = '/images/about03.jpg'; // 新的圖片路徑
        } else {
            imgElement.src = '/images/about01.jpg'; // 原來的圖片路徑
        }
    }

    function checkCarousel() {
        if (window.innerWidth <= 767.99) {
            $('#projectCarousel').carousel({
                interval: 2000
            });
        } else {
            $('#projectCarousel').carousel('dispose');
        }
    }

    window.addEventListener('scroll', () => {
        checkIfInView();
        onScroll();
    });

    window.addEventListener('resize', () => {
        checkIfInView();
        updateImageSource();
        checkCarousel();
    });

    checkIfInView();
    updateImageSource();
    onScroll();
    checkCarousel();
});
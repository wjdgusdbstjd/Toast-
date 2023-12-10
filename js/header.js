document.addEventListener('DOMContentLoaded', function () {
    // 모든 a 태그에 대해서
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 부드러운 스크롤 적용
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



window.addEventListener('wheel',(event) => {
    let wheel = event.wheelDeltaY;
    const list = document.querySelector('.menu-list');
    const iconmenu = document.querySelector('.menu-icon');
  
    if(wheel > 0) {
        list.classList.remove('hide');
        iconmenu.classList.remove('bg');
    }
    else {
        list.classList.add('hide');
        iconmenu.classList.add('bg');
    }
  });
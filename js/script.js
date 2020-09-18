window.addEventListener('load', function () {
    AOS.init({
        once:true,
    });
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('opacity0');
    setTimeout(() => preloader.classList.add('display_none'), 1000)

    var burger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');
    var darkBg = document.querySelector('.dark_bg');
    var burgerActive = false;
    burger.addEventListener('click', () =>
    {
        if(burgerActive){
            document.body.style.overflow = 'overlay';
            burger.classList.remove('is-active');
            menu.classList.remove('menu-active');
            burgerActive = false;
        } else{
            document.body.style.overflow = 'hidden';
            burger.classList.add('is-active');
            menu.classList.add('menu-active');
            burgerActive = true;
        }
    });
    document.querySelectorAll('.menu li a').forEach(x =>{
        x.addEventListener('click', () => {
            document.body.style.overflow = 'overlay';
            burger.classList.remove('is-active');
            menu.classList.remove('menu-active');
            burgerActive = false;
        });
    });
    document.querySelectorAll('.catalog_tab__item').forEach(x => {
        x.addEventListener('click', activeDelete);  
    });
    function activeDelete(e) {
        document.querySelectorAll('.catalog_tab__item').forEach(x => {
            x.classList.remove('tab_active');
        });
        e.currentTarget.classList.add('tab_active');

        var active = document.querySelector('.active');
        var dataTabAttribute = e.currentTarget.getAttribute('data-tab');
        var tab = document.querySelector('#' + dataTabAttribute)
        
        if(dataTabAttribute == active.id) return;

        active.classList.remove('active');

        
        $(active).fadeOut(100);
        $(tab).delay(100).fadeIn(100);

        tab.classList.add('active');
    }
    var scroll = new SmoothScroll('a[href*="#"]',{
        easing: 'easeInOutQuad',
        updateURL: false,
        popstate: true,
        speed: 300,
    });
});

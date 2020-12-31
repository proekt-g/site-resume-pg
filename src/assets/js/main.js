// import AOS from 'aos'

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        if (document.documentElement.clientWidth <= 700 || document.documentElement.clientHeight <= 750) {
            document.querySelector('.menu__desktop-contacts').insertAdjacentElement('beforeend', document.querySelector('.who__socials'))
        }
        if (document.documentElement.clientWidth <= 700) {
            document.querySelector('.menu__desktop-contacts').insertAdjacentElement('beforeend', document.querySelector('.header__contact--phone'))
            document.querySelector('.menu__desktop').insertAdjacentElement('beforeend', document.querySelector('.header__contact--mail'))
            document.querySelector('body').insertAdjacentElement("afterbegin", document.querySelector('.avatar__icon'))
            for (const element of document.querySelectorAll('.who__achieving')) {
                document.querySelector('.about').insertAdjacentElement('afterend', element)
                element.classList.add('who__achieving--visible')
            }
        }

        document.documentElement.clientWidth <= 500
            && document.querySelectorAll('.education__slider .swiper-slide').forEach((slide, index) => {
                slide.insertAdjacentElement("beforeend", document.querySelector(`.education__text[data-number-text="${index + 1}"]`))
            })
        // document.querySelector('.menu__desktop').insertAdjacentElement("beforeend", document.querySelector('.header__contacts'))
    }
}
// $(window).on('load', () => {
window.addEventListener("load", function () {
    // variables
    // selecror
    const $cursor = document.querySelector('.cursor'),
        $menuBurger = document.querySelector('.menu__burger'),
        $menu = document.querySelector('.menu'),
        $aboutText = document.querySelector('.about__text'),
        $$menuDesktopElement = document.querySelectorAll('.menu__desktop-element'),
        $headerButton = document.querySelector('.header__button'),
        $whoAvatarIcon = document.querySelector('.avatar__icon'),
        $$educationSliderSwiperSlide = document.querySelectorAll('.education__slider .swiper-slide'),
        $$educationText = document.querySelectorAll('.education__text'),
        $education = document.querySelector('.education'),
        $swiperScrollbarNumberActive = document.querySelector('.swiper-scrollbar__number--active'),
        $$projectsTag = document.querySelectorAll('.projects__tag'),
        $$projectsList = document.querySelectorAll('.projects__list'),
        $projects = document.querySelector('.projects'),
        $$swiperSlideBox = document.querySelectorAll('.swiper-slide__box'),
        $cases = document.querySelector('.cases'),
        $$galleryThumbsSwiperSlide = document.querySelectorAll('.gallery-thumbs .swiper-slide'),
        $$galleryTopSwiperSlide = document.querySelectorAll('.gallery-top .swiper-slide'),
        $galleryThumbs = document.querySelector('.gallery-thumbs'),
        $galleryPaginationCurrent = document.querySelector('.gallery__pagination-current'),
        $galleryPaginationAmount = document.querySelector('.gallery__pagination-amount'),
        $gallery = document.querySelector('.gallery'),
        $modal = document.querySelector('.modal'),
        $galleryTop = document.querySelector('.gallery-top'),
        $modalClose = document.querySelector('.modal__close'),
        $modalButton = document.querySelector('.modal__button'),
        $galleryInner = document.querySelector('.gallery__inner'),
        $galleryPagination = document.querySelector('.gallery__pagination'),
        $swiperButtons = document.querySelector('.swiper-buttons'),
        $news = document.querySelector('.news'),
        $$newsName = document.querySelectorAll('.news__name'),
        $help = document.querySelector('.help'),
        $contact = document.querySelector('.contact'),
        $contactText = document.querySelector('.contact__text'),
        $menuDesktopContacts = document.querySelector('.menu__desktop-contacts'),
        $contactForm = document.getElementById('contact'),
        $success = document.querySelector('.success'),
        $successClose = document.querySelector('.success__close'),
        $paginationText = document.querySelector('.pagination__text'),
        $menuDesktop = document.querySelector('.menu__desktop');
    // /selecror
    // /variables
    // ----------------------------------------------
    // universal function
    function isTouchDevice() {
        return 'ontouchstart' in window
            || navigator.maxTouchPoints;
    }
    function ajaxRequest(ajaxForm, url) {
        try {
            history.replaceState(null, null, "#")
        } catch (z) {
            console.log(z)
        }
        var request = new XMLHttpRequest();
        request.open('GET', 'test.php', true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!

                var resp = this.response;
            } else {
                // We reached our target server, but it returned an error
                $success.classList.add('success--active')
                // alert('error')
            }
        };
        request.onerror = function () {
            // There was a connection error of some sort
            alert('arrow conect')
        };
        request.send();
    }
    //  /universal function
    // ----------------------------------------------
    // event

    if (!isTouchDevice()) {
        window.addEventListener('mousemove', (e) => {
            $cursor.style.top = e.pageY + 'px';
            $cursor.style.left = e.pageX + 'px';
        })
        document.querySelector('body').addEventListener("mouseleave", () => {
            $cursor.classList.add('cursor--leave')
        });
        document.querySelector('body').addEventListener("mouseenter", () => {
            $cursor.classList.remove('cursor--leave')
        });
        document.querySelector('body').addEventListener("mousedown", () => {
            $cursor.classList.add('cursor--click')
        });
        document.querySelector('body').addEventListener("mouseup", () => {
            $cursor.classList.remove('cursor--click')
        });
        for (const link of document.querySelectorAll('a')) {
            link.className !== 'who__social' &&
                link.addEventListener('mouseenter', (e) => {
                    $cursor.classList.add('cursor--pointer')
                })
        }
        for (const link of document.querySelectorAll('a')) {
            link.addEventListener('mouseleave', (e) => {
                $cursor.classList.remove('cursor--pointer')
            })
        }
        for (const link of document.querySelectorAll('button')) {
            link.addEventListener('mouseenter', (e) => {
                $cursor.classList.add('cursor--pointer')
            })
        }
        for (const link of document.querySelectorAll('button')) {
            link.addEventListener('mouseleave', (e) => {
                $cursor.classList.remove('cursor--pointer')
            })
        }
        for (const link of $$swiperSlideBox) {
            link.addEventListener('mouseenter', (e) => {
                $cursor.classList.add('cursor--pointer')
            })
        }
        for (const link of $$swiperSlideBox) {
            link.addEventListener('mouseleave', (e) => {
                $cursor.classList.remove('cursor--pointer')
            })
        }
    }
    for (const tag of $$projectsTag) {
        tag.addEventListener('click', function () {
            const oldActiveTag = document.querySelector('.projects__tag--active');
            oldActiveTag && oldActiveTag !== this && oldActiveTag.classList.remove('projects__tag--active')
            this.classList.add('projects__tag--active')
            document.querySelector('.projects__list--active').classList.remove('projects__list--active')
            document.querySelector(`.projects__list[data-list-number="${this.dataset.listNumber}"]`).classList.add('projects__list--active')
        })
    }
    for (const box of $$swiperSlideBox) {
        box.addEventListener('click', function () {
            this.style.height = this.getBoundingClientRect().height + 'px'
            this.classList.toggle('swiper-slide__box--open')
            const heightInnerElementBox = this.classList.contains('swiper-slide__box--open')
                ? (this.querySelector('.swiper-slide__text').getBoundingClientRect().height + this.querySelector('.swiper-slide__link').getBoundingClientRect().height + this.getBoundingClientRect().height) + 'px'
                : 'auto'
            this.style.height = heightInnerElementBox
        })
    }
    if (document.documentElement.clientWidth > 900) {
        $galleryThumbs.addEventListener('mouseenter', function () {
            this.querySelector('.swiper-slide--active').classList.add('swiper-slide--disable')
        })
        $galleryThumbs.addEventListener('mouseleave', function () {
            this.querySelector('.swiper-slide--active').classList.remove('swiper-slide--disable')
        })
        for (const slide of $$galleryThumbsSwiperSlide) {
            slide.addEventListener('click', () => {
                document.querySelector('.gallery-thumbs .swiper-slide--active').classList.remove('swiper-slide--active')
                slide.classList.add('swiper-slide--active')
            })
        }
    }
    for (const slide of $$galleryTopSwiperSlide) {
        slide.addEventListener('click', toggleGallery)
    }
    for (const button of $$newsName) {
        button.addEventListener('click', () => {
            document.querySelector('.news__list--active').classList.remove('news__list--active')
            document.querySelector(`.news__list[data-type="${button.dataset.type}"]`).classList.add('news__list--active')
        })
    }
    $paginationText.addEventListener('click', () => {
        fullpage_api.moveSectionDown();
    })
    $successClose.addEventListener('click', () => {
        $success.classList.toggle('success--active')
    })
    $modalButton.addEventListener('click', toggleGallery);


    (document.documentElement.clientWidth <= 700 || document.documentElement.clientHeight <= 750) && window.addEventListener('scroll', (e) => {
        if ($education.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $education.classList.add('education--active')
            for (const slide of $$educationSliderSwiperSlide) {
                slide.classList.add('swiper-slide--active')
            }
        } else {
            $education.classList.remove('education--active')
            for (const slide of $$educationSliderSwiperSlide) {
                slide.classList.remove('swiper-slide--active')
            }
        }
        if ($projects.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $projects.classList.add('projects--active')
        } else {
            $projects.classList.remove('projects--active')
        }
        if ($cases.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $cases.classList.add('cases--active')
        } else {
            $cases.classList.remove('cases--active')
        }
        if ($gallery.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $gallery.classList.add('gallery--active')
        } else {
            $gallery.classList.remove('gallery--active')
        }
        if ($news.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $news.classList.add('news--active')
        } else {
            $news.classList.remove('news--active')
        }
        if ($help.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $help.classList.add('help--active')
        } else {
            $help.classList.remove('help--active')
        }
        if ($contact.getBoundingClientRect().y - document.documentElement.clientHeight + 40 <= 0) {
            $contact.classList.add('contact--active')
        } else {
            $contact.classList.remove('contact--active')
            $contact.insert
        }
    })
    $$menuDesktopElement.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 700) {
                index === 0 && fullpage_api.silentMoveTo(3);
                index === 1 && fullpage_api.silentMoveTo(4);
                index === 2 && fullpage_api.silentMoveTo(5);
                index === 3 && fullpage_api.silentMoveTo(7);
                index === 4 && fullpage_api.silentMoveTo(8);
            } else {

            }
            toggleMenu();
        })
    })

    $menuBurger.addEventListener('click', toggleMenu)

    if (document.documentElement.clientWidth > 500)
        for (const slide of $$educationSliderSwiperSlide) {
            slide.addEventListener('click', function () {
                const activeText = document.querySelector(`.education__text[data-number-text="${this.dataset.numberSlide}"]`);
                for (const element of $$educationSliderSwiperSlide) {
                    element !== this && element.classList.remove('swiper-slide--open')
                }
                this.classList.toggle('swiper-slide--open')
                for (const text of $$educationText) {
                    text !== activeText && text.classList.remove('education__text--visible')
                    text.dataset.numberText < activeText.dataset.numberText
                        ? text.style.top = 'calc(100% - 400px)'
                        : text.style.top = 'calc(100% + 200px)'
                }
                activeText.classList.toggle('education__text--visible')
            })
        }


    // forms
    $contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        ajaxRequest("contact", "test.php")
    })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    function toggleMenu() {
        $menu.classList.toggle('menu--open')
        if ($menu.classList.contains('menu--open')) {
            setTimeout(() => {
                for (const element of $$menuDesktopElement) {
                    element.classList.toggle('menu__desktop-element--wrap')
                }
                $menuDesktop.classList.toggle('menu__desktop--auto')
            }, 1500)
        } else {
            for (const element of $$menuDesktopElement) {
                element.classList.toggle('menu__desktop-element--wrap')
            }
            $menuDesktop.classList.toggle('menu__desktop--auto')
        }

        document.documentElement.clientWidth <= 700 && (
            document.querySelector('body').classList.toggle('block'),
            $headerButton.classList.toggle('header__button--white'),
            $whoAvatarIcon.classList.toggle('avatar__icon--disable')
        )
    }
    function toggleGallery() {
        document.querySelector('body').classList.toggle('block')
        !$modal.classList.contains('modal--active')
            ? $modal.insertAdjacentElement("beforeend", $galleryTop)
            : $galleryInner.insertAdjacentElement("afterbegin", $galleryTop)
        galleryTop.update()
        $modal.classList.toggle('modal--active')
        $modal.classList.contains('modal--active')
            ? $swiperButtons.insertAdjacentElement('beforeend', $galleryPagination)
            : $galleryInner.insertAdjacentElement('beforeend', $galleryPagination)
        for (const slide of $$galleryTopSwiperSlide) {
            $modal.classList.contains('modal--active')
                ? slide.removeEventListener('click', toggleGallery)
                : slide.addEventListener('click', toggleGallery)
        }
        $modalClose.classList.toggle('modal__close--open')

    }
    // /unique function
    // ----------------------------------------------
    // Page load
    document.documentElement.clientWidth > 700 && document.documentElement.clientHeight > 750 && new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        // anchors: ['head', 'info', 'education', 'projects'],
        onLeave: (origin, destination, direction) => {
            document.querySelector('.pagination__number--active').classList.remove('pagination__number--active')
            document.querySelector(`.pagination__number[data-number="${destination.index + 1}"]`).classList.add('pagination__number--active')
            setTimeout(() => {
                switch (destination.index + 1) {
                    case 3:
                        destination.item.classList.add('education--active')
                        for (const slide of destination.item.querySelectorAll('.swiper-slide')) {
                            slide.classList.add('swiper-slide--active')
                        }
                        break;
                    case 4:
                        destination.item.classList.add('projects--active')
                        break;
                    case 5:
                        destination.item.classList.add('cases--active')
                        break;
                    case 6:
                        destination.item.classList.add('gallery--active')
                        break;
                    case 7:
                        destination.item.classList.add('news--active')
                        break;
                    case 8:
                        destination.item.classList.add('help--active')
                        break;
                    case 9:
                        destination.item.classList.add('contact--active')
                        break;
                }
                switch (origin.index + 1) {
                    case 3:
                        origin.item.classList.remove('education--active')
                        for (const slide of origin.item.querySelectorAll('.swiper-slide')) {
                            slide.classList.remove('swiper-slide--active')
                        }
                        break;
                    case 4:
                        origin.item.classList.remove('projects--active')
                        break;
                    case 5:
                        origin.item.classList.remove('cases--active')
                        break;
                    case 6:
                        origin.item.classList.remove('gallery--active')
                        break;
                    case 7:
                        origin.item.classList.remove('news--active')
                        break;
                    case 8:
                        origin.item.classList.remove('help--active')
                        break;
                    case 9:
                        origin.item.classList.remove('contact--active')
                        break;
                }
            }, 600)
        },
        afterRender: () => {
            const activeSection = document.querySelector(".section.active")
            if (activeSection) {
                document.querySelector('.pagination__number--active').classList.remove('pagination__number--active')
                document.querySelector(`.pagination__number[data-number="${activeSection.dataset.sectionNumber}"]`).classList.add('pagination__number--active')
                switch (+activeSection.dataset.sectionNumber) {
                    case 3:
                        activeSection.classList.add('education--active')
                        for (const slide of activeSection.querySelectorAll('.swiper-slide')) {
                            slide.classList.add('swiper-slide--active')
                        }
                        break;
                    case 4:
                        activeSection.classList.add('projects--active')
                        break;
                    case 5:
                        activeSection.classList.add('cases--active')
                        break;
                    case 6:
                        activeSection.classList.add('gallery--active')
                        break;
                    case 7:
                        activeSection.classList.add('news--active')
                        break;
                    case 8:
                        activeSection.classList.add('help--active')
                        break;
                    case 9:
                        activeSection.classList.add('contact--active')
                        break;
                }
            }
        }
    });

    !isTouchDevice()
        ? document.querySelector('body').classList.add('mouse-device')
        : $cursor.classList.add('cursor--disable')

    new TypeIt(".about__text", {
        speed: 75,
        waitUntilVisible: true
    })
        .type($aboutText.dataset.textStringOne)
        .break({ delay: 200 })
        .type($aboutText.dataset.textStringTwo)
        .break({ delay: 200 })
        .type(`<span class="about__text-white">${$aboutText.dataset.textStringThree}</span>`)
        .type($aboutText.dataset.textStringFour)
        .type(`<span class="about__text-white">${$aboutText.dataset.textStringFive}</span>`)
        .break({ delay: 200 })
        .type(`<span class="about__text-white">${$aboutText.dataset.textStringSix}</span>`)
        .type($aboutText.dataset.textStringSeven)
        .type(`<span class="about__text-white">${$aboutText.dataset.textStringEight}</span>`)
        .go()

    document.documentElement.clientWidth <= 500 && new Swiper('.education__slider', {
        slidesPerView: 'auto',
        autoHeight: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        on: {
            slideChange: (swiper) => {
                swiper.el.querySelector('.swiper-scrollbar__number--active').innerHTML = '0' + (swiper.activeIndex + 1);
            }
        }
    });
    document.documentElement.clientWidth <= 900 && new Swiper('.cases__slider', {
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 5,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        on: {
            slideChange: (swiper) => {
                swiper.el.querySelector('.swiper-scrollbar__number--active').innerHTML = '0' + (swiper.activeIndex + 1);
            },
            reachEnd: (swiper) => {
                swiper.el.querySelector('.swiper-scrollbar__number--active').innerHTML = '0' + (swiper.slidesGrid.length);
            }
        }
    });
    const galleryThumbsSwiper = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'horizontal',
        breakpoints: {
            901: {
                direction: 'vertical',
                spaceBetween: 5,
            }
        },
    });
    const galleryTop = new Swiper('.gallery-top', {
        effect: 'fade',
        thumbs: {
            swiper: galleryThumbsSwiper
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: (swiper) => {
                $galleryPaginationAmount.innerHTML = swiper.slidesGrid.length
            },
            slideChange: (swiper) => {
                $galleryPaginationCurrent.innerHTML = swiper.activeIndex >= 9 ? (swiper.activeIndex + 1) : ('0' + (swiper.activeIndex + 1));
            },
            // reachEnd: (swiper) => {
            //     swiper.el.querySelector('.swiper-scrollbar__number--active').innerHTML = '0' + (swiper.imagesLoaded);
            // }
        }
    });
    document.documentElement.clientWidth <= 500 && $contactText.insertAdjacentElement('beforebegin', $menuDesktopContacts.cloneNode(true))
    // AOS.init();
    // OverlayScrollbars(document.querySelectorAll('.projects .container'), { /* your options */ });
});

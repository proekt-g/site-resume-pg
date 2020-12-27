// import AOS from 'aos'

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        if (document.documentElement.clientWidth <= 700) {
            document.querySelector('.menu__desktop-contacts').insertAdjacentElement('beforeend', document.querySelector('.who__socials'))
            document.querySelector('.menu__desktop-contacts').insertAdjacentElement('beforeend', document.querySelector('.header__contact--phone'))
            document.querySelector('.menu__desktop').insertAdjacentElement('beforeend', document.querySelector('.header__contact--mail'))
            document.querySelector('body').insertAdjacentElement("afterbegin", document.querySelector('.who__avatar-icon'))
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
        $whoAvatarIcon = document.querySelector('.who__avatar-icon'),
        $$educationSliderSwiperSlide = document.querySelectorAll('.education__slider .swiper-slide'),
        $$educationText = document.querySelectorAll('.education__text'),
        $education = document.querySelector('.education'),
        $swiperScrollbarNumberActive = document.querySelector('.swiper-scrollbar__number--active'),
        $$projectsTag = document.querySelectorAll('.projects__tag'),
        $$projectsList = document.querySelectorAll('.projects__list'),
        $projects = document.querySelector('.projects');
    // /selecror
    // /variables
    // ----------------------------------------------
    // universal function
    function isTouchDevice() {
        return 'ontouchstart' in window
            || navigator.maxTouchPoints;
    };
    // function ajaxRequest(ajaxForm, url) {
    //     try {
    //         history.replaceState(null, null, "#")
    //     } catch (z) {
    //         console.log(z)
    //     }
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "html",
    //         data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
    //         success: function (response) {
    //             //Данные отправлены успешно
    //             let result = $.parseJSON(response)
    //             console.log(result)
    //         },
    //         error: function (response) {
    //             // Данные не отправлены
    //             alert("Ошибка. Данные не отправлены.")
    //         },
    //     })
    // }
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
    // for (const element of $$menuDesktopElement) {
    //     element.addEventListener('click', function () {
    //         fullpage_api.silentMoveTo(this.dataset.anchorNumber, 0);
    //         toggleMenu()
    //     })
    // }
    document.documentElement.clientWidth <= 700 && window.addEventListener('scroll', (e) => {
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
    })
    // for(const element of $$menuDesktopElement){
    //     element.addEventListener('click', ()=>{

    //     })
    // }

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
    // $("#registration-form").on("input, submit", (e) => {
    //     e.preventDefault()
    //     ajaxRequest("registration-form", "test.php")
    // })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    function toggleMenu() {
        $menu.classList.toggle('menu--open')
        setTimeout(() => {
            for (const element of $$menuDesktopElement) {
                element.classList.toggle('menu__desktop-element--wrap')
            }
        }, 1500)
        document.documentElement.clientWidth <= 700 && (
            document.querySelector('body').classList.toggle('block'),
            $headerButton.classList.toggle('header__button--white'),
            $whoAvatarIcon.classList.toggle('who__avatar-icon--disable')
        )
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    document.documentElement.clientWidth > 700 && new fullpage('#fullpage', {
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
                }
            }
        }
    });

    !isTouchDevice()
        ? document.querySelector('body').classList.add('mouse-device')
        : $cursor.classList.add('cursor--disable')
    // console.log(is_touch_device())

    // console.log($aboutText.dataset('text'))
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
                $swiperScrollbarNumberActive.innerHTML = '0' + (swiper.activeIndex + 1);
                // console.log(swiper.activeIndex)
            }
        }
    });
    // AOS.init();
});

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
        $whoAvatarIcon = document.querySelector('.who__avatar-icon')
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
    // for(const element of $$menuDesktopElement){
    //     element.addEventListener('click', ()=>{

    //     })
    // }

    $menuBurger.addEventListener('click', () => {
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
    })

    // forms
    // $("#registration-form").on("input, submit", (e) => {
    //     e.preventDefault()
    //     ajaxRequest("registration-form", "test.php")
    // })
    // /forms
    // /event
    // ----------------------------------------------
    // unique function
    // /unique function
    // ----------------------------------------------
    // Page load
    document.documentElement.clientWidth > 700 && new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        onLeave: (origin, destination, direction) => {
            document.querySelector(`.pagination__number[data-number="${origin.index + 1}"]`).classList.remove('pagination__number--active')
            document.querySelector(`.pagination__number[data-number="${destination.index + 1}"]`).classList.add('pagination__number--active')
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

});

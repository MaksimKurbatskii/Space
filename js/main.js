(function () {
    // Tabs header nav
    let tabNav = document.querySelectorAll('.header-tabs__item'),
        tabContent = document.querySelectorAll('.tab-chapter'),
        body = document.querySelector('.body'),
        headerGap = document.querySelector('.header'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        const backgroundImage = getBackgroundImage(tabName);
        if (backgroundImage) {
            body.style.backgroundImage = `url(${backgroundImage})`;
        }

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            if (tabName === 'header-tab-2') {
                document.getElementById('moon').classList.add('is-active');
            }
            if (tabName === 'header-tab-3') {
                document.getElementById('hurley').classList.add('is-active');
            }
            if (tabName === 'header-tab-4') {
                document.getElementById('spaceport').classList.add('is-active');
            }
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

    function getBackgroundImage(tabName) {
        const tab = document.querySelector(`.${tabName}`);
        return tab ? tab.getAttribute('data-image') : null;
    }

    // Tabs planet nav

    let tabPlanetNav = document.querySelectorAll('.planets__item'),
        tabContentPlanet = document.querySelectorAll('.tab-planet'),
        tabNamePlanet;

    tabPlanetNav.forEach(item => {
        item.addEventListener('click', selectNavPlanet)
    })

    function selectNavPlanet() {
        tabPlanetNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabNamePlanet = this.getAttribute('data-tab-name');
        selectTabPlanetContent(tabNamePlanet)
    }

    function selectTabPlanetContent(tabNamePlanet) {
        tabContentPlanet.forEach(item => {
            item.classList.contains(tabNamePlanet) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

    // Tabs participant nav

    let tabParticipantNav = document.querySelectorAll('.tab-participant__item'),
        tabContentParticipant = document.querySelectorAll('.tab-participant'),
        tabNameParticipant;

    tabParticipantNav.forEach(item => {
        item.addEventListener('click', selectNavParticipant)
    })

    function selectNavParticipant() {
        tabParticipantNav.forEach(item => {
            item.classList.remove('is-active', 'is-open');
        });
        this.classList.add('is-active');
        tabNameParticipant = this.getAttribute('data-tab-name');
        if (tabNameParticipant === 'participant-tab-1') {
            document.getElementById('part-1').classList.add('is-open');
        }
        if (tabNameParticipant === 'participant-tab-2') {
            document.getElementById('part-2').classList.add('is-open');
        }
        if (tabNameParticipant === 'participant-tab-3') {
            document.getElementById('part-3').classList.add('is-open');
        }
        if (tabNameParticipant === 'participant-tab-4') {
            document.getElementById('part-4').classList.add('is-open');
        }
        selectTabParticipantContent(tabNameParticipant)
    }

    function selectTabParticipantContent(tabNameParticipant) {
        tabContentParticipant.forEach(item => {
            item.classList.contains(tabNameParticipant) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }


    // Tabs technology nav

    let tabTechnologyNav = document.querySelectorAll('.tab-technology__item'),
        tabContentTechnology = document.querySelectorAll('.tab-technology'),
        tabNameTechnology;

    tabTechnologyNav.forEach(item => {
        item.addEventListener('click', selectNavTechnology)
    })

    function selectNavTechnology() {
        tabTechnologyNav.forEach(item => {
            item.classList.remove('is-open');
        });
        this.classList.add('is-open');
        tabNameTechnology = this.getAttribute('data-tab-name');
        if (tabNameTechnology === 'technology-tab-1') {
            document.getElementById('tech-1').classList.add('is-open');
        }
        if (tabNameTechnology === 'technology-tab-2') {
            document.getElementById('tech-2').classList.add('is-open');
        }
        if (tabNameTechnology === 'technology-tab-3') {
            document.getElementById('tech-3').classList.add('is-open');
        }
        selectTabTechnologyContent(tabNameTechnology)
    }

    function selectTabTechnologyContent(tabNameTechnology) {
        tabContentTechnology.forEach(item => {
            item.classList.contains(tabNameTechnology) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

    let soundButton = document.querySelector('.soundbutton');
    let audio = document.querySelector('.audio');

    soundButton.addEventListener('click', function () {
        soundButton.classList.toggle('paused');
        audio.paused ? audio.play() : audio.pause();

        // отключение музыки при уходе со страницы
        window.onfocus = function () {
            soundButton.classList.contains('paused') ? audio.pause() : audio.play();
        }

        window.onblur = function () {
            audio.pause()
        }

    })
})();
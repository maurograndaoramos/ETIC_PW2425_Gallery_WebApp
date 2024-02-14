export default class Carousel {
    constructor(sectionSelector, prevButtonSelector, nextButtonSelector, callback) {
        this.callback = callback;
        this.sections = document.querySelectorAll(sectionSelector);
        this.currentIndex = 0;
        this.initSections();
        this.prevButton = document.querySelector(prevButtonSelector);
        this.nextButton = document.querySelector(nextButtonSelector);
        this.addEventListeners();
    }

    initSections() {
        this.sections.forEach((section, index) => {
            section.classList.add(index === 0 ? 'visible' : 'hidden');
        });
    }

    navigateToNext = () => {
        this.callback()
        this.setVisibility(1)
    }
    
    navigateToPrev = () => {
        this.callback()
        this.setVisibility(-1)
    }
    
    addEventListeners() {
        this.nextButton.addEventListener('click', this.navigateToNext);
        this.prevButton.addEventListener('click', this.navigateToPrev);
    }
    
    setVisibility(navigate) {
        this.sections[this.currentIndex].classList.remove('visible')
        this.sections[this.currentIndex].classList.add('hidden')
        this.currentIndex = (this.currentIndex + (navigate) + this.sections.length) % this.sections.length;
        this.sections[this.currentIndex].classList.remove('hidden')
        this.sections[this.currentIndex].classList.add('visible')
    }
}

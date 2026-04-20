class Carousel {
    constructor(images, interval = 3000) {
        this.images = images;
        this.interval = interval;
        this.currentIndex = 0;
        this.timer = null;
        this.init();
    }

    init() {
        this.render();
        this.startAutoPlay();
        this.addEventListeners();
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('carousel-container');

        const imgElement = document.createElement('img');
        imgElement.src = this.images[this.currentIndex];
        imgElement.classList.add('carousel-image');
        container.appendChild(imgElement);

        // Add indicators
        const indicators = document.createElement('div');
        indicators.classList.add('indicators');
        this.images.forEach((image, index) => {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => this.goToImage(index));
            indicators.appendChild(indicator);
        });
        container.appendChild(indicators);

        // Add navigation buttons
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Prev';
        prevButton.addEventListener('click', () => this.prevImage());
        container.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', () => this.nextImage());
        container.appendChild(nextButton);

        document.body.appendChild(container);
        this.updateIndicators();
    }

    startAutoPlay() {
        this.timer = setInterval(() => {
            this.nextImage();
        }, this.interval);
    }

    stopAutoPlay() {
        clearInterval(this.timer);
    }

    goToImage(index) {
        this.currentIndex = index;
        this.render();
        this.updateIndicators();
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.render();
        this.updateIndicators();
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.render();
        this.updateIndicators();
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Usage example:
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const carousel = new Carousel(images);
class Galery {
    constructor(galery, block, pop_up, img_max, img_min) {
        this.galery = galery;
        this.block = block;
        this.pop_up = pop_up;
        this.img_max = img_max;
        this.img_min = img_min;

        this.init();
    }

    init() {
        this.loadSmallImages();
        //loadImages
    }

    createImages(data) {
        this.galery = document.querySelector(this.galery);
        let images = data;
        this.qty = images.lenght;
        //console.log(images);
        for (let image of images) {
            let img = new Image();
            img.src = image.scr;
            img.addEventListener('click', () => this.loadBigImages(image.number));
            this.galery.appendChild(img);
        }
    }

    loadSmallImages() {
        fetch(this.img_min)
            .then(res => {
                return res.json();
            })
            .then(dat => {
                this.createImages(dat);
            })
    }

    loadBigImages(number) {
        fetch(this.img_max)
            .then(res => {
                return res.json();
            })
            .then(dat => {
                this.openBigImage(dat, number);
            });
    }

    openBigImage(data, number) {
        let imageEl = this.galery.querySelectorAll('img');
        console.log(imageEl);
        imageEl = imageEl[number - 1];
        console.log(imageEl);
        imageEl.src = data[number - 1].scr;
        imageEl.style.height = '40%';
        imageEl.style.width = '40%';
    }
}
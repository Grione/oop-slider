window.onload = function () {
    class Slider {
        index = 0; 
        constructor({images, nextBtn, prevBtn, autoplay}) {
            this.images = document.querySelectorAll(images);
            this.nextBtn = document.querySelector(nextBtn);
            this.prevBtn = document.querySelector(prevBtn);
            this.images[0].classList.add('active');
            
            this.nextBtn.addEventListener( 'click', this.nextImage );
            this.prevBtn.addEventListener( 'click', this.prevImage );
            
            if(autoplay) {
                setInterval(this.nextImage, 2000);
            }
            
        }

        prevImage = ()=> {
            this.images[this.index].classList.remove('active');
            this.index--;
            
            if(this.index < 0) {
                this.index = this.images.length - 1;
            }
            
            this.images[this.index].classList.add('active');
        }
        
        nextImage = ()=> {
            this.images[this.index].classList.remove('active');
            this.index++;

            if(this.index >= this.images.length) {
                this.index = 0;
            }
            
            this.images[this.index].classList.add('active');
            
        }
        
        
    }
    
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    
    const nextBtn2 = document.querySelector('.slider-next2');
    const prevBtn2 = document.querySelector('.slider-prev2');
    
    new Slider({
        images: '.slider1 .slide',
        nextBtn: '.slider-next',
        prevBtn: '.slider-prev',
        autoplay: false
    });
    new Slider({
        images: '.slider2 .slide',
        nextBtn: '.slider-next2',
        prevBtn: '.slider-prev2',
        autoplay: true
    });
}


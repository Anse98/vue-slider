
//VUE

const { createApp } = Vue;

  createApp({
    data: function() {
      return {
        currentIndex: 0,

        images: [
          "img/01.webp",
          "img/02.webp",
          "img/03.webp",
          "img/04.webp",
          "img/05.webp"
        ],
        
        autoPlay:'',
      }
    },
    methods: {
      nextSlide(){
        this.currentIndex++;

        if(this.currentIndex === this.images.length) {
          this.currentIndex = 0;
        }
      },

      prevSlide(){
        this.currentIndex--;

        if(this.currentIndex < 0) {
          this.currentIndex = this.images.length - 1;
        }
      },

      changeThumbImg(index){
        this.currentIndex = index;
      },

      addClassActive(index){
        if(this.currentIndex === index) {
          return 'active';
        }
      }, 

      stopAutoPlay(){
        clearInterval(this.autoPlay);
      },

      restartAutoPlay(){
        this.autoPlay = setInterval(()=> {
          this.nextSlide();
        },2000)
      }
    },
    mounted() {
      this.restartAutoPlay();
    },
  }).mount('#app')

 

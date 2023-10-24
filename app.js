
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
    },
    mounted() {
      setInterval(()=> {
        this.nextSlide();
      },3000)
    },
  }).mount('#app')



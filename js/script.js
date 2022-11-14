const app = new Vue({
  el: "#root",
  data: {
    arrImages: [
      {
        image: "01.webp",
        title: "Marvel's Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
      },
      {
        image: "02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
      },
      {
        image: "03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      },
      {
        image: "04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
      },
      {
        image: "05.webp",
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
      },
    ],

    timeSlider: 1.5 * 1000,
    direction: 1,
    activeIndex: 0,
    idInterval: 0,
    isAutoplayActive: true,
  },
  methods: {
    moveSlide(direction) {
      if (direction > 0) {
        this.activeIndex++;
        if (this.activeIndex === this.arrImages.length) {
          this.activeIndex = 0;
        }
      } else {
        if (this.activeIndex === 0) {
          this.activeIndex = this.arrImages.length;
        }
        this.activeIndex--;
      }
    },

    startAutoplay() {
      this.idInterval = setInterval(
        () => this.moveSlide(this.direction),
        this.timeSlider
      );
    },

    stopAutoplay() {
      clearInterval(this.idInterval);
    },

    invertDirection() {
      this.direction *= -1; // 1  * -1 = -1; -1 * -1 = 1
    },

    restartHover() {
      if (this.isAutoplayActive) {
        this.startAutoplay();
      }
    },
  },
});

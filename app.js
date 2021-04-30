function bannerScrollEffect() {
      const text = document.querySelector('.banner-text');
      const wrapper = document.querySelector('.banner-wrapper');
      window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY >= 180) {
                  text.classList.add('h1-scrolled');
                  wrapper.classList.add('banner-scrolled');
            }
            if (window.scrollY < 180) {
                  text.classList.remove('h1-scrolled');
                  wrapper.classList.remove('banner-scrolled');
            }
      })
}
bannerScrollEffect();
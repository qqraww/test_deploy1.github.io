document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Button hover effect
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.classList.add('btn-hover');
    });
    button.addEventListener('mouseleave', function() {
      this.classList.remove('btn-hover');
    });
  });

  // Form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      
      const inputs = this.querySelectorAll('input[required]');
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        } else {
          input.classList.remove('error');
          
          // Email validation
          if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              input.classList.add('error');
              valid = false;
            }
          }
        }
      });
      
      if (valid) {
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'SENDING...';
        
        setTimeout(() => {
          this.reset();
          submitBtn.textContent = 'THANK YOU!';
          
          setTimeout(() => {
            submitBtn.textContent = 'SUBMIT FORM';
          }, 2000);
        }, 1500);
      }
    });
    
    // Clear error on input change
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('error');
      });
    });
  }

  // Настройки для Intersection Observer
  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // элемент появится когда 10% его будет видно
  };

  // Функция обработки появления элементов
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Отключаем наблюдение после появления
        observer.unobserve(entry.target);
      }
    });
  };

  // Создаем observer
  const observer = new IntersectionObserver(handleIntersect, options);

  // Находим все элементы с классом scroll-animation
  const animatedElements = document.querySelectorAll('.scroll-animation');
  
  // Начинаем наблюдение за каждым элементом
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Добавляем классы анимации к элементам
  const addAnimationClasses = () => {
    // Hero секция
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
      heroContent.classList.add('scroll-animation', 'fade-in-up');
    }

    // Features секция
    const features = document.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
      feature.classList.add('scroll-animation', 'fade-in-left');
      feature.style.animationDelay = `${index * 0.2}s`;
    });

    // Features divider секция
    const featuresDividerImages = document.querySelectorAll('.features-divider__image');
    featuresDividerImages.forEach(image => {
      observer.observe(image);
    });

    const featuresDividerList = document.querySelectorAll('.features-divider__list li');
    featuresDividerList.forEach(item => {
      observer.observe(item);
    });

    // Contact форма
    const contactForm = document.querySelector('.contact__form-bg');
    if (contactForm) {
      contactForm.classList.add('scroll-animation', 'zoom-in');
    }

    // Third block
    const thirdBlock = document.querySelector('.third-block__bg-flex');
    if (thirdBlock) {
      thirdBlock.classList.add('scroll-animation', 'fade-in-up');
    }

    // Character image
    const characterImage = document.querySelector('.third-block__img-person');
    if (characterImage) {
      observer.observe(characterImage);
    }

    // Form inputs
    const formInputs = document.querySelectorAll('.third-block__input');
    formInputs.forEach((input, index) => {
      input.classList.add('scroll-animation', 'fade-in-up');
      input.style.animationDelay = `${0.3 + index * 0.1}s`;
    });

    // Footer элементы
    const footerElements = document.querySelectorAll('.footer-main > *');
    footerElements.forEach((element, index) => {
      element.classList.add('scroll-animation', 'fade-in-up');
      element.style.animationDelay = `${index * 0.2}s`;
    });
  };

  // Вызываем функцию добавления классов
  addAnimationClasses();
}); 
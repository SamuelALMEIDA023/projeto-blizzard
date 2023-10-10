var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    1150: {
      direction: 'vertical'
    }
  }
});

const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumbnail
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionStart: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionEnd: function() {
        progressSlide.classList.add('animate');
      },
    }
});

  //Pegar o click dos filtros
  const allFilters = document.querySelectorAll('.js-nav-games li a');
  const tabPane = document.querySelectorAll('.tab-pane-games'); //Retornando um objeto


  allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
      event.preventDefault();

      //removendo classe active quando outra tiver ativa
      allFilters.forEach(item => {
        item.classList.remove('active');
      })
      
      tabPane.forEach(tab => {
        tab.classList.remove('active');
      })
      
      tabPane[index].classList.add('active'); //Retornando a posição
      filter.classList.add('active');
    })
  })
 
  //js do modal open e close
  const btnOpenModal = document.querySelector('.js-open-modal');
  const btnCloseModal = document.querySelector('.js-close-modal');

  btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal');
  })

  btnCloseModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');
  })

  //Pegando o click dos botoes no dropdown
  const btnMenu = document.querySelectorAll('.js-btn-menu');
  const menuSite = document.querySelectorAll('.js-menu');

  btnMenu.forEach((btn,index) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      //Função remover 
      menuSite.forEach(itemMenu => {
        itemMenu.classList.remove('active');
        itemMenu.addEventListener('mouseleave', () => {
          itemMenu.classList.remove('active');
          btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active')
          })
        })
      })

      btnMenu.forEach(itemBtn => {
        itemBtn.classList.remove('active')
      })
      
      //Usando a posição p/adicionar 
      btn.classList.add('active');
      menuSite[index].classList.add('active');
    })
  })

  // Menu Mobile
  const btnMobile = document.getElementById('js-btn-menu-mobile');
  const overlayMobile = document.querySelector('.js-overlay');

  function openMobile() {
    document.documentElement.classList.toggle('menu-opened');
  }

  btnMobile.addEventListener('click', openMobile);

  overlayMobile.addEventListener('click',openMobile);

  // Modal Mobile
  const btnOpenMobile = document.querySelector('.js-open-modal-mobile')

  console.log(btnOpenMobile)

  btnOpenMobile.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal')
  })


  const btnMenuMobile = document.querySelectorAll('.js-btn-menu-mobile');
  const menuSiteMobile = document.querySelectorAll('.js-menu-mobile');

  btnMenuMobile.forEach((btnMobile, index) => {
    btnMobile.addEventListener('click', (event) => {
      event.preventDefault();

      //Função remover
      menuSiteMobile.forEach(itemMenuMobile => {
        itemMenuMobile.classList.remove('active');
        itemMenuMobile.addEventListener('mouseleave', () => {
          itemMenuMobile.classList.remove('active');
        })
      })

      menuSiteMobile.forEach(itemBtnMobile => {
        itemBtnMobile.classList.remove('active');
      })

      //usando a posição p/adicionar
      btnMobile.classList.add('active')
      menuSiteMobile[index].classList.add('active');
    })
  })
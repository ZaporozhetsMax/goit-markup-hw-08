(() => {
    const refs = {
      openModalBtn: document.querySelector(".mob-menu-open"),
      closeModalBtn: document.querySelector(".mobile-menu__close"),
      menu: document.querySelector(".mobile-menu"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();
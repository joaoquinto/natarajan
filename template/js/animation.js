
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')


  function animaScrool() {
    const windowPercent = window.innerHeight * 0.6
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - windowPercent) < 0
      if (isSectionVisible) {
        section.classList.add('ativo')
      } else {
        section.classList.remove('ativo')
      }
    })

  }
  animaScrool()

  window.addEventListener('scroll', animaScrool)


}

initScrollAnimation()

const button = document.querySelector('.buttonToTop')

function initVisible() {
  function visible() {
    /* Valida se o scroll e maior ou igual */
    const validate = window.scrollY >= 500
    if (validate) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
  }
  /* propriedade que recebe a função quando a window tem scroll */
  window.onscroll = visible
}

initVisible()

function initUpButton() {
  function upAnimation() {
    const menu = document.querySelector('.menu')
    menu.scrollIntoView({
      behavior: "smooth"
    })
  }

  button.addEventListener('click', upAnimation)
}

initUpButton()

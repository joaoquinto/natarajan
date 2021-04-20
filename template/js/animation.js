
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
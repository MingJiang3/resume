//鼠标滚动时把顶部导航加sticky
window.addEventListener('scroll', function (scroll) {
    if (window.scrollY > 0) {
      topNavBar.classList.add('sticky')
    } else {
      topNavBar.classList.remove('sticky')
    }
  })
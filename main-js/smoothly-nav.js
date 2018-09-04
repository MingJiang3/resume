!function() {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    init: function(view){
      this.view = view
    }
  }

  var controller = function(view){
    //鼠标移到顶部导航，给li添加active
    let liTags = view.querySelectorAll('nav.menu > ul > li')
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
        // let brother = li.getElementsByTagName('ul')[0]
        // brother.classList.add('active')
      }
      liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
        // let brother = li.getElementsByTagName('ul')[0]
        // brother.classList.remove('active')
      }
    }
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].onclick = function (x) {
        x.preventDefault()        //浏览器阻止默认动作，不自动跳动页面
        let a = x.currentTarget
        let href = a.getAttribute('href')   //a.getAttribute('href')获取显示用户写的地址，浏览器不做处理
        let element = document.querySelector(href)
        let top = element.offsetTop
    
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = { y: currentTop };    //当前起始位置
        var t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)  // 起始位置
          .to({ y: targetTop }, t)       //结束位置，时间
          .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
          .onUpdate(function () {
            window.scrollTo(0, coords.y)     //如何更新界面
          })
          .start();
      }
    }
  }
  controller(view)
}.call()
 
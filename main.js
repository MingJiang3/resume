window.onscroll = function (scroll) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}
let aTags = document.getElementsByClassName('menuTigger')
//  console.log(aTags);
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onmouseenter = function () {
        console.log('onmouse')
    //     let a = x.currentTarget
    //     let brother = a.nextSibling
    //     while (brother.nodeType === 3) {
    //         brother = brother.nextSibling
    //     }
    //     console.log('brother')
    }
    aTags[i].onmouseleave = function () {
        console.log('onmouseleave')
    }
}
'use strict';
window.onload = function() {
    let range = document.querySelector('.range');
    let itemSlider1 = document.querySelector('.item-slide_1');
    let itemSlider2 = document.querySelector('.item-slide_2');
    let itemSlider3 = document.querySelector('.item-slide_3');



    range.oninput = function() {
        if (this.value < 25) {
            itemSlider1.classList.remove('transform-left');
            itemSlider2.classList.add('transform-right');
            itemSlider3.classList.add('transform-right');
        } else if (this.value > 25 && this.value < 75) {
            itemSlider1.classList.add('transform-left');
            itemSlider2.classList.remove('transform-right');
            itemSlider2.classList.remove('transform-left');
            itemSlider3.classList.add('transform-right');
        } else if (this.value > 75) {
            itemSlider1.classList.add('transform-left');
            itemSlider2.classList.add('transform-left');
            itemSlider3.classList.remove('transform-right');
        }
    }


    window.addEventListener('scroll', function() {
        let section = document.querySelectorAll('section');
        
        
        section.forEach(function(item, i){
            let top = item.getBoundingClientRect().top; 
            let bottom = top + parseFloat(getComputedStyle(item, null).height.replace("px", ""));
            let scroll = window.pageYOffset;
            let id = item.getAttribute('id');
            if (scroll > top && scroll < bottom) {
                let navLink = document.querySelectorAll('a[href="#'+id+'"]');
                let navLinkCurrent = document.querySelectorAll('.current-circle-link');
                
                for (let cur of navLinkCurrent) {
                    cur.classList.remove('current-circle-link');
                }
                for (let cur of navLink) {
                    cur.classList.add('current-circle-link');
                }
            }
        })
    })

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}
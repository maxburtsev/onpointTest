'use strict';
window.onload = function() {
    let range = document.querySelector('.range');
    let fill = document.querySelector('.fill');
    let itemSlider1 = document.querySelector('.item-slide_1');
    let itemSlider2 = document.querySelector('.item-slide_2');
    let itemSlider3 = document.querySelector('.item-slide_3');

    

    range.oninput = function() {
        function fillBar() {
            let widthFill = range.value + "%";
            fill.style.width = widthFill;
        }
        fillBar();
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
    
    
    
  
    let box1 = document.querySelector('.box1');
    let box2 = document.querySelector('.box2');
    let box3 = document.querySelector('.box3');
    let xDown,
        yDown;

    box1.addEventListener('touchstart', handleTouchStartBox1, false)
    box2.addEventListener('touchstart', handleTouchStartBox2, false)
    box3.addEventListener('touchstart', handleTouchStartBox3, false)
    
    box1.addEventListener('touchmove', handleTouchMoveBox1, false)
    box2.addEventListener('touchmove', handleTouchMoveBox2, false)
    box3.addEventListener('touchmove', handleTouchMoveBox3, false)

    let translates = document.querySelectorAll('.translate-y') ;
    function handleTouchStartBox1(event) {   
        let touch = event.touches[0];                                  
        xDown = touch.clientX;                                      
        yDown = touch.clientY;                                   
    };                
    function handleTouchStartBox2(event) {   
        let touch = event.touches[0];                                  
        xDown = touch.clientX;                                      
        yDown = touch.clientY;                                   
    }; 
    function handleTouchStartBox3(event) {   
        let touch = event.touches[0];                                  
        xDown = touch.clientX;                                      
        yDown = touch.clientY;                                    
    };                                 

    
    function handleTouchMoveBox1(event) {
        let touch = event.touches[0];
        let change = yDown - touch.clientY;
         
        if (change > 10) {        
            document.getElementById('box2').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            for (let translate of translates) {
                translate.style.transform = ('translateY(-200px)')
            }
        }   
        if(event.cancelable) {
            event.preventDefault();
        } 
    };
        
    function handleTouchMoveBox2(event) {
        let touch = event.touches[0];
        let change = yDown - touch.clientY;   
        if (change > 10 ) {        
            document.getElementById('box3').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
        }  else if (change < 80 ) {        
            document.getElementById('box1').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            for (let translate of translates) {
                translate.style.transform = ('translateY(0)')
            }
        } 
        if(event.cancelable) {
            event.preventDefault();
        }            
    };
     
    function handleTouchMoveBox3(event) {
        let touch = event.touches[0];
        let change = yDown - touch.clientY;
        let changeX = xDown - touch.clientX;
        if (Math.abs(changeX) < Math.abs(change)) {
            if (change < -50) {        
                document.getElementById('box2').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                
            }  
            if(event.cancelable) {
                event.preventDefault();
            }
        }  
         
                       
    };
    // let touch = event.changedTouches[0];
    // yDownEnd = touch.clientY;
    // xDownEnd = touch.clientX;
    
    // let yDiff = yDown - yDownEnd  ;
    // let xDiff =  xDown - xDownEnd ;
    

    // let isDown =  yDiff > changeDist ; 

    // console.log( yDiff, xDiff);
        
    // handler();
    
    // function handler() {
    //     let translates = document.querySelectorAll('translate-y');
    //     if (isDown) {
            
    //         /* up swipe */ 
    //         if (section.classList.contains('box1')) {
    //             for (let translate of translates) {
    //                 translate.style.transform = 'translateY(-100px)';
    //             }
    //             document.getElementById('box2').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         } else if (section.classList.contains('box2')) {
    //             document.getElementById('box3').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         }
    //     } else { 
    //         /* down swipe */
    //         if (section.classList.contains('box3')) {
    //             document.getElementById('box2').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         } else if (section.classList.contains('box2')) {
    //             for (let translate of translates) {
    //                 translate.style.transform = 'translateY(0)';
    //             }
    //             document.getElementById('box1').scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 }); 
    //         }
    //     }    
    // }           
    


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

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('.ibg-img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('.ibg-img').getAttribute('src') + ')';
        }
    }
}

ibg();

/*----------------------------------------------------------------------*/

let swiper1 = new Swiper('.block4-slider', {
    navigation: {
		nextEl: '.arrowRight',
		prevEl: '.arrowLeft'
	},
    pagination: {
		el: '.swiper-pagination1',
		clickable: true,
	},

    slidesPerView: 3,
    slidesPerGroup: 1,
    freeMode: true,
    simulateTouch: true,
    grabCursor: true,

    breakpoints: {

        0: {
            slidesPerView: 1,
        },
        767:{
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }

    },
});

let swiper2 = new Swiper('.block10-slider-container', {
    navigation: {
		nextEl: '.arrowRight2',
		prevEl: '.arrowLeft2'
	},
    pagination: {
		el: '.swiper-pagination2',
		clickable: true,
	},
    simulateTouch: true,
    grabCursor: true,
});

/*----------------------------------------------------------------------*/

document.querySelector('.block1-header-burger').addEventListener('click', (e) => {
   
   
   // document.querySelector('.block1-header-burger').classList.toggle('burger-active'); 
   
        if(document.querySelector('.block1-header-burger').classList.contains('burger-active') == false){
           document.querySelector('.block1-header-burger').classList.add('burger-active'); 
           document.querySelector('.block1-header-navs').classList.add('burger-active');
           document.querySelector('body').classList.add('body-overflow');
        } else{
            document.querySelector('.block1-header-burger').classList.remove('burger-active'); 
            document.querySelector('.block1-header-navs').classList.remove('burger-active');
            document.querySelector('body').classList.remove('body-overflow');
        }

})

/*----------------------------------------------------------------------*/

let block11SpoilerItem = document.querySelectorAll('.block11-spoiler-item');

block11SpoilerItem.forEach(spoiler => {
    spoiler.querySelector('.block11-spoiler-title').addEventListener('click', (e) => {
        let item = e.target;
        let thisBlock11SpoilerText = item.closest('.block11-spoiler-item').querySelector('.block11-spoiler-text');
        let thisBlockSpoilerPlus = item.closest('.block11-spoiler-item').querySelector('.block11-spoiler-titlePlus');
        if (thisBlock11SpoilerText.closest('.spoiler-active') && thisBlockSpoilerPlus.closest('.spoiler-active')){
            slideUp(thisBlock11SpoilerText);
            thisBlockSpoilerPlus.classList.remove('spoiler-active');
        } else{
            if (document.querySelector('.block11-spoiler').closest('.one')){
                for (let i = 0; i < block11SpoilerItem.length; i++){
                    block11SpoilerItem[i].querySelector('.block11-spoiler-titlePlus').classList.remove('spoiler-active');
                    slideUp( block11SpoilerItem[i].querySelector('.block11-spoiler-text'));
                }
                 slideDown(thisBlock11SpoilerText);
                 thisBlockSpoilerPlus.classList.add('spoiler-active');
            }     
        }
    })
})


function slideUp(target) {
    
    target.style.height = '0px';
    target.classList.remove('spoiler-active');
    
}

function slideDown(target) {
   
    target.style.height = target.scrollHeight + 'px';
    target.classList.add('spoiler-active');
}
/*---------------------------------------------------*/

document.querySelector('.block7-video-item').volume = '0.0';

document.querySelector('.block7-videoButton').addEventListener('click', () => {
    document.querySelector('.block7').classList.add('video-active');
    document.querySelector('.block7-container').classList.add('video-active');
    document.querySelector('.block7-video').classList.add('video-active');
    document.querySelector('.block7-video-item').play();
   // document.querySelector('.block7-video-item').removeAttribute(muted);
})

document.querySelector('.block7-video-close').addEventListener('click', ()=>{
    document.querySelector('.block7').classList.remove('video-active');
    document.querySelector('.block7-container').classList.remove('video-active');
    document.querySelector('.block7-video').classList.remove('video-active');
    setTimeout(function(){
        document.querySelector('.block7-video-item').currentTime = 0.0;
        document.querySelector('.block7-video-item').pause();
    }, 1000);
    
})

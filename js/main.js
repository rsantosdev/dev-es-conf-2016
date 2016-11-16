document.addEventListener('DOMContentLoaded', function(e){

  var select = function(s) {
    return document.querySelector(s);
  }

  var tl = new TimelineLite({delay: 1});

  if(window.screen.width <= 400){
    tl.add(TweenLite.to(select('.box-logo'), .5, {
      left: '20px',
      top: '28px',
      scale: 1,
      ease: Back.easeOut.config(1.7)
    }));
  } else {
    tl.add(TweenLite.to(select('.box-logo'), .5, {
      left: '120px',
      top: '48px',
      scale: 1,
      ease: Back.easeOut.config(1.7)
    }));
  }

  tl.add(TweenLite.from(select('.geometric-1'), .5, {
    left: '-1000px',
  }));
  tl.add(TweenLite.from(select('.info'), .2, {
    left: '-1000px',
  }));
  tl.add(TweenLite.from(select('.geometric-2'), .5, {
    right: '-1000px'
  }));
  tl.add(TweenLite.from(select('.box-logoconf'), 1.5, {
    ease: Elastic.easeOut.config(1, 0.3),
    scale: 3,
    opacity: 0,
    visibility: 'visible'
  }));
  tl.add(TweenLite.to(select('.btn'), .5, {
    opacity: 1
  }));






});

window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  if(this.scrollY > 800) {
    footer.classList.add('active');
  } else {
    footer.classList.remove('active');
  }
});

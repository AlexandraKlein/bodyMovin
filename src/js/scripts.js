var elementsArr = ['road'];
var $container = $('.bm_container');
var anim = [];

for(var i=0; i<elementsArr.length; i++){
  var params = {
    container: document.getElementById(elementsArr[i]),
    autoplay: false,
    loop: true,
    animationData: animations[elementsArr[i]],
    renderer: 'svg'
  };
  anim[elementsArr[i]] = bodymovin.loadAnimation(params);
  anim[elementsArr[i]].play();
}

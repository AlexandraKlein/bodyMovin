var elementsArr = ['ambulance','apple','atoms','bandaid','bicycle','bottle','cross','eye','female_doctor','female_nurse','male_doctor','male_nurse','dropper','heart','mobile','pills','stethoscope','syringe','thermometer','tubes'];
var $container = $('.bm_container');
var anim = [];

for(var i=0; i<elementsArr.length; i++){
  var params = {
    container: document.getElementById(elementsArr[i]),
    autoplay: false,
    loop: false,
    animationData: animations[elementsArr[i]],
    renderer: 'svg'
  };
  anim[elementsArr[i]] = bodymovin.loadAnimation(params);
  anim[elementsArr[i]].playSegments([0, 20], true);
}

$container.mouseenter(function(){
  anim[$(this).attr('id')].playSegments([20, 80], true);
});

$container.mouseleave(function(){
  var currAnim = anim[$(this).attr('id')]
  var curr = currAnim.currentRawFrame;
  currAnim.setDirection(-1);
  currAnim.goToAndPlay(curr, true);
});

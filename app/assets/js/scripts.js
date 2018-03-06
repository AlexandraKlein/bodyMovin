/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
var elementsArr = ['ambulance','apple','atoms','bandaid','bicycle','bottle','cross','eye','female_doctor','female_nurse','male_doctor','male_nurse','dropper','heart','mobile','pills','stethoscope','syringe','thermometer','tubes'];

var element, anim = [];

for(var i=0; i<elementsArr.length; i+=1){
  element = document.getElementById(elementsArr[i]);
  var params = {
    container: document.getElementById(elementsArr[i]),
    autoplay:false,
    loop:false,
    animationData:animations[elementsArr[i]],
    renderer:'svg'
  };
  anim[elementsArr[i]] = bodymovin.loadAnimation(params);
}


$('.bm_container').mouseenter(function(){
  anim[$(this).attr('id')].play();
});

$('.bm_container').mouseleave(function(){
  anim[$(this).attr('id')].goToAndStop(0);
});

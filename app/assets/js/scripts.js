/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
var animData = {
  container: document.getElementById('test'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animations.road
};
var anim = bodymovin.loadAnimation(animData);

anim.play();

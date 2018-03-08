var animData = {
  container: document.getElementById('test'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animations.road
};
var anim = bodymovin.loadAnimation(animData);

anim.play();

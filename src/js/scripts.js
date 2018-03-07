var animData = {
  container: document.getElementById('test'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'bodymovin/data.json'
};
var anim = bodymovin.loadAnimation(animData);

anim.play();

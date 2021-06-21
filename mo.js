const burst = new mojs.Burst();

document.addEventListener( 'click', function (e) {
  burst.replay();
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
});

var font = new FontFaceObserver('opensans-regular', {
  weight: 'normal'
});

font.load().then(function () {
  document.documentElement.className += " fonts-loaded";
}, function () {
  console.log('Font is not available');
});
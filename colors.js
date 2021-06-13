var Link = {
  setColor: function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i = i + 1;
  // }
  $('a').css('color', color);
 }
}
var Body = {
  setColor: function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function darkMode(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';

    Link.setColor('white');
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';

    Link.setColor('black');
  }
 }

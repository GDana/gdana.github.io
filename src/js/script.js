$(document).ready(function(){
 
  function itemSearch(){
    var target = $(event.target);
    var targetClass = target[0].classList[target[0].classList.length-1]
    var keyword = ['item01', 'item02', 'item03', 'item04']
    var popup = ['.popup-item01', '.popup-item02', '.popup-item03', '.popup-item04']

   var popupItem;
   
   for(let i = 0; i < 4; i++){
      if(targetClass === keyword[i]){
        console.log(targetClass)
        console.log(popup[i])

        popupItem = popup[i];
        $(popupItem).show()
      }
    }
  }

  function itemSearchOut(){
    var target = $(event.target);
    // console.log(target.children()[0])
    for(let i = 0; i < 4; i++){
      if($(target.children()[i]).css("display") == "block"){
        $(target.children()[i]).hide()
      }
    }
  }

  $('.img').on('click', function(){
    if($(".area-popup").css("display") == "none"){
      $(".area-popup").show()
      itemSearch()
    }
  })

  $('.area-popup').on('click', function(){
    if($(".area-popup").css("display") == "block"){
      $(".area-popup").hide()
      itemSearchOut()
    }
  })

});


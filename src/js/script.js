$(document).ready(function(){

  // 레이어 팝업 오픈
  function openPopup(){
    var target = $(event.target);
    var targetClass = target[0].classList[target[0].classList.length-1]
    var keyword = ['item01', 'item02', 'item03', 'item04']
    var popup = ['.popup-item01', '.popup-item02', '.popup-item03', '.popup-item04']

   var popupItem;
   
   for(let i = 0; i < 5; i++){
      if(targetClass === keyword[i]){
        console.log(targetClass)
        console.log(popup[i])

        popupItem = popup[i];
        $(popupItem).show()
      }
    }
  }

  // 레이어 팝업 클로즈
  function closePopup(){
    var target = $(event.target);

    for(let i = 0; i < 5; i++){

      if($(target.parent().children()[i]).css("display") == "block"){
        $(target.parent().children()[i]).hide()
      }
    }
  }

  // 이벤트 발생
  $('.img').on('click', function(){
    if($(".area-popup").css("display") == "none"){
      $(".area-popup").show()
      $(".closeBtn").show()
      openPopup()
    }
  })

  $('.closeBtn').on('click', function(){
    if($(".area-popup").css("display") == "block"){
      $(".area-popup").hide()
      closePopup()
    }
  })

});


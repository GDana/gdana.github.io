/* 


	slidePopup.js 
	가져온 라이브러리 + 소스 보강(레이어 팝업 기능구현)


*/


var pos = 0;
var totalSlides = $('.inArea-slide ul li').length;
var sliderWidth = $('.inArea-slide').width();


$(document).ready(function(){
	
	/*************** 레이어 팝업 ***************/

	// 레이어 팝업 오픈
	function openPopup(){
    var target = $(event.target);
    var targetClass = target[0].classList[target[0].classList.length-1]
    var keyword = ['item01', 'item02', 'item03', 'item04']
    var slide = ['.slide-item01', '.slide-item02', '.slide-item03', '.slide-item04']

   var slideItem;
   
   for(let i = 0; i < 5; i++){
      if(targetClass === keyword[i]){
        console.log(slide[i])

        slideItem = slide[i];
        $(slideItem).show()
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
	

	
	/*************** 슬라이드 ***************/

	function slideLeft(){
		pos--;
		if(pos==-1){ pos = totalSlides-1; }
		$('.inArea-slide ul.slider').css('left', -(sliderWidth*pos)); 	
		
		//*> optional
		// countSlides();
		pagination();
	}
	
	function slideRight(){
		pos++;
		if(pos==totalSlides){ pos = 0; }
		$('.inArea-slide ul.slider').css('left', -(sliderWidth*pos)); 
		
		//*> optional 
		// countSlides();
		pagination();
	}
	
	function countSlides(){
		$('.counter').html(pos+1 + ' / ' + totalSlides);
	}
	
	function pagination(){
		$('.pagination-wrap ul li').removeClass('active');
		$('.pagination-wrap ul li:eq('+pos+')').addClass('active');
	}
			

	$('.inArea-slide ul.slider').width(sliderWidth*totalSlides);
	
	$('.next').click(function(){
		console.log()
		slideRight();
	});
	
	$('.previous').click(function(){
		slideLeft();
	});
	
	$.each($('.inArea-slide ul li'), function(){ 
	   var li = document.createElement('li');
	   $('.pagination-wrap ul').append(li);	   
	});
	
	//counter
	// countSlides();
	
	//pagination
	// pagination();
	
	$('.inArea-slide').hover(
	  function(){ 
			$(this).addClass('active'); 
			// clearInterval(autoSlider); 
		}, 
	  function(){ 
			$(this).removeClass('active'); 
			// autoSlider = setInterval(slideRight, 3000); 
		}
	);
});
	


/* 


	scroll.js 
	가져온 라이브러리 + 소스 보강('.fixed' 관련)


*/


(function(global, $){
    var $menu     = $('nav ul li.m')
    var $contents = $('.scroll')
    var $doc      = $('html, body')
    
    $(function(){
      $menu.on('click','a', function(e){
        var $target = $(this).parent()
        var idx     = $target.index()
        var section = $contents.eq(idx)
        var offsetTop = section.offset().top
        
        $doc.stop().animate({
            scrollTop : offsetTop
        }, 800);
  
        return false;
        });
    });
  
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        var inner = $('.area-contents').offset().top
        var nav = $('nav')
        var areaNavi = $('.area-navi')
    
        /* 
            1. 스크롤이 발생했을 때 좌표가 .inner 좌표에 왔다면 
            2. nav 에 'position:fixed'로 변경
            3. 그렇지 않을 때
            4. 'position:absolute'로 변경
        */
        if(inner <= scltop){
          areaNavi.addClass('fixed')
        }
        else if(inner >= scltop){
          areaNavi.removeClass('fixed')
    }
  
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx)
            var i         = $target.index()
            var targetTop = $target.offset().top
    
            if(targetTop <= scltop){
                $menu.removeClass('on, font-bold')
                $menu.eq(idx).addClass('on, font-bold')
            }
            if(!(200 <= scltop)){
                $menu.removeClass('on, font-bold')
            }
        })
    
    });
  
  // var btnTop = $('.btn-top');
  // btnTop.on('click','a', function(e){
  //     e.preventDefault();
  //     $doc.stop()
  //             .animate({
  //                 scrollTop : 0
  //             },800)
  // });
  
  }(window, window.jQuery));
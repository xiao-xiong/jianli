$(function(){
    //$(".nav_con ul").hover(function(){
     //       $(this).find(".show").css("border-bottom","3px solid rgba(0,0,0,0)");
	//		 $(this).find(".show").css("color","#333333");
   // },function(){
    //        $(this).find(".show").css("border-bottom","3px solid #3dca99");
	//		$(this).find(".show").css("color","#51cea1");
      //      $(".nav_bottom").stop(true).animate({"left":"0","width":"0"});
	//					
    //});

    //$(".nav_con ul li").hover(function(){
     //   var jianzhi=$(".nav_con ul li:first").offset().left;
     //   $(".nav_bottom").stop(true).animate({"width":$(this).width(),"left":$(this).offset().left-jianzhi});
	//	$(this).css("color","#51cea1");
    //});

	 //$(".nav_con ul li").mouseleave(function(){
	//	$(this).css("color","#333333");
    //});


	//ÏîÄ¿ÇÐ»»
	$(".qiehuan ul li").click(function(){
		$(".qiehuan ul li").removeClass("show").addClass("noshow");
		$(this).removeClass("noshow").addClass("show");
		
		if($(this).attr("attr_id") == "li1"){
			$(".xiangmu").show();
		}
		if($(this).attr("attr_id") == "li2"){
			$(".xiangmu").hide();
			$(".type01").show();
		}
		if($(this).attr("attr_id") == "li3"){
			$(".xiangmu").hide();
			$(".type02").show();
		}
		if($(this).attr("attr_id") == "li4"){
			$(".xiangmu").hide();
			$(".type03").show();
		}
		if($(this).attr("attr_id") == "li5"){
			$(".xiangmu").hide();
			$(".type04").show();
		}
		
	});

	$(".tu-2").hover(function(){
		if($(".erweima").css("display") == 'none'){
			$(".erweima").fadeIn();
		}else{
			$(".erweima").fadeOut();
		}
	});

	$(".im .img1").hover(function(){
		if($(".erweima2").css("display") == 'none'){
			$(".erweima2").fadeIn();
		}else{
			$(".erweima2").fadeOut();
		}
	});

	
	 
	
});

function dibu2(){
	var h=$(document).height();
	$("html,body").animate({scrollTop: h},"slow");
}

$(".bt img").click(function(){
	if($(".bt img").attr("src")=="../img/tubiao.png"){
		$(".bt img").attr("src","../img/tubiao2.png");
	 	$(".b2").slideDown();	
	 }
	else{
		$(".bt img").attr("src","../img/tubiao.png");
		$(".b2").slideUp();
	}
	 });
	 
	 
	 
	  $(".b4-2").click(function(){
	    $(".b2").slideToggle();
	 });
	 
	 
	  $(".b4-1").click(function(){
	    $(".b2").slideToggle();
	 });
	 
	 
$(".bt22 img").click(function(){
	 	$(".b2a").slideDown();
	 	$(".b2").hide();
	 	$(".b2b").hide();
	 	$(".b2c").hide();
	 	$(".b2d").hide();
	 	$(".b2e").hide();

	 });
	 
$(".bt33 img").click(function(){
	 	$(".b2b").slideDown();
	 	$(".b2c").hide();
	 	$(".b2").hide();
	 	$(".b2a").hide();
	 	$(".b2d").hide();
	 	$(".b2e").hide();
	 	$(".bt33 img").attr("src","../img/tubiao2.png");
	 });
	 
$(".bt44 img").click(function(){
	 	$(".b2c").slideDown();
	 	$(".b2").hide();
	 	$(".b2b").hide();
	 	$(".b2a").hide();
	 	$(".b2d").hide();
	 	$(".b2e").hide();
	 	$(".bt44 img").attr("src","../img/tubiao2.png");
	 });
	 

$(".bt55 img").click(function(){
	 	$(".b2e").slideDown();
	 	$(".b2").hide();
	 	$(".b2b").hide();
	 	$(".b2a").hide();
	 	$(".b2d").hide();
	 	$(".b2c").hide();
	 	$(".bt55 img").attr("src","../img/tubiao2.png");
	 });
	 

$(".bt66 img").click(function(){
	 	$(".b2e").slideDown();
	 	$(".b2").hide();
	 	$(".b2b").hide();
	 	$(".b2a").hide();
	 	$(".b2d").hide();
	 	$(".b2c").hide();
	 	$(".bt66 img").attr("src","../img/tubiao2.png");
	 });
	 



$("#tubiao1").click(function(){
	if($("#tubiao1").attr("src")=="../img/tubiao1.png"){
		 $("#tubiao1").attr("src","../img/1.png");
	 	$(".bb").animate({width:"90px",marginright:"0.6in"});
	 	$(".b4").animate({width:"90px",marginright:"0.6in"})
	 	$("#bt2").animate({width:"60px",marginright:"0.6in"})
	 	$(".b4-2").hide();
	 	$(".bt img").hide();
	 	$(".b4-2").hide();
	 	$(".bt img").hide();
	 	$(".ba1").hide();
	 	$(".bt22 img").hide();
	 	$(".bb2").hide();
	 	$(".bt33 img").hide();
	 	$(".bb3").hide();
	 	$(".bt44 img").hide();
	 	$(".bb4").hide();
	 	$(".bt55 img").hide();
	 	$(".bb5").hide();
	 	$(".bt66 img").hide();
	 }
	else{
		$("#tubiao1").attr("src","../img/tubiao1.png");
		$(".bb").animate({width:"180px",marginright:"0.6in"});
	 	$(".b4").animate({width:"180px",marginright:"0.6in"})
	 	$("#bt2").animate({width:"120px",marginright:"0.6in"})
	 	$(".b4-2").show()
	 	$(".bt img").show()
	 	$(".b4-2").show()
	 	$(".bt img").show()
	 	$(".ba1").show()
	 	$(".bt22 img").show()
	 	$(".bb2").show()
	 	$(".bt33 img").show()
	 	$(".bb3").show()
	 	$(".bt44 img").show()
	 	$(".bb4").show()
	 	$(".bt55 img").show()
	 	$(".bb5").show()
	 	$(".bt66 img").show()
	}
	 
	 });
	 



$(".icon_1").hover(
		 	function(){
		 	$(".icon_1").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_1").css({"background":"white"});
		 	
		 	}
		);

$(".icon_2").hover(
		 	function(){
		 	$(".icon_2").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_2").css({"background":"white"});
		 	
		 	}
		);


$(".icon_3").hover(
		 	function(){
		 	$(".icon_3").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_3").css({"background":"white"});
		 	
		 	}
		);


$(".icon_4").hover(
		 	function(){
		 	$(".icon_4").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_4").css({"background":"white"});
		 	
		 	}
		);


$(".icon_5").hover(
		 	function(){
		 	$(".icon_5").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_5").css({"background":"white"});
		 	
		 	}
		);


$(".icon_6").hover(
		 	function(){
		 	$(".icon_6").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_6").css({"background":"white"});
		 	
		 	}
		);


$(".icon_7").hover(
		 	function(){
		 	$(".icon_7").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_7").css({"background":"white"});
		 	
		 	}
		);


$(".icon_8").hover(
		 	function(){
		 	$(".icon_8").css({"background":"darkgray"});	
		 	
		 	},
		 	function(){
		 	$(".icon_8").css({"background":"white"});
		 	
		 	}
		);
		
		
		
//		$(".c4-1").hover(
//		 	function(){
//		 	$(".c4-1").css({"background":"darkgray"});	
//		 	
//		 	},
//		 	function(){
//		 	$(".c4-1").css({"background":"white"});
//		 	
//		 	}
//		);
//		
//		
//		$(".c4-2").hover(
//		 	function(){
//		 	$(".c4-2").css({"background":"darkgray"});	
//		 	
//		 	},
//		 	function(){
//		 	$(".c4-2").css({"background":"white"});
//		 	
//		 	}
//		);
//		
//		$(".c4-3").hover(
//		 	function(){
//		 	$(".c4-3").css({"background":"darkgray"});	
//		 	
//		 	},
//		 	function(){
//		 	$(".c4-3").css({"background":"white"});
//		 	$(".cc1").css("border-bottom","1px solid #e1e3e6");
//		 	}
//		);


//$(".c4-4").hover(
//		 	function(){
//		 	$(".c4-4").css({"background":"darkgray"});	
//		 	
//		 	},
//		 	function(){
//		 	$(".c4-4").css({"background":"white"});
//		 	
//		 	}
//		);








//append引入iframe
//
//$(".b2-1").click(function(){
//	 	$("#f").html("<iframe id='f1' src='智能记账-iframe.html' height='1000px' width='107.3%' scrolling='no' frameborder='0' style=''></iframe>")
//	 	$("#f2").remove();
//	 	$("#f3").remove();
//	 	$("#f4").remove();
//	 	$("#f1").css("display","block");
//	 });
//	 
//	 
//	 $(".b2-2").click(function(){
//	 	$("#f").html("<iframe id='f3' src='新增凭证.html' height='600px' width='108%' scrolling='no' frameborder='0' style=''></iframe>")
//	 	$("#f1").remove();
//	 	$("#f2").remove();
//	 	$("#f4").remove();
//	 	$("#f3").css("display","block");
//	 });
//	 
//	 
//	 
//	 $(".b2-3").click(function(){
//	 	$("#f").html("<iframe id='f4' src='../开票数据导入.html' height='600px' width='108%' scrolling='no' frameborder='0' style=''></iframe>")
//	 	$("#f1").remove();
//	 	$("#f2").remove();
//	 	$("#f3").remove();
//	 	$("#f4").css("display","block");
//	 });
//	 
//	 
//	 
//	 $(".b2-5").click(function(){
//	 	$("#f").html("<iframe id='f2' src='../凭证查询.html' height='600px' width='108%' scrolling='no' frameborder='0' style=''></iframe>")
//	 	$("#f1").remove();
//	 	$("#f3").remove();
//	 	$("#f4").remove();
//	 	$("#f2").css("display","block");
//	 });
	 
	 
	 
	 
	 


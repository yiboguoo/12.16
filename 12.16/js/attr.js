//	 att改变src属性

	 $(".b2-1").click(function(){
	 	$("#g").attr("src","智能记账-iframe.html");
	 	$(".daohang1").addClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
	 
	 
 $(".b2-2").click(function(){
	 	$("#g").attr("src","新增凭证.html");
	 	$(".daohang2").addClass("active");
	 	$(".daohang1").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
	 

$(".b2-3").click(function(){
	 	$("#g").attr("src","../开票数据导入.html");
	 	$(".daohang3").addClass("active");
	    $(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
	 

$(".b2-4").click(function(){
	 	$("#g").attr("src","../数据导入采集.html");
	 	$(".daohang4").addClass("active");
	    $(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang5").removeClass("active");
	
	 });
	 

$(".b2-5").click(function(){
	 	$("#g").attr("src","../凭证查询.html");
	 	$(".daohang5").addClass("active");
	 	$(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	
	 });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

	 
	 
	 
	 
	
    $(".b2-1").one("click", function(){
    $(".daohang").append("<li role='presentation' class='active daohang1'><a href='#'>智能记账</a></li>");
    $(".daohang1 a").click(function(){
	 	$("#g").attr("src","智能记账-iframe.html");
	 	$(".daohang1").addClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
     });
  
  
  
$(".b2-2").one("click", function () {
    $(".daohang").append("<li role='presentation' class='active daohang2'><a href='javascript:void(0)'>新增凭证</a></li>")
    $(".daohang2 a").click(function(){
	 	$("#g").attr("src","新增凭证.html");
	 	$(".daohang2").addClass("active");
	 	$(".daohang1").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
     });



$(".b2-3").one("click", function () {
     $(".daohang").append("<li role='presentation' class='active daohang3'><a href='javascript:void(0)'>开票数据导入</a></li>");	
$(".daohang3 a").click(function(){
	 	$("#g").attr("src","../开票数据导入.html");
	 	$(".daohang3").addClass("active");
	    $(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
     });



$(".b2-4").one("click", function () {
    $(".daohang").append("<li role='presentation' class='active daohang4'><a href='javascript:void(0)'>数据导入采集</a></li>");	
    $(".daohang4 a").click(function(){
	 	$("#g").attr("src","../数据导入采集.html");
	 	$(".daohang4").addClass("active");
	    $(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang5").removeClass("active");
	 });
     });


$(".b2-5").one("click", function () {
   $(".daohang").append("<li role='presentation' class='active daohang5''><a href='javascript:void(0)'>凭证查询</a></li>");
   $(".daohang5 a").click(function(){
	 	$("#g").attr("src","../凭证查询.html");
	 	$(".daohang5").addClass("active");
	 	$(".daohang1").removeClass("active");
	 	$(".daohang2").removeClass("active");
	 	$(".daohang3").removeClass("active");
	 	$(".daohang4").removeClass("active");
	 });
     });

/*
	描述：实现首页图片滑动效果,语言栏点击下拉框效果
	作者：李大龙





	日期：2012-03-16
	需求：jQuery 1.2.6 或以后版本





	版本：1.0
	版权：中软国际





*/
var t = n = count = 0;
$(document).ready(function()
{
	
	//$(window).resize(function() {
//		if (jQuery.initFormat)
//			jQuery.initFormat();
//	});
//	
//	
	/********自动播放效果 开始  ********/
	$("#bannerUl").show();
	count = $("#bannerUl li").size();
	
	// 设置li 鼠标效果，包括鼠标进入和移除
	$("#bannerUl li").mouseover(function()
	 {
		 jQuery.initFormat();		// 重新初始化宽度





		 
		 var i = $("#bannerUl li").index(this);
		
		 n= i ;
		 if(i>count) return ;		// 判断如果li中的个数查过了 img的数量 直接退出





		 
		 var bannerli = $(this);
		  banner_timeout = setTimeout(function()
			{
				$("#bannerImg a").filter(":visible").fadeOut(600);	
				$("#bannerImg a").filter(":visible").parent().children().eq(i).fadeIn(1000);		
				bannerli.css("backgroundColor","#004ea3").siblings().css("backgroundColor","#fff");
				//var bkcolor=bannerli.css("backgroundColor","#004ea3").siblings().css("backgroundColor","#fff").attr("bkcolor");
			//	$("#middle_wrap").css("backgroundColor",bkcolor);
			},200);
		  
	 });
	
	$("#bannerUl li").mouseout(function(){clearTimeout(banner_timeout);	});
	// 设置鼠标点击效果
	$("#bannerUl li").click(function()
	{
		jQuery.initFormat();		// 重新初始化宽度





		
		
		var i = $("#bannerUl li").index(this);
		n = i;

		if (i >= count) return;
		
		// var bkcolor =$(this).attr("bkcolor");
		$("#bannerImg a").filter(":visible").fadeOut(600);		
		//$("#middle_wrap").css("backgroundColor",bkcolor);
		$("#bannerImg a").filter(":visible").parent().children().eq(i).fadeIn(1000);		
		
		$(this).css("backgroundColor","#004ea3").siblings().css("backgroundColor","#fff");
	});
	
	// 设置自动播放效果
	t = setInterval("showAuto()",10000);
	$("#bannerImg").hover(function() { clearInterval(t) }, function() { t = setInterval("showAuto()", 20000); });	
	$("#bannerUl ul li").hover(function() { clearInterval(t) }, function() { t = setInterval("showAuto()", 20000); });
	
	/*********** 自动播放效果 结束 *****************/
	
	/***********  实现 语言栏显示效果 开始 ***************/
	$("#language").hover(function(){
		$(this).addClass("nav_narrow_up").removeClass("nav_narrow_down");
		$(this).find(".ul_select_lan").show();
	},
	function(){
	 $(this).addClass("nav_narrow_down").removeClass("nav_narrow_up");
	 $(this).find(".ul_select_lan").hide();
	});
	
	$("div.ul_select_lan >ul>li").hover(function(event)
	{
		$(this).addClass("li_on_fouces");												
	},
	function(event){
		$(this).removeClass("li_on_fouces");											
	});
	
	/************  语言栏显示效果 结束  *************/
});


/***********  自动播放 图片切换 ***************/
function showAuto()
{
	n = n >= (count - 1) ? 0 : n + 1;
	$("#bannerUl li").eq(n).trigger('click');
}


/**************    计算图片相关的宽度和偏移 开始 ***************/
 jQuery.initFormat = function() {
	 $("div #silder_img").css({ width: "980px" }); 
           // var dWdth = $(document).width();
		
		   var dWdth = $(document.body).width();
		   
            if (dWdth < 980) dWdth = 980;
			
			 
            var maxWidht = 1920;
            var dleft = (dWdth - maxWidht) / 2;
			
		 //	dWdth-=21; // 浏览器垂直滚动条宽度
           // dleft -=21;
			var wdpx = dWdth + "px";  
			var dleftpx=dleft +"px";
		// alert(dWdth +"   " +wdpx); 
		 	$("#bannerImg").css({ width: wdpx });
        /*    $("#bannerImg").css({ width: wdpx }); */
            $("#bannerImg a img").css({ left: dleftpx});
				$("div #silder_img").css({ width: wdpx }); 
};
        
/**************    计算图片相关的宽度和偏移 结束 ***************/
/****************  导航菜单 开始 *************************/
$(document).ready(function() {

	var menuHide = false;
	var currSelected = "";
	$(".mainnav ul li").hover(function() {
		var tmpSelected = $(this).find("a").attr("name");

		if (currSelected.toLowerCase() == tmpSelected.toLowerCase()) {
			if (menuHide) clearTimeout(menuHide);
		}

		//Nal = $(this).find("a").css({ "color": "#004ea2", "backgroundImage": "url(images/huadong_bg.jpg)", "background-repeat": "repeat-x" });
		Nal = $(this).find("a").addClass("onselected");
		$(Nal.attr("name")).parent().show();
		currSelected = tmpSelected;

	},
	function() {
		menuHide = setTimeout(function() {
			$(Nal.attr("name")).parent().hide();

		}, 100); //"backgroundColor": "#004ea2",
		
		//var Nal = $(this).find("a").css({ "color": "#FFF",  "backgroundImage": "none" });
		var Nal = $(this).find("a").removeClass("onselected");
	});
	$(".submenu .submenubg").hover(function() {
		if (menuHide) clearTimeout(menuHide);

		var href = $(this).attr("id");             

		var Nal = $(".mainnav ul li a[name=#" + href + "]");
		//Nal.css({ "color": "#004ea2", "backgroundImage": "url(images/huadong_bg.jpg)", "background-repeat": "repeat-x" });
		Nal.addClass("onselected");
	},
	function() {
		var Nav = $(this);
		menuHide = setTimeout(function() {
			Nav.parent().hide();
		}, 100);
		var href = Nav.attr("id");			 
		var Nal = $(".mainnav ul li a[name=#" + href + "]");
		//"backgroundColor": "#004ea2",
		//Nal.css({ "color": "#FFF",  "backgroundImage": "none" });
		Nal.removeClass("onselected");
	});

});

/****************  导航菜单结束 ************************/

/****************  全文搜索 开始 ************************/
function allSearch(){
    var search = document.getElementById("search").value;
	if (search != "" && search!='搜索') {
		window.location.href="http://www.chinasofti.com/superWebCMS/pages/sites/MainSite/html/zh/js/allSearch.jsp?content="+encodeURI(search);
		//window.open("allSearch.jsp?content="+encodeURI(search));
	}else{
		alert("我顶你个肺的关键字！");
	}	   
   }
  
  //搜索效果
$(document).ready(function(){
  $("#search").focus(function(){
   if($("#search").val()=='搜索'){
   $("#search").val("")};
  }).blur(function(){
   if($("#search").val()==''){
   $("#search").val("搜索").css("color","#85adcd")};
  });
 }); 

//function clsVlaue(){ 
//  with(event.srcElement) 
//	//如果当前值为默认值，则清空 
//	if(value==defaultValue) value=""; 
//} 
//
//function retValue(){ 
//  with(event.srcElement) 
//	//如果当前值为默认值，则清空 
//	if(value=="") value="搜索"; 
//} 
/******************  全文搜索 结束*************************/

// 初始化窗体大小





   function Windonload(){
	
	jQuery.initFormat();
	$(window).resize(function() {
		if (jQuery.initFormat)
			jQuery.initFormat();
	});
	
};

/******************************************************/

/******************************************************/
// 统计函数
function countInfo(structId){
		//var structId = 2404;
		//alert(structId);
		var dealUrl ="/superWebCMS/systemmanage/statistics/updateStat";
		 	$.post(
		 		dealUrl,
		 		{structId:structId}
		 	);
}
/*****************************************************/
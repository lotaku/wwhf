/*
	描述：语言栏点击下拉框效果,和导航菜单

	作者：李大龙

	日期：2012-03-16
	需求：jQuery 1.2.6 或以后版本

	版本：1.0
	版权：中软国际


*/
$(document).ready(function()
{	
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
 

	/************  导航菜单 开始       *************/
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


/**************    计算图片相关的宽度和偏移 开始 ***************/
 jQuery.initFormat = function() {
			$("div #silder_img").css({ width: "980px" }); 
           
		   var dWdth = $(document.body).width();
            if (dWdth < 980) dWdth = 980;
			
			 
            var maxWidht = 1920;
            var dleft = (dWdth - maxWidht) / 2;
			
		 
         //   dleft -=21;
			var wdpx = dWdth + "px";  
			var dleftpx=dleft +"px";
		 
		 	$("#bannerImg").css({ width: wdpx });
        /*    $("#bannerImg").css({ width: wdpx }); */
            $("#bannerImg img").css({ left: dleftpx});
				$("div #silder_img").css({ width: wdpx }); 
};
        
/**************    计算图片相关的宽度和偏移 结束 ***************/

/**************    左侧菜单效果  开始    *********************/

$(document).ready(function(){
               
        $("http://www.chinasofti.com/superWebCMS/pages/sites/MainSite/html/zh/emerging-services/js/li.iner").each(function () {
                                         
        $(this).mouseover(function () {
            var Navli = $(this);
            
            Navli.find("ul.menu_next").show();
            //Navli.find("ul.menu_next").addClass("display","block");
            
            $(this).hover(
                          function () {},
                          function () {					
                                   
								    $(this).find("ul.menu_next").hide();								  
                                    //  $(this).find("a").removeClass("cur");
                });
            });
        }); 
		
		$("http://www.chinasofti.com/superWebCMS/pages/sites/MainSite/html/zh/emerging-services/js/.menu_next li.iner").each(function () {
                                         
        $(this).mouseover(function () {
            var Navli = $(this);
            
            Navli.find("ul.menu_next_sub").show();
            //Navli.find("ul.menu_next").addClass("display","block");
            
            $(this).hover(
                          function () {},
                          function () {					
                                   
								    $(this).find("ul.menu_next_sub").hide();								  
                                    //  $(this).find("a").removeClass("cur");
                });
            });
        }); 
    });

/**************  左侧菜单效果 结束     ************************/

/****************  全文搜索 开始 ************************/
function allSearch(){
    var search = document.getElementById("search").value;
	if (search != "" && search!='搜索') {
		window.location.href="../../allSearch.jsp-content=.htm"/*tpa=http://www.chinasofti.com/superWebCMS/pages/sites/MainSite/html/zh/allSearch.jsp?content=*/+encodeURI(search);
		//window.open("allSearch.jsp?content="+encodeURI(search));
	}else{
		alert("请输入您要查询的关键字！");
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

/********************初始化窗体大小 结束 *******************/

/****************** 左侧菜单 统计代码 ************************/
$(document).ready(function()
{
	$(".menu a").each(function()
	{
		$(this).click(function()
		{
			var curUrl = window.location.pathname;
			//alert(curUrl);
			curUrl = curUrl.substring(curUrl.lastIndexOf("/")+1);
			//alert(curUrl);
			var aurl=$(this).attr("href");
			if(aurl.indexOf("#") >-1)
				{
					aurl = aurl.substring(0,aurl.indexOf("#"));
					aurl =aurl.substring(aurl.lastIndexOf("/")+1);
				}
			//alert(aurl);
			if(aurl ==curUrl)
			{
				var structId = $(this).attr("structId");
				
				// 预留调用统计代码
				//alert("统计代码");
				countInfo(structId);
			}
		});
	});
});

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


/********************导航菜单高亮 结束 *******************/
$(document).ready(function()
{
	var curUrl = window.location.pathname;
 
	$(".mainnav li>a").each(function()
	{ 
		 
		var ahref=$(this).attr("href");
		// 移除 ../
		while(ahref.indexOf("../")>-1)
		{
			ahref = ahref.replace("../","");
		}
		
		ahref = ahref.substring(0,ahref.indexOf("/")+1);
		
		if(curUrl.indexOf(ahref) >-1)
		{
			$(this).css("color","#FFCC66");
		}
	});
	
	//  正对psg 栏目 实现左侧菜单高亮
	// 通过路径比对，实现高亮

	$(".mue>a,.menu>li>a").each(function()
	{
		var phref =$(this).attr("phref");
		
		if(curUrl.indexOf(phref)>-1)
		{
			$(this).parent().addClass("cur");
			 
		}
	});
});

/********************导航菜单高亮 结束 *******************/

/********************获取网址参数************************/

function getUrlParam(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
} 

/********************获取网址参数 结束 ************************/
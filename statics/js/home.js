var num1='<li><div class="project-cover"><a><img  src="/statics/IMG/cp2.jpg" width="221" height="166"/></a>'+
							'<div class="project-cover-div"><div><h4  title="和俩暖色调阿斯达暖色调阿斯暖色调阿斯">和俩暖色调阿斯达暖色调阿斯暖色调阿斯</h4><em>#摄影</em></div>'+
								'<p><span class="font1">FROM:</span><a class="font2">简易</a>的品牌<a class="font2">净世界</a></p></div></div></li>';
								
$.template("tmpl_num1",num1);
function test(){
		for(var i=0;i<20;i++){
			$.tmpl("tmpl_num1").appendTo( "#HomeConList_ul" );
		}
}
function indexfooter_show(){
    $(this).oneTime(100, function() {
        $(".indexfooter_hide_show").animate({bottom:0});
    });
}
function indexfooter_hide(){
    $(this).oneTime(3000, function() {
        $(".indexfooter_hide_show").animate({bottom:-55});
    });
}
function footer_stoptime(){
    $(this).stopTime();
}
function footer_time(){
    $(this).oneTime(3000, function() {
        $(".indexfooter_hide_show").animate({bottom:-55});
    });
}
var scrollPos; 
function get_num_scroll(){
        if (typeof window.pageYOffset != 'undefined')    //针对Netscape 浏览器
        { 
            scrollPos = window.pageYOffset; 
        } 
        else if (typeof document.compatMode != 'undefined' &&   document.compatMode != 'BackCompat')
        { 
            scrollPos = document.documentElement.scrollTop; 
        } 
        else if (typeof document.body != 'undefined') 
        { 
            scrollPos = document.body.scrollTop; 
        } 
        console.log("scrollPos:"+scrollPos);
        if(scrollPos>150){
            $("#index_footer_top").show();
        }
        else{$("#index_footer_top").hide();}
}
window.onscroll=function(){get_num_scroll();};
$(document).ready(function(){
        $(".indexfooter_hide_show").css({bottom:-55});
	    test();
        $("#index_footer_show").hover(function(){
            indexfooter_show();
        },function(){
            indexfooter_hide();
        });
        $("#index_footer_show").click(function(){
            get_num_scroll();
        });
        get_num_scroll();
        var windows_height=document.body.clientHeight;
        $(window).scroll(function(){
            //滚动条到网页头部的 高度，兼容ie,ff,chrome
            var top = scrollPos; //??????
            console.log("滚动条到网页头部的高度 :"+scrollPos);
            //网页的高度
            var textheight = $(document).height();
            console.log("网页的高度 :"+textheight);
            console.log("当前显示区域的高度："+document.body.clientHeight);
            if (textheight - top  <= windows_height) {
                console.log(windows_height);
                /*
                $.getJSON( "json.json" ,function(msg){			
                    for(var i=0;i<12;i++){
                        $( "#movieTemplate" ).tmpl(msg).prependTo( "#movieList" );//将指定内容在特定位置显示
                    }
                }); 
                */
                // test();
            }
            console.log("-------------------------------------------------------------------------------------------------------");
        });
	});
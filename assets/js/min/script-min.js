!function($){$(document).ready(function(){function t(a,e,i){0>=i||$(a).animate({top:"-5px"},e,function(){$(a).animate({top:"0px"},e,function(){t(a,e,i-1)})})}function a(t,a){$(t).animate({top:"-10px"},a/4,function(){$(t).animate({top:"0px"},a)})}function e(t,a){$(t).animate({top:"-15px"},a,function(){$(t).animate({top:"-5px"},a)})}function i(t,a,e,i,n){return setInterval(function(){t(a,e,i)},n)}$(".btn-switch").click(function(){return $(this).closest(".project-container").toggleClass("secondary"),!1}),$("a.smooth").click(function(){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length){var a=$(this).hasClass("nav")?t.find("header").css("padding-top"):0,e=t.offset().top-parseInt(a,10);return $("html,body").animate({scrollTop:e},1e3),!1}}),$(".btn-switch").click(function(){$(this).toggleClass("on");var t=$(this).data("toggle")||1,a=$(".project-display-inner img");$(".project-display-inner").addClass("loading");var e,i,n=$(a[0]),s=$(a[1]);switch(t){case 1:e=$(a[0]).attr("src").replace(/\.jpg/,"2.jpg"),i=$(a[1]).attr("src").replace(/\.jpg/,"2.jpg");break;case 2:e=$(a[0]).attr("src").replace(/2\.jpg/,".jpg"),i=$(a[1]).attr("src").replace(/2\.jpg/,".jpg")}n.attr("src",e),s.attr("src",i),n.load(function(){$(this).closest(".loading").removeClass("loading"),n.show(400)}),s.load(function(){$(this).closest(".loading").removeClass("loading"),s.show(400)}),t++,t>2&&(t=1),$(this).data("toggle",t)});var n=!0;$("#project-list").on("click","article a",function(){if(n&&($("#project-display").removeClass("hidden"),n=!1),!$(this).parent().hasClass("active")){$(".project-display-inner").addClass("loading"),$(".btn-switch").removeClass("on").data("toggle",1),$(this).parent().siblings().removeClass("active").end().addClass("active");var t=$(this).parent().find(".project-info").html(),a=$(this).parent().data("image-large"),e=$(this).parent().data("image-mobile"),i=$(this).parent().data("title"),s=$(this).parent().data("icons"),o=new Image,l=new Image;o.src=a,l.src=e,$(".project-display-info").fadeOut(function(){$(this).html(t).fadeIn()}),$(".project-display-title h1").fadeOut(function(){$(this).text(i).fadeIn()}),$(".project-display-mobile .project-display-inner img").fadeOut(function(){$(this).parent().append(l).removeClass("loading"),$(this).remove()}),$(".project-display-large .project-display-inner img").fadeOut(function(){$(this).parent().append(o).removeClass("loading"),$(this).remove()}),$(".icons").removeClass().addClass("icons "+s);var c=$(this.hash);if(c=c.length?c:$("[name="+this.hash.slice(1)+"]"),c.length){var r=$(this).hasClass("nav")?c.find("header").css("padding-top"):0,p=c.offset().top-parseInt(r,10);return $("html,body").animate({scrollTop:p},1e3),!1}}}),$(".project-next").on("click",function(){var t=$("#project-list article.active"),a=t.next();0===a.length&&(a=$("#project-list article:first-child")),a.find("a").trigger("click")}),$(".project-prev").on("click",function(){var t=$("#project-list article.active"),a=t.prev();0===a.length&&(a=$("#project-list article:last")),a.find("a").trigger("click")});var s=$("#toTop").offset().top+100,o=$("#about").offset().top-35;$(window).scroll(function(){$("#toTop").toggleClass("sticky",$(window).scrollTop()>s),$("#toTop").toggleClass("small",$(window).scrollTop()>o)});var l=null,c=null,r=null;$("#linkedin, #phone").click(function(){$(this).toggleClass("up")}),$("#email img").click(function(){$("#email_form").slideToggle(function(){if("block"===$(this).css("display")){var t=$(this).offset().top-175;$("html,body").animate({scrollTop:t},1e3)}})})})}(jQuery);
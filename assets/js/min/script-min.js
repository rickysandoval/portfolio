!function($){$(document).ready(function(){$(".btn-switch").click(function(){return $(this).closest(".project-container").toggleClass("secondary"),!1}),$("a.smooth").click(function(){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length){var e=$(this).hasClass("nav")?t.find("header").css("padding-top"):0,a=t.offset().top-parseInt(e,10);return $("html,body").animate({scrollTop:a},1e3),!1}}),$(".btn-switch").click(function(){$(this).toggleClass("on");var t=$(this).data("toggle")||1,e=$(".project-display-inner img");$(".project-display-inner").addClass("loading");var a,s,i=$(e[0]),o=$(e[1]);switch(t){case 1:a=$(e[0]).attr("src").replace(/\.jpg/,"2.jpg"),s=$(e[1]).attr("src").replace(/\.jpg/,"2.jpg");break;case 2:a=$(e[0]).attr("src").replace(/2\.jpg/,".jpg"),s=$(e[1]).attr("src").replace(/2\.jpg/,".jpg")}i.attr("src",a),o.attr("src",s),i.load(function(){$(this).closest(".loading").removeClass("loading"),i.show(400)}),o.load(function(){$(this).closest(".loading").removeClass("loading"),o.show(400)}),t++,t>2&&(t=1),$(this).data("toggle",t)});var t=!0;$("#project-list").on("click","article a",function(){if(t&&($("#project-display").removeClass("hidden"),t=!1),!$(this).parent().hasClass("active")){$(".project-display-inner").addClass("loading"),$(".btn-switch").removeClass("on").data("toggle",1),$(this).parent().siblings().removeClass("active").end().addClass("active");var e=$(this).parent().find(".project-info").html(),a=$(this).parent().data("image-large"),s=$(this).parent().data("image-mobile"),i=$(this).parent().data("title"),o=$(this).parent().data("icons"),n=$(this).parent().data("switch");n===!1?$("#project-display").addClass("noswitch"):$("#project-display").removeClass("noswitch");var l=new Image,r=new Image;l.src=a,r.src=s,$(".project-display-info").fadeOut(function(){$(this).html(e).fadeIn()}),$(".project-display-title h1").fadeOut(function(){$(this).text(i).fadeIn()}),$(".project-display-mobile .project-display-inner img").fadeOut(function(){$(this).parent().append(r).removeClass("loading"),$(this).remove()}),$(".project-display-large .project-display-inner img").fadeOut(function(){$(this).parent().append(l).removeClass("loading"),$(this).remove()}),$(".icons").removeClass().addClass("icons "+o);var c=$(this.hash);if(c=c.length?c:$("[name="+this.hash.slice(1)+"]"),c.length){var p=$(this).hasClass("nav")?c.find("header").css("padding-top"):0,d=c.offset().top-parseInt(p,10);return $("html,body").animate({scrollTop:d},1e3),!1}}}),$(".project-next").on("click",function(){var t=$("#project-list article.active"),e=t.next();0===e.length&&(e=$("#project-list article:first-child")),e.find("a").trigger("click")}),$(".project-prev").on("click",function(){var t=$("#project-list article.active"),e=t.prev();0===e.length&&(e=$("#project-list article:last")),e.find("a").trigger("click")});var e=$("#toTop").offset().top+100,a=$("#about").offset().top-35;$(window).scroll(function(){$("#toTop").toggleClass("sticky",$(window).scrollTop()>e),$("#toTop").toggleClass("small",$(window).scrollTop()>a)}),$("#linkedin, #phone").click(function(){$(this).toggleClass("up")}),$("#email img").click(function(){$("#email_form").slideToggle(function(){if("block"===$(this).css("display")){var t=$(this).offset().top-175;$("html,body").animate({scrollTop:t},1e3)}})}),$("#resume .toggle").click(function(){return $("#resume main").slideToggle("slow",function(){$("#resume .toggle").toggleClass("header")}),!1})})}(jQuery);
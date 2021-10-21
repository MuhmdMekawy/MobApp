window.onload = function(){
    $('.loading ').fadeOut(1000);
    $('-webkit-scrollbar').show(1000)
}

$(document).ready(function(){
    $('.test .content .right').click(function(){
        $('.test .cont').last().hide(500);
        $('.test .cont').first().animate({
            "margin-left" : "1500px" 
        }, 1000);
        $('.test .cont').first().appendTo('.test .content');
        $('.test .cont').first().show(500)
        $('.test .cont').first().animate({
            "margin-left" : "0px" 
        },1000);
    
    });
    $('.test .content .left').click(function(){
        $('.test .cont').last().hide(500);
        $('.test .cont').first().hide(500);
        $('.test .cont').first().animate({
            "margin-left" : "-1500px"
        }, 1000);
        $('.test .cont').last().prependTo('.test .content');
        $('.test .cont').last().show(500)
        $('.test .cont').last().animate({
            "margin-left" : "0px" 
        } , 1000);
    
    });
    var imgsObj = $('.materialboxed');// الصورة المراد تكبيرها
    if (imgsObj) {
        $.each(imgsObj, function () {
            $(this).click(function () {
                var currImg = $(this);
                coverLayer(1);
                var tempContainer = $('<div class=tempContainer></div>');// حاوية صور
                with (tempContainer) {// طريقة العرض تساوي $ (هذا)
                    appendTo("body");
                    var windowWidth = $(window).width();// عرض النافذة
                    var windowHeight = $(window).height();// ارتفاع النافذة
                    // احصل على العرض والارتفاع الأصليين للصورة
                    var orignImg = new Image();
                    orignImg.src = currImg.attr("src");
                    var currImgWidth = orignImg.width;
                    var currImgHeight = orignImg.height;
                    if (currImgWidth < windowWidth) {// من أجل جعل الصورة غير مشوهة ، عندما يكون عرض الصورة صغيرًا ، احتفظ بالصورة الأصلية
                        if (currImgHeight < windowHeight) {
                            
                            var topHeight = (windowHeight - currImgHeight) / 2;
                            // if (topHeight> 35) {/ * هنا من أجل توسيط ارتفاع الصورة وعرضها على شاشة الهاتف بالكامل: لأنه سيكون هناك تنقل للعنوان في WeChat لأنظمة android و ios و 35 هو ارتفاع تنقل العنوان * /
                            //    topHeight = topHeight - 35;
                            //    css('top', topHeight);
                            //} else {
                            //    css('top', 0);
                            //}
                            css('top', topHeight);// ما سبق مخصص لنظام Android ، وهذا مخصص لجهاز الكمبيوتر
                            html('<img border=0 src=' + currImg.attr('src') + '>');
                        } else {
                             alert(2);
                            css('top', 0);
                            html('<img border=0 src=' + currImg.attr('src') + ' height=' + windowHeight + '>');
                        }
                    } else {
                         
                        var currImgChangeHeight = (currImgHeight * windowWidth) / currImgWidth;
                        if (currImgChangeHeight < windowHeight) {
                             
                            var topHeight = (windowHeight - currImgChangeHeight) / 2;// اجعل الصورة تتمحور
                            //if (topHeight > 35) {
                      
                            //    topHeight = topHeight - 35;
                            //    css('top', topHeight);
                            //} else {
                            
                            //    css('top', 0);
                            //}
                             css('top', topHeight);// ما ورد أعلاه مخصص لنظام Android ، وهذا لأجهزة الكمبيوتر الشخصي
                            html('<img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + ';>');
                        } else {
                             
                            css('top', 0);
                            html('<img border=0 src=' + currImg.attr('src') + ' width=' + windowWidth + '; height=' + windowHeight + '>');
                        }
                    }
                }
                tempContainer.click(function () {
                    $(this).remove();
                    coverLayer(0);
                });
            });
        });
    }
    else {
        return false;
    }
    // استخدم تعطيل تأثير التقنيع
    function coverLayer(tag) {
        with ($('.over')) {
            if (tag == 1) {
                css('height', $(document).height());
                css('display', 'block');
                css('opacity', 1);
                css("background-color", "#FFFFFF");
                css("background-color", "rgba(0,0,0,0.8)");  // قناع الشفافية
            }
            else {
                css('display', 'none');
            }
        }
    }

    $(window).on ('scroll' , function(){
        var src = $(window).scrollTop()
        if(src >= 1000){
            $('.up').show(1000);
            $('.up').click(function(){
                $(window).scrollTop(0)
            })
        }
        else{
            $('.up').hide(500)
        }
    });
    // $('.sec li a').click(function(){
    //     $(this).css({
    //         "color" : "white" ,
    //         "border-bottom" : "3px dashed white"
    //     });
    //     $(this).parent().siblings().children().css({
    //         "color" : "#c9c7c7" ,
    //         "border-bottom" : "none"
    //     })
    // });

    $(window).on('scroll' , function(){
        var src = $(window).scrollTop()
        if(src <= 600){
            $('.navbar ul li a[href="#home"]').addClass('play').siblings().removeClass('play')
        }
        if(src <= 600){
            $('.sec ul li a[href="#home"]').addClass('play').siblings().removeClass('play')
        }
    });
    new WOW().init();
});
var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/gqgong/MyBlog/Images/logo(已去底).png");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/gqgong/MyBlog/Images/logo(已去底).png");
         document.title = '(ฅ>ω<*ฅ) 来了老弟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

/*global $*/
$(function () {
  
    "use strict";

    //counter
    $('.counter').counterUp({
      delay: 10,
      time: 3000
   });


   //scroll-top
   var scrollbutton=$("#scroll-top");
    
   $(window).scroll(function ()
    {
       if($(this).scrollTop () >=700){
           
         scrollbutton.show();
       }else{

           scrollbutton.hide();
       }
       
   });
   
   scrollbutton.click(function(){
     
     $("html,body").animate({
        scrollTop:0
      },600);
      
  });
   
   
   

});
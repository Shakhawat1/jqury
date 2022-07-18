 $(document).ready(function(){

  
  $('.hide').click(function(){
         $('h2').hide("first");
     });
  $('.show').click(function(){
         $('h2').show("slow");
     });
  $('.togl').click(function(){
         $('h2').toggle(2000);
     });

   $('#hide').click(function(){
         $('h2').fadeOut("");
     });
  $('#show').click(function(){
         $('h2').fadeIn("");
     });
  $('#togl').click(function(){
         $('h2').fadeToggle();
     });

  $('#hide').click(function(){
         $('h2').fadeOut("");
     });
  $('.ques').click(function(){
    $('.ans').slidetoggle(600);
    });
   });
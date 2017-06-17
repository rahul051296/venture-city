window.onload = function() {
  Particles.init({
    selector: '#myCanvas',
    color: '#ffffff',
      speed:1.5,
    connectParticles: false,
      maxParticles:100
      
  });
};

$(document).ready(function(){
    $('#signout').hide();
    $('body').css("overflow","hidden");
    $('.navbar-default').css("background","rgba(23, 35, 59, 0.4)");
        $('.navbar-default').css("box-shadow","-1px 1px 10px 0.2px rgba(0,0,0,0.35)");
        $('.navbar-default').css("margin-bottom","0");
    var nameBox= $('#nameBox');
    var emailBox= $('#emailBox');
    var phoneBox= $('#phoneBox');
    var teachBox= $('#teachBox');
    var learnBox= $('#learnBox');
    $("#btn1").click(function(){
        $("#landing").hide();
        $("#signUp").show();
        
        $('#login').show();    
        $('.navbar-brand').show();        
    })
    $('.signup').click(function(){
        if(nameBox.val().length>0 && emailBox.val().length>0 && phoneBox.val().length>0)
            {
        $('#signUp').hide();
        $('#signout').show();
        $('#login').hide();
        $('body').css("overflow","scroll");
        $( "div#Username" ).replaceWith( "<h2 class='text-uppercase'>"+nameBox.val()+"</h2>" );
        $( "div#Email" ).replaceWith( "<p class='text-muted'>Email: "+emailBox.val()+"</p>" );
        $("div#Phone").replaceWith("<p class='text-muted'>Phone No:"+phoneBox.val()+"</p>");
                if(learnBox.val().length>0)
                    {
        $("div#who").replaceWith("<p class='text-muted'>Position: Learner</p>");
                    }
        $('#mapScreen').css("visibility","visible");
        $('.navbar-default').css("background","rgba(23, 35, 59, 1)");
        $('body').css('background','#f4f4f4');
        $('#myCanvas').css('visibility','hidden');  
            }
            
    })
    
  /*  $('#g-sign').click(function(){
        $('#signUp').hide();
        $('#mapScreen').css("visibility","visible");
        $('.navbar-default').css("background","rgba(23, 35, 59, 1)");
        $('body').css('background','#f4f4f4');
        $('#myCanvas').css('visibility','hidden');  
    })
    
    $('#signout').click(function(){

        $(this).hide();
       
    });*/
});


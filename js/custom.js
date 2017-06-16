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
    $('.navbar-header').hide();
    $('.navbar-nav').hide();
    var nameBox= $('#nameBox');
    var emailBox= $('#emailBox');
    var phoneBox= $('#phoneBox');
    $("#btn1").click(function(){
        
        $("#landing").hide();
        $("#signUp").show();
        $('.navbar-header').show();
        $('.navbar-nav').show();
            
    })
    $('.custom_btn').click(function(){
        
        if(nameBox.val().length!=0 && emailBox.val().length!=0 && phoneBox.val().length!=0)
            {
        $('#signUp').hide();
        $('#mapScreen').css("visibility","visible");
        $('body').css('background','#f4f4f4');
        $('.navbar-default').css("background","rgba(23, 35, 59, 0.9)");
        $('.navbar-default').css("box-shadow","-1px 1px 10px 0.2px rgba(0,0,0,0.35)");
        $('.navbar-default').css("margin-bottom","0");
        $('#myCanvas').css('visibility','hidden');
                
                
            }
    })
});


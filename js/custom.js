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
    $('#login').hide();
    $('#signout').hide();
    $('.navbar-brand').hide();
    var nameBox= $('#nameBox');
    var emailBox= $('#emailBox');
    var phoneBox= $('#phoneBox');
    $("#btn1").click(function(){
        $("#landing").hide();
        $("#signUp").show();
        $('.navbar-default').css("background","rgba(23, 35, 59, 0.4)");
        $('.navbar-default').css("box-shadow","-1px 1px 10px 0.2px rgba(0,0,0,0.35)");
        $('.navbar-default').css("margin-bottom","0");
        $('#login').show();    
        $('.navbar-brand').show();        
    })
    $('.signup').click(function(){
        if(nameBox.val().length>0 && emailBox.val().length>0 && phoneBox.val().length>0)
            {
        $('#signUp').hide();
        $('#signout').show();
        $('#login').hide();
        if(nameBox.val().length>0 && emailBox.val().length>0)
            {
        $( "div#Username" ).replaceWith( "<h2>"+nameBox.val()+"</h2>" );
        $( "div#Email" ).replaceWith( "<p>"+emailBox.val()+"</p>" );
        $("div#Phone").append("<h5 style='font-weight:bold'>Phone No</h5><p>"+phoneBox.val()+"</p>")        
            }
        $('#mapScreen').css("visibility","visible");
        $('.navbar-default').css("background","rgba(23, 35, 59, 1)");
        $('body').css('background','#f4f4f4');
        $('#myCanvas').css('visibility','hidden');  
            }
            
    })
    
    $('#signout').click(function(){
        $('#signUp').show(); 
        $(this).hide();
        $('#login').show();
        $('#mapScreen').css('visibility','hidden');
        $('.navbar-default').css("background","rgba(23, 35, 59, 0.4)");
        $('.navbar-default').css("box-shadow","-1px 1px 10px 0.2px rgba(0,0,0,0.35)");
        $('.navbar-default').css("margin-bottom","0");
        $('body').css('background','url("../img/background.jpg") center');
        $('#myCanvas').css('visibility','visible');  
    });
});


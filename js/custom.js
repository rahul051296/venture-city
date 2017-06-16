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
    $("#btn1").click(function(){
        $("#landing").hide();
        $("#signUp").show();
    })
    $('.custom_btn').click(function(){
        $('#signUp').hide();
        $('#mapScreen').css("visibility","visible");
        $('body').css('background','#f1f1f1');
        $('.navbar-default').css("background","rgba(0, 0, 0, 1)");
        $('#myCanvas').css('visibility','hidden');
    })
});


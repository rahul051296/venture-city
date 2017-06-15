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
});
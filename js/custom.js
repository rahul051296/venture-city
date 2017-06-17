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
        $( "div#Username" ).replaceWith( "<h3 class='text-uppercase'>"+nameBox.val()+"</h3>" );
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
    
    $('#choose').click(function()
                      {
        var name,email,place,pnumber,path;
        $('#mapScreen').hide();
        $('#userProfile').show();
        var variable = $('select[name=selector]').val();
        switch(variable)
                {
            case '1': name = "Ram";
                    email = "ram@gmail.com";
                    place = "Egmore";
                    pnumber = "9876543210";
                    path = "img/pro1.jpg"
                    break;
            case '2': name = "Rahul";
                    email = "rahul@gmail.com";
                    place = "Korattur";
                    pnumber = "9876543211";
                    path = "img/pro2.jpg"
                    break;
            case '3': name = "Michael";
                    email = "michael@gmail.com";
                    place = "Ramapuram";
                    pnumber = "9876543212";
                    path = "img/pro3.jpg";
                    break;
            case '4': name = "Rohit";
                    email = "rohit@gmail.com";
                    place = "Vilivakkam";
                    pnumber = "9876543213";
                    path = "img/pro4.jpg";
                    break;
        }
       $('#upName').append("<h2>"+name+"</h2>");
       $('#upEmail').append("<p>Email: "+email+"</p>");
       $('#upPhone').append("<p>Phone No:"+pnumber+"</p>");
        $('#upProfile').append("<img src="+path+" class='img-responsive' style='width:100%'/>")
    });
    
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


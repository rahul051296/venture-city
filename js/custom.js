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
        $( "div#Email" ).replaceWith( "<p>Email: "+emailBox.val()+"</p>" );
        $("div#Phone").replaceWith("<p>Phone No:"+phoneBox.val()+"</p>");
                if(learnBox.val().length>0)
                    {
                    $("div#who").replaceWith("<p style='padding-bottom:10px'>Position: Learner</p>");   
                    }
        $('#mapScreen').css("visibility","visible");
        $('.navbar-default').css("background","rgba(23, 35, 59, 1)");
        $('body').css('background','#f4f4f4');
        $('#myCanvas').css('visibility','hidden');  
            }
        else{
            alert("Please Fill in the required details");
        }
            
    })
    $('#choose').click(function()
                      {
        var name,email,place,positon,pnumber,path;
        var variable = $('select[name=selector]').val();
        $('#mapScreen').hide();
        $('#userProfile').show();
        switch(variable)
                {
            case '1': name = "Samuel Benjamin";
                    email = "sambenji@gmail.com";
                    place = "Egmore";
                    pnumber = "9876543210";
                    position="Teacher";
                    path = "img/pro1.jpg"
                    break;
            case '2': name = "Gary Lewis";
                    email = "garylewis@gmail.com";
                    place = "Korattur";
                    position="Teacher";
                    pnumber = "9876543211";
                    path = "img/pro2.jpg"
                    break;
            case '3': name = "Christopher Michael";
                    email = "chrismichael@gmail.com";
                    place = "Ramapuram";
                    position="Teacher";
                    pnumber = "9876543212";
                    path = "img/pro3.jpg";
                    break;
            case '4': name = "Anthony Padilla";
                    email = "anthony@gmail.com";
                    place = "Vilivakkam";
                    position="Teacher";
                    pnumber = "9876543213";
                    path = "img/pro4.jpg";
                    break;
            case '5': name = "Bruce Wayne";
                    email = "brucewayne@gmail.com";
                    place = "Avadi";
                    position = "Learner";
                    pnumber = "9876543214";
                    path = "img/pro5.jpg";
                    break;
            case '6': name = "Selina Kyle";
                    email = "selinakyle@gmail.com";
                    place = "Ennore";
                    position = "Learner";
                    pnumber = "9876543215";
                    path = "img/pro6.jpg";
                    break;
            case '7': name = "Barry Allen";
                    email = "barryallen@gmail.com";
                    place = "Kolathur";
                    position = "Learner";
                    pnumber = "9876543216";
                    path = "img/pro7.jpg";
                    break;
            case '8': name = "Thea Queen";
                    email = "theaqueen@gmail.com";
                    place = "Ennore";
                    position = "Learner";
                    pnumber = "9876543217";
                    path = "img/pro8.jpg";
                    break;
        }
       $('#upName').append("<h2 class='text-center'>"+name+"</h2><p>("+place+")</p>");
        $('#Contact').append("<center><div class='row'><div class='col-md-12 icons'><a href='whatsapp://send?text=Hey! I stay at Adyar. Can we meetup?' data-action='share/whatsapp/share'><i class='fa fa-whatsapp fa-2x' aria-hidden='true'></i></a></div></center>")
      $('#upEmail').append("<h5>Email: " +email+"</h5>");
       $('#upPhone').append("<h5>Phone No:" +pnumber+"</h5>");
       $('#upWho').append("<h5>Position: " +position+"</h5>");
        $('#upProfile').append("<img src="+path+" class='img-responsive' style='width:100%; height:300px; object-fit: cover;'/>");
        
    });
    
   $('#g-sign').click(function(){
        alert("This functionality is not available right now. Sorry for the inconvinience :-/. Please try the normal Sign-up");
    })
    
    $('#meeting').click(function(){
        alert("A request email has been sent to the user with your details.")
    })
    
   var availableTags = [ "ActionScript", "AppleScript", "Asp"];
   $(function() { 
        var availableTags = [ "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"];
        $( "#teachBox" ).autocomplete({ source: availableTags, appendTo: "#suggestions1" });
        $( "#learnBox" ).autocomplete({ source: availableTags, appendTo: "#suggestions2" });
    });
});


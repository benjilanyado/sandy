$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px", "3762px", "4389px", "5016px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()
 		$("rightbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 9)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 

////// slide image toggle TILE 1 ////

 

 $("#image1 img").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#copybox1").css('width') == '0px'){
                  $("#clickme").fadeOut(function(){
                  $("#copybox1").animate({"width":'347px'},1000, function(){
                    $("#copybox1").animate({"height": "72px"}, 500)

                    });
                  });
                };

                if($("#copybox1").css('width') == '346px'){
                  $("#copybox1").animate({"width":'0px'},1000, function(){
                    $("#copybox1").css("height", "45px")

                  });                  
                };
              }
                      
});

 ////// TILE 2 /////


$("#image2").click(function(event) {        

    event.preventDefault();

    $("#copybox2").fadeToggle()
    $("#headline2").fadeToggle()

  });

 $("#video2 img").click(function(event){

    event.preventDefault();              
    $("#videobox").fadeIn(function(){
      $("#videoholder").html('<iframe src="http://player.vimeo.com/video/52426781?title=0&amp;byline=0&amp;portrait=0&amp;badge=0" width="380" height="213" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')

    });
                       
  });


$("#videobox img").click(function(event){
                
   $("#videobox").fadeOut(function(){
   $("#videoholder").html("")

  });                  
                
});



///// TILE 3 /////

$("#image3").click(function(event) {        

    event.preventDefault();

    $("#copybox3").fadeToggle()

  });


$("#rightgallery").click(function(event){

  event.preventDefault();
  $("#galleryframe").animate({"left": "-540px"}, 500)
    $("#rightgallery").fadeOut()
    $("#leftgallery").fadeIn()
    $("#closebutton3").fadeOut()
    $("#closebutton4").fadeIn()



})

$("#leftgallery").click(function(event){

  event.preventDefault();
  $("#galleryframe").animate({"left": "0px"}, 500)
    $("#leftgallery").fadeOut()
    $("#rightgallery").fadeIn()
    $("#closebutton4").fadeOut()
    $("#closebutton3").fadeIn()

});

 $("#video3 img").click(function(event){

    event.preventDefault();  
    $("#headline3").fadeOut()            
    $("#videogallery").fadeIn(function(){
      $("#embed1").html('<iframe width="530" height="298" src="http://www.youtube.com/embed/uXMNS8MDr5I" frameborder="0" allowfullscreen></iframe>')
      $("#embed2").html('<iframe src="http://player.vimeo.com/video/52767404?title=0&amp;byline=0&amp;portrait=0&amp;badge=0" width="530" height="298" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
      
    });
                       
  });


$("#closebutton3, #closebutton4").click(function(event){
                
   $("#videogallery").fadeOut(function(){
   $("#embed1").html("")
   $("#embed2").html("")
   $("#headline3").fadeIn()

  });                  
                
});


////////Tile 4 //////

$("#image4").click(function(event) {        

    event.preventDefault();

    $("#copybox4").fadeToggle()
    $("#headline4").fadeToggle()

  });

$("#video4 img").click(function(event){

    event.preventDefault();     
    $("#headline4").fadeOut()         
    $("#videobox4").fadeIn(function(){
      $("#videoholder4").html('<iframe src="http://player.vimeo.com/video/52439479?title=0&amp;byline=0&amp;portrait=0&amp;badge=0" width="800" height="533" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
      $("#closebutton5").fadeIn()

    });
                       
  });

$("#closebutton5").click(function(event) {        

    event.preventDefault();              
    $("#videobox4").fadeOut(function(){
      $("#videoholder4").html("")
      $("#closebutton5").fadeOut()
      $("#headline4").fadeIn()
    });

  });

///tile 5////

  $("#rightbutton").click(function(event){

    event.preventDefault();

    $("#tile5").animate({"left": "-940px"}, 2000)
    $("#rightbutton").fadeOut( function(event) {

      $("#leftbutton").fadeIn();
    });
  });

    $("#leftbutton").click(function(event){

    event.preventDefault();

    $("#tile5").animate({"left": "0px"}, 2000)
    $("#leftbutton").fadeOut( function(event){

      $("#rightbutton").fadeIn();
      $("#upbutton").fadeIn()
    });
  });

    $("#image5").click(function(event) {        

    event.preventDefault();

    $("#copybox5").fadeToggle()

  });


////// tile 6 ////

$("#image6").click(function(event) {        

    event.preventDefault();

    $("#copybox6").fadeToggle()

  });


///// Tile 7 ////

$("#image7").click(function(event) {        

    event.preventDefault();

    $("#copybox7").fadeToggle()

  });

///tile 8

$("#image8").click(function(event) {        

    event.preventDefault();

    $("#copybox8").fadeToggle()
    $("#headline8").fadeToggle()

  });


$("#video8 img").click(function(event){

    event.preventDefault();           
    $("#videobox8").fadeIn(function(){
      $("#videoholder8").html('<iframe width="560" height="315" src="http://www.youtube.com/embed/QGJSjKfOvV8" frameborder="0" allowfullscreen></iframe>')
      $("#closebutton8").fadeIn()

    });
                       
  });

$("#closebutton8").click(function(event) {        

    event.preventDefault();              
    $("#videobox8").fadeOut(function(){
      $("#videoholder8").html("")
      $("#closebutton8").fadeOut()
    });

  });


/// tile 9

$("#image9").click(function(event) {        

    event.preventDefault();

    $("#copybox9").fadeToggle()

  });


$("#video9 img").click(function(event){

    event.preventDefault();           
    $("#videobox9").fadeIn(function(){
      $("#videoholder9").html('<iframe src="http://player.vimeo.com/video/52694105?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;color=ffffff" width="560" height="315" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
      $("#closebutton9").fadeIn()

    });
                       
  });

$("#closebutton9").click(function(event) {        

    event.preventDefault();              
    $("#videobox9").fadeOut(function(){
      $("#videoholder9").html("")
      $("#closebutton9").fadeOut()
    });

  });







///////// MEDIA FADE IN & OUT /////////


  // $("#DIVTOCLICK").click(function(event) {        

  //   event.preventDefault();

  //   $("#FADEOUTDIV").fadeOut();

  //   $("#FADEINDIV").fadeIn(function(){
      
  //     $("#MEDIAHOLDER").html('IFRAME')

  //   });

    
  // });


  // $("CLOSEBUTTON?").click(function(event) {        

  //   event.preventDefault();

  //   $("#FADEOUTDIV").fadeOut(function(){
      
  //     $("#MEDIAHOLDER").html('')

  //   });

    
  // });

///////// END OF MEDIA FADE IN & OUT /////////


///////// EXPANDOR DIV CONTROLS ////////

 
 

  // });

  // $("#CLOSEBUTTON").click(function(event){

  //   event.preventDefault();
  //   $("#EXPANDORDIV").css("width", "MINWIDTH");
  //   $("#EXPANDORDIV").css("height", "MINHEIGHT");
  //   $("#CLOSEBUTTON").fadeOut()


  // });

///////// END OF EXPANDOR DIV CONTROLS ////////

///////// TOGGLE BUTTON - (NUMBERS?) ////////



///////// END OF TOGGLE BUTTON - (NUMBERS?) ////////

///////// LEFT & RIGHT ANIMATE ////////






/////// END OF LEFT & RIGHT BUTTONS ///////

////DOWNBUTTON /////

 $("#downbutton").on({
  'click': function(event) {

if ($("#internalwrapper").css('bottom') == '5013px'){

    event.preventDefault();

    $("#internalwrapper").animate({"bottom": "6270px"}, 1000, function(){

      $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function(){

        $("#titleswrapper").css("bottom", "0px")

          $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function (){

            $("#titleswrapper").css("bottom", "0px")

            $("#titleswrapper").animate({"bottom": "2300px"}, 35000, "linear", function () {

              $("#titleswrapper").css("bottom", "548px")
              $("#rightside").css("overflow", "scroll")


            });

          });

      });

    });	

}

}

});


////////FINAL CONTROLS ///////


 $("#oneup").click(function(event){

    $("#internalwrapper").animate({"bottom": "5013px"}, 1000)
    $("#tweetbutton").fadeOut()

   });

    $("#backtotop").click(function(event){

    window.location.reload()

   });


 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");





}); //ready


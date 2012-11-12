$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px", "3135px", "3762px", "4389px", "5016px", "5643px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	

 	if (lightboxCurrent==(verticalimages.length - 10)) {  //NB  "-5" needs to be whatever length of array is

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

// MINI IMAGE CONTROLS


  var miniImages = [ "0px", "-940px", "-1880px", "-2820px", "-3760px", "-4700px"];

  var credits = ['<a href="http://www.flickr.com/photos/tomvu/8140141769/">Hurricane Sandy, the next morning in DUMBO, by Barry Yanowitz</a>', 
                  '<a href="http://www.flickr.com/photos/mtaphotos/8165381620/in/photostream/">SouthFerryStationDamage110712, by MTAPhotos</a>',
                  '<a href="http://www.flickr.com/photos/89474029@N07/8147459081/in/photostream/">Hurricane Sandy Survivor, by Philip Bell</a>',
                  '<a href="http://www.flickr.com/photos/usnavy/8162096921/in/photostream/">Sailors assist with Hurricane Sandy recovery efforts, by Official U.S. Navy Imagery</a>',
                  '<a href="http://www.flickr.com/photos/ennuiislife/8177796865/in/photostream/">Far Rockaway, Queens, New York, by Kate Gardiner</a>',
                  '<a href="http://www.flickr.com/photos/iakoubtchik/8143503834/in/photostream/">Vehicles Trapped, by Iakoubtchik</a>']

  var lightboxMiniCurrent = 0;


    function rightclickmini() {

  lightboxMiniCurrent += 1

  $("#morningwide").animate({"left": miniImages[lightboxMiniCurrent]}, 500)
  $("#copybox6h1").html(credits[lightboxMiniCurrent])

  $("#minileft").fadeIn()
  $("#headline6").fadeOut()

  if (lightboxMiniCurrent==(miniImages.length -1)) {

    $("#miniright").fadeOut()
  }


}

function leftclickmini() {


  lightboxMiniCurrent -= 1

  $("#morningwide").animate({"left": miniImages[lightboxMiniCurrent]}, 500)
  $("#copybox6h1").html(credits[lightboxMiniCurrent])

  $("#miniright").fadeIn()

  if (lightboxMiniCurrent==(miniImages.length - 6)) {

    $("#minileft").fadeOut()
  }

}

  $("#miniright").click(function(event){

    event.preventDefault();

      rightclickmini()

  })

  $("#minileft").click(function(event){

    event.preventDefault();

      leftclickmini()

  })


///// Tile 7 ////

$("#image7").click(function(event) {        

    event.preventDefault();

    $("#copybox7").fadeToggle()

  });

///tile 8

var miniImages2 = [ "0px", "-940px", "-1880px", "-2820px", "-3760px"];

  var credits2 = ['<a href="http://www.flickr.com/photos/sdettling/8142765504/in/photostream/">Untitled, by Stephen Dettling</a>', 
                  '<a href="http://www.flickr.com/photos/usnavy/8161187856/in/photostream/">Seabees assist with Hurricane Sandy recovery, by Official U.S. Navy Imagery</a>',
                  '<a href="http://www.flickr.com/photos/usfwsnortheast/8151150511/in/photostream/">Aftermath of extensive flooding along New Jersey shore </br> by U. S. Fish and Wildlife Service - Northeast Region</a>',
                  '<a href="http://www.flickr.com/photos/59949757@N06/8139794132/">Hurricane Sandy - NC12, by NCDOTcommunications</a>',
                  '<a href="http://www.flickr.com/photos/ennuiislife/8177796865/in/photostream/">Storm damage along the New Jersey coast</br> by U. S. Fish and Wildlife Service - Northeast Region</a></a>'
                  ]

  var lightboxMiniCurrent2 = 0;


  function rightclickmini2() {

  lightboxMiniCurrent2 += 1

  $("#damagewide").animate({"left": miniImages2[lightboxMiniCurrent2]}, 500)
  $("#copybox8h1").html(credits2[lightboxMiniCurrent2])

  $("#minileft2").fadeIn()
  $("#headline8").fadeOut()

  if (lightboxMiniCurrent2==(miniImages2.length -1)) {

    $("#miniright2").fadeOut()
  }


}

function leftclickmini2() {


  lightboxMiniCurrent2 -= 1

  $("#damagewide").animate({"left": miniImages2[lightboxMiniCurrent2]}, 500)
  $("#copybox8h1").html(credits2[lightboxMiniCurrent2])

  $("#miniright2").fadeIn()

  if (lightboxMiniCurrent2==(miniImages2.length - 5)) {

    $("#minileft2").fadeOut()
  }

}

  $("#miniright2").click(function(event){

    event.preventDefault();

      rightclickmini2()

  })

  $("#minileft2").click(function(event){

    event.preventDefault();

      leftclickmini2()

  })

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


//// tile 10

$("#image10").click(function(event) {        

    event.preventDefault();

    $("#copybox10").fadeToggle()

  });

$("#backtotop").click(function(event){

    window.location.reload()

   });







}); //ready


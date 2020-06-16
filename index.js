var drum = document.querySelectorAll(".drum");
var jillClick = 0;

function createSound(sound){
    var audio = new Audio(sound);
    audio.play();

}


function drumAnimation(currentDrum){
    
    var delay = 100;

    document.querySelector('.'+ currentDrum).classList.add("pressed");
    
    setTimeout;

    setTimeout(function(){
        document.querySelector('.'+ currentDrum).classList.remove("pressed");    
    }, delay); 

}

function getSound(k){
    switch (k){
        case 'w':
         createSound('./sounds/tom-1.mp3');
         break;
 
         case 'a':
          createSound('./sounds/tom-2.mp3');
          break;                
 
         case 's':
          createSound('./sounds/tom-3.mp3');
          break;
 
         case 'd':
          createSound('./sounds/tom-4.mp3');
          break;                                                 

         case 'j':
          createSound('./sounds/snare.mp3');
          break;                              
 
         case 'k':
           createSound('./sounds/crash.mp3');
           break;                                                                

         case 'l':
           createSound('./sounds/kick-bass.mp3');
           break;
           
         case 'c':
            createSound('./sounds/I want a bike.mp3');
            $("#c").addClass("big-button");
            $("#c").slideUp().slideDown();
            $("#c").animate({margin:"10% 20%"});

            if(jillClick===1){
                 $("#c").append("<button class='b drum' id='b'>bike</button>");  
                 $("#b").addClass("big-button");
                 setTimeout(function(){ getSound ('j');}, 1000);
                 setTimeout(function(){ getSound ('d');}, 1500);
                 setTimeout(function(){ getSound ('k');}, 2000);

            }   
            break;                                         
 }

    
}
 

var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  alert(inputs[i].id);
}


for (var i = 0; i < drum.length; i++) {
    
    drum[i].addEventListener('click', function() {

            var d = this.id;

            this.classList.toggle("white");

            if (d === "c"){
              jillClick = jillClick+1;
            }

            drumAnimation(d);

            getSound(d);

    
    });
}


document.addEventListener("keydown", function (event) {

    var k = event.key;
    drumAnimation(k);w
    getSound(k);
    document.querySelector('.'+ k).classList.toggle("white");

    if (k === "c"){
      jillClick = jillClick+1;
    }
        
});
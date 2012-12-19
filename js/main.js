$(document).ready(function() {
    
        function genSnow() {

            var snowArray = new Array();
            var buffer = "";
            var rand = 0;

            //Gen that snow anti-blanco
            var snowflakes = ["■", ".", "•"];
            var probability = [1, 3, 6] // Each item has a probability
        
            for(i = 10; i > 0; i--){
                buffer = "";
                buffer += "<li>";
                
                for(b = 82; b > 0; b--){
                    rand = Math.floor((Math.random() * 10)); // Pick from 0 to 10
                
                    if (rand <= probability[0]){                                    
                        buffer += snowflakes[0];
                    }
                    else if(rand <= probability[1]){
                        buffer += snowflakes[1];
                    }
                    else{
                        buffer += snowflakes[2];                                   
                    }
                }
                
                buffer += "</li>";
                
                snowArray.push(buffer);
            }               
           
            //Lets just slap them there into the page now.
                       
            $('#snowflake').html(snowArray).text();
            return snowArray;  
        }
    
        function fallingSnow(snowArray, snowSpeed) {
            //Falling snow 
            snowArray.splice(0, 0, snowArray[9]);
            snowArray.splice(10, 1);     
                    
            $('#snowflake').html(snowArray).text();
            
            setTimeout(function() { fallingSnow(snowArray, snowSpeed) }, snowSpeed);
        }
    
        function randomiseSnow(snowSpeed) {
            //MAKE RANDOM FUN TIME
            genSnow();
            setTimeout(function(){ randomiseSnow(snowSpeed) }, snowSpeed);
        }

        var likeness = 0;

        $('#input-buttons>li').click( function() {

            $('#input-buttons>li').removeClass('selected');
            likeness = $(this).html();
            var number = Number(likeness) + 1;
            $('#input-buttons>li:nth-child(' + number + ')').addClass('selected');

        });
    
        var name = "";

        $('#go').click(function(){

            for(i = 1; i < 7; i++){
            out = $('#input-buttons>li:nth-child(' + i + ')').css('.sign .front .item ol li#selected');
            console.log(out);
            }
            //Grab them vals
            name = $('#input-name').val().toString();
            
            if (name == ""){
                alert("Fuck you");
            }

            alert('Your name is: ' + name + '.\nSanta likes you: ' + likeness + ' out of 5.');
            //Stop the button from doing 
            return false;
        });
        
        snowArray = genSnow();
        var snowSpeed = 250;
        fallingSnow(snowArray, snowSpeed);
      //randomiseSnow(snowSpeed);
    
 });
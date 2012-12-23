$(document).ready(function() {
    
        snowArray = genSnow();              // Generate the snow
        var snowSpeed = 250;                // How fast should the snow move?
        fallingSnow(snowArray, snowSpeed);  // Make the snow fall
      //randomiseSnow(snowSpeed);           // Make the snow do random shit    
    
        function genSnow() { // Generate the snow

            var snowArray = new Array(); // Intialisation and resets
            var buffer = "";
            var rand = 0;

            var snowflakes = ["■", ".", "•"]; // Different snow items
            var probability = [1, 3, 6]       // Each item has a probability
        
            for(i = 10; i > 0; i--){ // 10 list items
                buffer = "";
                buffer += "<li>";
                
                for(b = 82; b > 0; b--){ // 82 characters in a list
                    rand = Math.floor((Math.random() * 10)); // Pick from 0 to 10
                
                    if (rand <= probability[0]){ // Selection for the different probabilities                          
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
                
                snowArray.push(buffer); // Add list to the others
            }    
            
            $('#snowflake').html(snowArray).text(); // Update the site
            return snowArray;  
        }
    
        function fallingSnow(snowArray, snowSpeed) { // Falling snow 
            
            snowArray.splice(0, 0, snowArray[9]); // Insert the last line to the front of the list
            snowArray.splice(10, 1);              // Remove last line
                    
            $('#snowflake').html(snowArray).text(); // Update the site
            
            setTimeout(function() { fallingSnow(snowArray, snowSpeed) }, snowSpeed);
        }
    
        function randomiseSnow(snowSpeed) { // Randomised snow
            
            genSnow();
            setTimeout(function(){ randomiseSnow(snowSpeed) }, snowSpeed);
            
        }

        var likeness = -1;

        $('#input-buttons>li').click( function() {
            
            $('#input-buttons>li').removeClass('selected'); // Reset all selections
            likeness = $(this).html(); // Grab text from button pressed
            var number = Number(likeness) + 1; // Add one for indexing
            $('#input-buttons>li:nth-child(' + number + ')').addClass('selected'); // Add style to the button selected
            
        });
    
        var name = "";
        var animationSpeed = 1000 // How fast it scrolls

        $('#go').click(function(){
           
            name = $('#input-name').val().toString();  // Get the name
            
            if (name == ""){ // If they enter nothing
                alert("Your didn't enter a name!?");
            }
            else if (likeness == -1){ // If they don't select a 'likeness'
                alert("You didn't select how much Santa likes you!");
            }         
            else{
                 // How fast it should scroll
                $('#name').text(name);
                $('.card, .card-back, #toTheTop').fadeIn(10);
                $('.card section').show();
                $('html, body').animate({scrollTop: 700}, animationSpeed); // Scroll to 750px from the top               
                setTimeout(function() { $('.card').addClass('opencard'); $('.card section').delay(1000).hide(); }, 1500); // 'Open' the card   
            }
            
            event.preventDefault(); // Stop button's normal behaviour
        });
        
        $('#toTheTop').click(function(){
            
            setTimeout(function() { $('.card').removeClass('opencard') }, 2500); // 'Close' the card   
            $('.card, .card-back').fadeOut(1000);  
            $('#toTheTop').fadeOut(100);
            $('html, body').animate({scrollTop: 10}, 1000); // Scroll to the top
                    
            event.preventDefault(); // Stop button's normal behaviour            
        });
        
        $('#card-selection ul li input').click(function(){
            
            var selection = $(this).attr('value'); // Get value of button selected
            $('#card-selection ul li input').removeClass('selected'); // Reset
            $(this).addClass('selected'); // Add .selected to selected button
            
            if (selection == 'Snowman'){ // If 'Snowman' is selected
                $('.card').html('<section class="snowman"><ul><li>••</li><li></li><li></li><li>• • •</li><li></li><li></li></ul>');
                $('.card').addClass('alternate');
            }else{ // If 'Christmas Tree' is selected
                $('.card').html('<section class="tree"><ul><li id="starred"></li><li>•</li><li>•</li><li></li><li></li><li></li></ul></section>');
                $('.card').removeClass('alternate');
            }
           
        });
    
 });
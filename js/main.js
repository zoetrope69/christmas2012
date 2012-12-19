$(document).ready(function() {
        function genSnow() {

                var buffer = "";
                var rand = 0;

                //Gen that snow anti-blanco
                var snowflakes = [".", ".", ".",".", ".", ".", ".", ".", ".", ".", "•", "•", "•", "•", "•", "•", "■"];
                for(i = 10; i > 0; i--){
                        buffer += "<li>";
                        for(b = 82; b > 0; b--){
                                rand = Math.floor((Math.random()* snowflakes.length));                                
                                buffer += snowflakes[rand];
                        }
                        buffer += "</li>";
                }               
               
                //Lets just slap them there into the page now.
               
                $('#snowflake').html(buffer).text();

                //MAKE RANDOM FUN TIME                    
                setTimeout(function(){genSnow()}, 250);
       
        }

        var likeness = 0;

        $('#input-buttons>li').click( function() {

            $('#input-buttons>li').removeClass('selected');
            likeness = $(this).html();
            var number = Number(likeness) + 1;
            $('#input-buttons>li:nth-child(' + number + ')').addClass('selected');

        });

        $('#go').click(function(){

            for(i = 1; i < 7; i++){
            out = $('#input-buttons>li:nth-child(' + i + ')').css('.sign .front .item ol li#selected');
            console.log(out);
            }
            //Grab them vals
            name = $('#input_name').val().toString();          

            alert('Your name is: ' + name + '. Zac likes you: ' + likeness + ' out of 5.');
            //Stop the button from doing 
            return false;
        });

        genSnow();       

 });
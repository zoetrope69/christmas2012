$(document).ready(function() {
        function genSnow() {

                var buffer = "";
                var rand = 0;

                //Gen that snow anti-blanco
                var snowflakes = [".", ".", ".",".",
                                  ".", ".", ".", ".",
                                  ".", ".", "•","•","•",
                                  "•", "•", "•", "■"];
                for(var i=10;i>0;i--){
                        buffer += "<li>";
                        for(var b=82;b>0;b--){
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

        genSnow();

       

 });
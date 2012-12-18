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

        //
      
        $('#input_buttons>li:nth-child(1)').click(function(){            
            $('#input_buttons>li').removeClass('selected');
            $('#input_buttons>li:nth-child(1)').addClass('selected');
            button = 0;
        });
        $('#input_buttons>li:nth-child(2)').click(function(){            
            $('#input_buttons>li').removeClass('selected');
            $('#input_buttons>li:nth-child(2)').addClass('selected');
            button = 1;
        });
        $('#input_buttons>li:nth-child(3)').click(function(){            
            $('#input_buttons>li').removeClass('selected');
            $('#input_buttons>li:nth-child(3)').addClass('selected');
            button = 2;

        });
        $('#input_buttons>li:nth-child(4)').click(function(){            
            $('#input_buttons>li').removeClass('selected');
            $('#input_buttons>li:nth-child(4)').addClass('selected');
            button = 3;

        });
        $('#input_buttons>li:nth-child(5)').click(function(){            
            $('#input_buttons>li').removeClass('selected');
            $('#input_buttons>li:nth-child(5)').addClass('selected');
            button = 4;

        });
        $('#input_buttons>li:nth-child(6)').click(function(){            
            $('#input_buttons>li').removeClass('selected');            
            $('#input_buttons>li:nth-child(6)').addClass('selected');
            button = 5;
        });

        $('#go').click(function(){

            for(i=1;i<7;i++){
            out = $('#input_buttons>li:nth-child('+i+')').css('.sign .front .item ol li#selected');
            console.log(out);
            }
            //Grab them vals
            name = $('#input_name').val();

            alert(name+button);
            //Stop the button from doing 
            return false;
        });



        genSnow();

       

 });
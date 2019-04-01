var app = Sammy('#main', function() {
    
        this.get('#/', loadTurnList);
        
        function loadTurnList(){
            $( "#main" ).load( "templates/turns/turn-list.html");
        }
    });
    
    app.run('#/');
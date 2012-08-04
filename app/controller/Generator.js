Ext.define('Aureliux.controller.Generator', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
          gen : '#fragGenerator'  
        },
        control: {
           
        }
    },
    init: function(){
		    	
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.getGen().element.on({ 
        	swipe: function(deets){
        		if(deets.direction == "right" || deets.direction == "down"){
        			nextEntry();
        		} else {
        			previousEntry();
        		}
        	},
    		scope: this
    	});
    },
   test : function(){
   	console.log("Hi....");
   }
});
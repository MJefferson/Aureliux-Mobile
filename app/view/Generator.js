Ext.define('Aureliux.view.Generator', {
	extend: 'Ext.Panel',
	xtype: 'generator',
	config: {
	    title: 'Generator',
	    id: 'fragGenerator',
	    iconCls: 'compose',
		cls: 'generatorcontainer',
	    styleHtmlContent: true,
	    scrollable: false,
	
	    items: [{
	        docked: 'top',
	        xtype: 'titlebar',
	        title: 'Aureliux',
	        items: [
		        {
		            iconCls: 'add',
		            iconMask: true,
		            align: 'right',
		            handler: saveInstance
		        }
	        ]
	    },
	    {
	    	docked: 'top',
	    	xtype: 'toolbar',
	    	
	    	layout: {
	    		pack: 'center'
	    	},
	    	items: [
	    	{
	    		text: 'alpha',
	    		handler: function(){
    				setLens("alpha");
    				nextEntry();
	    		}
	    	},
	    	{
	    		text: 'beta',
	    		handler: function(){
	    			setLens("beta");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'gamma',
	    		handler: function(){
	    			setLens("gamma");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'delta',
	    		handler: function(){
	    			setLens("delta");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'eps',
	    		handler: function(){
	    			setLens("epsilon");
	    			nextEntry();
	    		}
	    	}
	    	]
	    }
	    ],
	
	    html: [
	        "<div id='phrase-container' style='width: 250px; height: 250px; background-color: #333; padding: 10px; margin: 0 auto; border: 1px solid white;'><h2 id='phrase' style='font-size: 1em'>freeze out the moroccan dirham</h2></div>"
	    ].join("")
   }
});
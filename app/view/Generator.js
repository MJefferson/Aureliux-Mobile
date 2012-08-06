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
	    	baseCls: 'lens-bar',
	    	layout: {
	    		pack: 'center'
	    	},
	    	defaults: {
	    		baseCls: 'lens-button'
	    	},
	    	items: [
	    	{
	    		text: 'a',
	    		handler: function(){
    				setLens("alpha");
    				nextEntry();
	    		}
	    	},
	    	{
	    		text: 'b',
	    		handler: function(){
	    			setLens("beta");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'g',
	    		handler: function(){
	    			setLens("gamma");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'd',
	    		handler: function(){
	    			setLens("delta");
	    			nextEntry();
	    		}
	    	},
	    	{
	    		text: 'e',
	    		handler: function(){
	    			setLens("epsilon");
	    			nextEntry();
	    		}
	    	}
	    	]
	    }
	    ],
	
	    html: [
	        "<div id='phrase-container' style='width: 250px; height: 250px; background-color: white; padding: 10px; margin: 0 auto; border: 1px solid #FFF;'><h2 id='phrase' style='font-size: 1em'>freeze out the moroccan dirham</h2></div>"
	    ].join("")
   }
});
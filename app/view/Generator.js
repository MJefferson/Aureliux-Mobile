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
	        title: 'Aureliux'
	    },
	    {
	    	docked: 'top',
	    	xtype: 'toolbar',
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
	    		text: 'epsilon',
	    		handler: function(){
	    			setLens("epsilon");
	    			nextEntry();
	    		}
	    	}
	    	]
	    }
	    ],
	
	    html: [
	        "<h2 id='phrase' style='font-size: 4em'>freeze out the moroccan dirham</h2>"
	    ].join("")
   }
});
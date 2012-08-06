Ext.define("Aureliux.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
		ui: 'lens-bar',
        items: [
        	{
        		xtype: 'generator'
	        },
            {
                title: 'Feed',
                iconCls: 'star',
				xtype: 'list',
                store: {
		        	model: 'Aureliux.model.Instance',
		        	id: 'instanceStore',
			        proxy: {
			            type: 'jsonp',
			            url : 'http://philolobot.com:3005/instances.json',
			            reader: {
			                type: 'json',
			                rootProperty: 'Results'
			            }
		           },
		           autoLoad: true
		        },
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Global Feed'
                    }
                ],
                itemTpl: '{phrase}',
                plugins: [
			        {
			            xclass: 'Ext.plugin.PullRefresh',
			            pullRefreshText: 'Pull down to refresh'
			        },
			        {
			            xclass: 'Ext.plugin.ListPaging'
			        }
			    ]
            }
        ]
    }
});

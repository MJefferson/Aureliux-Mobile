Ext.define('Aureliux.store.AlphaFragment', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Aureliux.model.Fragment',
		storeId: 'alphaStore',
		listeners : {
			'refresh' : onFragmentLoad
		},
		proxy: {
            type: 'jsonp',
            url : 'http://philolobot.com:3005/alpha.json',
            reader: {
                type: 'json'
            }
        }
	}
	
})

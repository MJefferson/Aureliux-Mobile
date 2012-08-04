Ext.define('Aureliux.store.BetaFragment', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Aureliux.model.Fragment',
		storeId: 'betaStore',
		listeners : {
			'refresh' : onFragmentLoad
		},
		proxy: {
            type: 'jsonp',
            url : 'http://philolobot.com:3005/beta.json',
            reader: {
                type: 'json'
            }
        }
	}
	
})

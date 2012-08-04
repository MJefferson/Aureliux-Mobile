Ext.define('Aureliux.store.GammaFragment', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Aureliux.model.Fragment',
		storeId: 'gammaStore',
		listeners : {
			'refresh' : onFragmentLoad
		},
		proxy: {
            type: 'jsonp',
            url : 'http://philolobot.com:3005/gamma.json',
            reader: {
                type: 'json'
            }
        }
	}
	
})

Ext.define('Aureliux.store.EpsilonFragment', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Aureliux.model.Fragment',
		storeId: 'epsilonStore',
		listeners : {
			'refresh' : onFragmentLoad
		},
		proxy: {
            type: 'jsonp',
            url : 'http://philolobot.com:3005/epsilon.json',
            reader: {
                type: 'json'
            }
        }
	}
	
})

Ext.define('Aureliux.store.DeltaFragment', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Aureliux.model.Fragment',
		storeId: 'deltaStore',
		listeners : {
			'refresh' : onFragmentLoad
		},
		proxy: {
            type: 'jsonp',
            url : 'http://philolobot.com:3005/delta.json',
            reader: {
                type: 'json'
            }
        }
	}
	
})

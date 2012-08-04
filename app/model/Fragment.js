Ext.define('Aureliux.model.Fragment', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'uid', type: 'int'},
            {name: 'phrase', type: 'auto'}
        ]
    }
});
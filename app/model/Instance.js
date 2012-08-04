Ext.define('Aureliux.model.Instance', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'uid', type: 'int'},
            {name: 'phrase', type: 'auto'},
            {name: 'lens', type: 'auto'},
            {name: 'tags', type: 'auto'},
            {name: '_id', type: 'auto'}
        ]
    }
});
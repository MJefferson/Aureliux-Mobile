Ext.application({
    models: ["Fragment", "Instance"],
	controllers: ["Generator"],
	stores: ["AlphaFragment", "BetaFragment", "GammaFragment", "DeltaFragment", "EpsilonFragment", "Instances"],
    name: 'Aureliux',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Generator'],
    
    eventPublishers: {
        touchGesture: {
            recognizers: {
                swipe: {
                    //this will include both vertical and horizontal swipe recognisers
                    xclass: 'Ext.event.recognizer.Swipe'
                }
            }
        }
    },

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Aureliux.view.Main'));
        newFragment();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

var meta = {};
var lens = "alpha";
var timeline = new Array();

function setLens(newLens){
	lens = newLens;
}

function newFragment(){
	Ext.data.StoreManager.lookup(lens + 'Store').load();
}

function addToHistory(obj){
	if(timeline.length <= 50 && timeline.indexOf(obj) == -1){
		timeline.push(obj);
	} else {
		timeline.shift();
		timeline.push(obj);
	}
}
	
function previousEntry(){
	
	if(timeline.length < 1){
		return false;
	}
	
	var position = timeline.indexOf(meta);
	
	if(timeline.length > 0 && position > 0 ){
		var previous = timeline[position-1];
		meta = previous;
		Ext.fly('phrase').setHtml(previous.phrase);
	} else if (position == -1 ){
		var previous = timeline[timeline.length-1];
		addToHistory(meta);
		meta = previous;
		Ext.fly('phrase').setHtml(previous.phrase);
	} else if (position == 0) {
		return false;
	} else {
		return false;
	}
	
}

function nextEntry(){
	var position = timeline.indexOf(meta);
	
	if (position > -1 && timeline.length > (position + 1)) {
		//load next timeline
		var next = timeline[position+1];
		Ext.fly('phrase').setHtml(next.phrase);
		meta = next;
		
	} else {
		newFragment();
	}
}

function onFragmentLoad(store, data, opts){
	console.log(store.getAt(0).get('phrase'));
	meta = store.getAt(0).raw;
	addToHistory(meta);
	Ext.fly('phrase').setHtml(store.getAt(0).get('phrase'));
}

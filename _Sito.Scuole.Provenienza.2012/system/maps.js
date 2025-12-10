
  google.load('earth', '1');
  function init() {
    google.earth.createInstance('map3d', initCB, failureCB);
  }
  function initCB(instance) {
    var ge = instance;
    ge.getWindow().setVisibility(true);
	ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
	
    var gex = new GEarthExtensions(ge);
    var tree = kmltree({
    	url: 'kml/unione.kml',
    	gex: gex,
    	setExtent: true,
    	mapElement: $('#map3d'),
    	element: $('#tree'),
    	setExtent: true
    });
    tree.load();
  }
  function failureCB(errorCode) {
    alert('failed to load plugin');
  }
  //$(document).ready(init);

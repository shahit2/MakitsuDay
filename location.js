var gps = require('wifi-location');
var mathjs = require('mathjs'),
math = mathjs();
gps.getTowers(function(err, towers){
	console.log(towers);
	macIdToSignal = getMacIdToSignal(towers);
	
	console.log(macIdToSignal);

});

function getMacIdToSignal (towers) {
	macIdToSignal = {};
	for (var key in towers) {
	  	var obj = towers[key];
	  	if (obj['ssid'] == "Basis-GUEST" || obj['ssid'] == 'basis1') {
	  		macIdToSignal[obj['mac']] = obj["signal_level"];
	  	}
  	}
  	return macIdToSignal;
}
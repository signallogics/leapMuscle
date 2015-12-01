var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),
    ledThumb,ledIndex,ledMiddle,ledRing,ledPinky,frame;
//
var ArduinoFirmata = require('arduino-firmata');
var arduino = new ArduinoFirmata().connect();
//
 

arduino.on('connect', function(){
  console.log("connect!! "+arduino.serialport_name);
  console.log("board version: "+arduino.boardVersion);
  
    var an = 255;
      
////////////////////////////////////////////////////

    ws.on('message', function(data, flags) {
        frame = JSON.parse(data); 
	//console.log(frame);
        if (frame.hands && frame.hands.length > 0) {
	
	var hand = frame.hands[0];
	var fingers = frame.pointables.length;
        console.log(fingers);
       	if (fingers ==5){
	    //console.log("five");
	    console.log("analog write 9 pin : " + an);	
	    arduino.analogWrite(3, 255);	
	    arduino.analogWrite(11, 0);			
}	else if (fingers <= 0){
	    arduino.analogWrite(3, 0);	
	    arduino.analogWrite(11, 255);					  
}
        }
///////////////////////
        else {
            //console.log("False");
        }
    });
});

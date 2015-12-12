var webSocket = require('ws'),
    ws = new webSocket('ws://127.0.0.1:6437'),frame;
var ArduinoFirmata = require('arduino-firmata');
var arduino = new ArduinoFirmata().connect();
var delay=1000;
var flag=1;
//
  arduino.on('connect', function(){
  console.log("connect!! "+arduino.serialport_name);
  console.log("board version: "+arduino.boardVersion);
////////////////////////////////////////////////////
    ws.on('message', function(data, flags) {
        frame = JSON.parse(data); 
	var fingers = frame.pointables.length;

	if (frame.hands && frame.hands.length > 0) {
	//if main
	//var hand = frame.hands[0];
	       console.log(fingers);
	       if (fingers==0 ){
	  		
		    arduino.analogWrite(3, 255);	
		    arduino.analogWrite(11, 0);	
}
	       else if(fingers <= 3){ 
			//else if main			 		
		 arduino.analogWrite(3, 0);	
		 arduino.analogWrite(11,255);
		}		
 	     
	      else if(fingers <=5){ 
			//else if main			 		
		 arduino.analogWrite(3, 0);	
		 arduino.analogWrite(11,255);
		}
		
		


}//if main
///////////////////////
        
    });
});

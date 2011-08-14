/*jslint maxerr:1000 */
/*
 * Project Soup
 * Copyright (c) 2009-2011 by Benjamin Bahrenburg All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
if(typeof('demo')==='undefined'){
	var demo={};	
}
Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
Ti.Geolocation.preferredProvider = "gps";
Ti.Geolocation.purpose = "GPS access for testing";
Ti.Geolocation.headingFilter = 90;
Ti.Geolocation.distanceFilter = 10;
if (Ti.Geolocation.hasCompass){
	//  TURN OFF ANNOYING COMPASS INTERFERENCE MESSAGE
	Ti.Geolocation.showCalibration = false;
}
	
demo.getCurrentCoordinates =function (callback){
		var results = {success:false};
		
		if(callback===null){
			results.success=false;
			results.message="No callback method provided";
			return results;
		}		
		Ti.Geolocation.getCurrentPosition(function(e){
			if (!e.success || e.error){
				results.success=false;
				results.message=e.code;
				callback(results);	
				return;
			}
			
			if((e.coords.longitude===undefined)||(e.coords.longitude===null)||
			  (e.coords.latitude===undefined)||(e.coords.latitude===null)){
				results.success=false;
				results.message="Invalid coordinate information provided by device";
				callback(results);	
				return;				
			}
			
			results.success=true;			
			results.longitude = e.coords.longitude;
			results.latitude = e.coords.latitude;
			results.altitude = e.coords.altitude;
			results.heading = e.coords.heading;
			results.accuracy = e.coords.accuracy;
			results.speed = e.coords.speed;
			results.timestamp = e.coords.timestamp;
			results.altitudeAccuracy = e.coords.altitudeAccuracy;
			callback(results);	
		
		});		
};
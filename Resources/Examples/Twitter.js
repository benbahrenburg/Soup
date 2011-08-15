/*jslint maxerr:1000 */
/*
 * Project Soup
 * Copyright (c) 2009-2011 by Benjamin Bahrenburg All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
var demo ={win:Ti.UI.currentWindow};

(function(){
	demo.win.orientationModes = [
		Ti.UI.PORTRAIT,
		Ti.UI.UPSIDE_PORTRAIT
	];
	
	//If we are iOS give the user a close button
	if (Ti.Platform.name !== "android"){
		var done = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.DONE
		});
		demo.win.rightNavButton=done;
		done.addEventListener('click', function(){
			demo.win.close();
		});		
	} 
	
	var bFind = Titanium.UI.createView({top:5,backgroundImage:'../Images/Buttons/search.png',height:40,width:50,right:0});
	demo.win.add(bFind);

	var txtTopic = Titanium.UI.createTextField({
		hintText:'Optional Search Term',
		height:40,
		left:0,
		top:5,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
		width:(Ti.Platform.displayCaps.platformWidth)-60,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType:Ti.UI.RETURNKEY_SEARCH
	});

	demo.win.add(txtTopic);

	var tableview = Ti.UI.createTableView({top:60});
	demo.win.add(tableview);
	
	//For this example we need some geo functions
	//To do this we're bringing in a small library to help
	Ti.include('geo.js');
	
	//Bring in the Twitter commonjs library
	var twitter = require('SoupProviders/Twitter/soup.twitter');
	
	//We don't need any API Keys so we can go directly into the search	
	function mySearchCallback(results){
		if(!results.success){
			alert("Error encountered " + results.message);
		}else{
			//We're going to loop and show the data in a tableview
			var dataSet = [];
			var iLength = results.content.length;
			var iLoop=0;
			for (iLoop=0;iLoop < iLength;iLoop++){
				dataSet.push({title:results.content[iLoop].name + ' ' + results.content[iLoop].text});
			}			
			tableview.setData(dataSet);
		}
	};
	function myCoordinateCallback(results){
		if(!results.success){
			alert("We've got an error " + results.message);
		}else{
			//We now can start to do our search
			
			//Step 1 We build our criteria
			var mySearch ={
				latitude:results.latitude,
				longitude:results.longitude
			};
			//If we have a term we can added it as well
			//If no value is provided it will search for everything
			if(txtTopic.value.length>0){
				mySearch.term=txtTopic.value;
			}
			
			//Since each provider takes different criteria we
			//call this function to convert the generic parameters into
			//Yelp specific, this avoids you have to branch your code
			//if you use several providers
			var myProviderSearchCriteria = twitter.buildSearchCriteria(mySearch);
			
			//Let's add a provider specific value
			//This adds a radius in km that is specific to twitter
			//The provider will add it into our query
			myProviderSearchCriteria.radius="1km";
			
			//We are now ready to search. We just pass in the criteria and a callback
			twitter.searchContent(myProviderSearchCriteria,mySearchCallback);
		}
	};
	
	//Now we have the Content Provider ready to go. 
	//Check the button code for the search details	
	bFind.addEventListener('click', function(){	
		txtTopic.blur(); //Remove the keyboard while we search
		
		//We start our search by first getting the 
		//device coordinates. This takes a callback function
		demo.getCurrentCoordinates(myCoordinateCallback);
	});
	
	//If the user presses the return button in the search box
	//We'll start the search as just the same as if they pressed the button
	txtTopic.addEventListener('return', function(){
		txtTopic.blur(); //Remove the keyboard while we search
		
		//We start our search by first getting the 
		//device coordinates. This takes a callback function
		demo.getCurrentCoordinates(myCoordinateCallback);			
	});		
})();

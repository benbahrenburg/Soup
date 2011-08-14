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

var data = [
	{title:'Yelp Provider', hasChild:true, example_url:'Yelp.js'},
	{title:'Yahoo Local Provider', hasChild:true, example_url:'YahooLocal.js'},
	{title:'FourSquare Provider', hasChild:true, example_url:'FourSquare.js'},
	{title:'Twitter Provider', hasChild:true, example_url:'Twitter.js'}
];

var tableview = Ti.UI.createTableView({
	data:data
});

demo.win.add(tableview);

// create table view event listener
tableview.addEventListener('click', function(e){
	var win = Titanium.UI.createWindow({
		url:e.rowData.example_url,
		title:e.rowData.title,
		backgroundColor:'#fff',
		navBarHidden:false
	});
	
	win.open();
});

})();
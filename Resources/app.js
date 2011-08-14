/*jslint maxerr:1000 */
/*
 * Project Soup
 * Copyright (c) 2009-2011 by Benjamin Bahrenburg All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
Ti.UI.setBackgroundColor('#000');
Ti.UI.iPhone.statusBarStyle = Ti.UI.iPhone.StatusBar.OPAQUE_BLACK;

//Create main app namespace
var demo={};

demo.mainWindow = Titanium.UI.createWindow({
	url:'Examples/main.js',
	backgroundColor:'#fff',
	title:'Soup Examples',
	navBarHidden:false
});


//Based on platfomr launch the App in a specific way
if(Ti.Platform.name!=='android'){
	var tabGroup = Ti.UI.createTabGroup();
	var tab1 = Ti.UI.createTab({window:demo.mainWindow});
    tabGroup.addTab(tab1); 
	// open tab group
	tabGroup.open();	
}else{
	demo.mainWindow.open();
}

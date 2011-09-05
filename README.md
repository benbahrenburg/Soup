# Soup - Titanium Content Providers Made Easy

Soup is a collection of stand alone content providers for Titanium mobile.  
Implemented in CommonJS format each provider allows you to quickly perform a Geolocation based search.

## Providers

Soup is designed to be a growing list of providers using a standard interface. Please find below the providers added by version. 

<b>Version 1</b>

* Yelp ( requires keys)

* YahooLocal ( requires keys)

* FourSqaure ( requires keys)

* Twitter ( no key needed)

<b>Check each provider folder for details on how to obtain api keys</b>

*<b>If you're interested in contributing, build your own provider and send a pull request</b>*

## Features

Each provider implements a standard interface as outlined below. This allows you used multiple providers, or switch between them without branching your calling logic.

<b>providerName</b>

Returns the provider's name such as Yelp, YahooLocal, etc

<b>providerVersion</b>

Returns the provider's version

<b>capabilities</b>

Capabilities gives a list of the capabilities of the content provider, such as the ability	to support radius filters or forward geo lookups

Capabilities Listed Are

* coordinateSearch : true/false
* locationTextSearch : true/false
* radiusSearch : true/false
* termSearch : true/false

<b>contentSetup</b> 

Many of the search APIs require API Key Information. This method can be used to set this information programmatically.

Please note this will be different for each search provider, the proper API key format is outlined in each providers readme file.

<b>contentSetupFromByFile</b>

Many of the search APIs require API Key Information. This method can be used to set this information by loading the api information from a file.

It is important to note the path provide should be from the RESOURCES directory ie it isn't a relative path.

Please note this will be different for each search provider, the proper API key format is outlined in each providers readme file.

<b>buildSearchCriteria</b>

This method provides an obstraction layer on top of each search providers criteria.

Pass an object with any of the following properties and we will create the native query format for you.

The criteria object can have any of the following:

	 {
		 latitude: (optional) put your latitude value in this property,
		 longitude: (longitude) put your latitude value in this property,
		 address: such as a city or street (if lat & lon are provide this is skipped),
		 radius : this is used to determine the search radius if the provider supports this,
		 term : narrow your by a specific term such as sushi
	 }
	 
If there are provider specific criteria just add them an additional property to the criteria object and Soup will include them for you.
	 
<b>searchContent</b>

This method performs the search and provides a collection to the callback method in the following format:

	success : true/false this provides an indicator if there is an error,
	message:  if there is a message this will tell us what it is,
	content: {
		 id: This is an unique int within the search results based on the order the results are returned
		 name: This is the name of the search value,
		 address: This is the address of the search value,
		 image_url : Image Url to be displayed,
		 phone: Phone number of the search result if applies otherwise is null,
		 web: Web Address of the search result if applies otherwise is null,
		 email: email address of the search result if applies otherwise is null,
		 site_link : links to the content providers site entry,
		 latitude: latitude of the search result,
		 longitude: longitude of the search result,
		 text : description or other text to be displayed,
		 date_info : if available date/time information associated with the search record,
		 raw_data : the full raw form data returned by the search provider's native API
	 }

*Missing values or those not supported by providers will be returned as null*

## Usage

To use Soup in your Titanium Mobile project please follow the below steps:

1. Check out the Examples folder for how to use each provider. There is a running sample on how to use each provider, but in many cases you need to obtain an api key
2. Some of the providers need API keys. Check the readme file in each provider directory for instructions on what is needed for each provider.
3. Copy the providers into your project and use them just like any other CommonJS library


## CommonJS Libraries

All commonjs files are in the Resources/SoupProviders project folder.

* FourSquare [(SoupProviders/FourSquare/soup.foursquare.js)](https://github.com/benbahrenburg/Soup/tree/master/Resources/SoupProviders/FourSquare)

* Twitter [(SoupProviders/Twitter/soup.twitter.js)](https://github.com/benbahrenburg/Soup/tree/master/Resources/SoupProviders/Twitter)

* Yahoo Local [(SoupProviders/YahooLocal/soup.yahoolocal.js)](https://github.com/benbahrenburg/Soup/tree/master/Resources/SoupProviders/YahooLocal)

* Yelp! [(SoupProviders/Yelp/soup.yelp.js)](https://github.com/benbahrenburg/Soup/tree/master/Resources/SoupProviders/Yelp)


<b>Check each provider folder for details on how to obtain api keys</b>

## Issues

Please report all issues on the GitHub [issue tracker for Soup](https://github.com/benbahrenburg/Soup/issues).

## Authors

  * Ben Bahrenburg [@benCoding](http://twitter.com/benCoding)

## License ##

Project Soup is licensed under the terms of the Apache Public License. Please see the LICENSE included with this distribution for details.

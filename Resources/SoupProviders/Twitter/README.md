# Soup - Twitter Provider

The Twitter Soup provider let's you search FourSqaure using a standard provider interface.

This provider only uses APIs that do not require authenication. Although they do not require authenication they are rate limited so be careful.

Check the Examples directory for how to use this provider.

Before you get started make sure you read the Twitters terms of service to make sure your usage is allowed.

## Get More Twitter Information

You can learn more about Twitter's APIs at [dev.twitter.com](https://dev.twitter.com)

## Features

The Twitter Soup provider implements a standard interface as outlined below. This allows you used multiple providers, or switch between them without branching your calling logic.

<b>providerName</b>

Returns the provider's name such as Twitter, etc

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

The Twitter APIs that the provider is using does not require an API Key or Authentication. Any information passed into these methods will be ignored.

Although no authentication is required, these APIs do have a rate limit so be careful and check your usage.

<b>contentSetupFromByFile</b>

The Twitter APIs that the provider is using does not require an API Key or Authentication. Any information passed into these methods will be ignored.

Although no authentication is required, these APIs do have a rate limit so be careful and check your usage.

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

## Issues

Please report all issues on the GitHub [issue tracker for Soup](https://github.com/benbahrenburg/Soup/issues).

## Authors

  * Ben Bahrenburg [@benCoding](http://twitter.com/benCoding)

## License ##

Project Soup is licensed under the terms of the Apache Public License. Please see the LICENSE included with this distribution for details.
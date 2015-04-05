# Graph API

This Meteor package allows you to conveniently use Facebooks [Graph API](https://developers.facebook.com/docs/graph-api) on the server.


## Quickstart

To get started simply create a new instance like this:

```js

facebook = new GraphAPI();

```

Since this core package contains no default functionality, you will have to add a package providing some actual methods.
For example `meteor add dferber:graph-api-get-profile-picture`.
Now, you can use the instance to make requests to the Graph API.
For example, you can get a users profile picture whose Facebook User Id is stored in `fbUserId` like this:

```js

var profilePicture = facebook.getProfilePicture(fbUserId);

if (profilePicture)
	console.log(profilePicture.url);

```


## Using credentials

There are [different types of access tokens](https://developers.facebook.com/docs/facebook-login/access-tokens) for Facebook.
Some edges of the Graph API do not require any access token.

Here, you see how to use an App Access Token.
Other types of tokens are not implemented yet. Send a PR if you need one.

```js

facebook = new GraphAPI({
	appId: <your apps id>,
	secret: <your apps secret>
});

```

## Choosing a Graph API version

```js

facebook = new GraphAPI({
	version: 'v2.2'
});

```


## Extending the GraphAPI

This package is written in a way that lets you easily extend its funcitonality.
The idea is that there will be lots of packages for commonly used tasks.
Simply extend the GraphAPI prototype with your desired capability.

See [the getProfilePictureUrl package](https://github.com/dferber90/meteor-graph-api-get-profile-picture)
for an example on how to do it.


## Existing extensions

This is a list of existing extensions of this Graph API package.
If you created your own and you published it to atmosphere - and you should ;) - then
simply create a PR for this README.md and add your package below.


* [dferber:graph-api-get-profile-picture](https://github.com/dferber90/meteor-graph-api-get-profile-picture)



# License
The MIT License (MIT)

Copyright (c) 2015 Dominik Ferber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

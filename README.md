# Graph API

This package allows you to conveniently use [The Graph API](https://developers.facebook.com/docs/graph-api) on the server.


## Quickstart

To get started simply create a new instance like this:

```js

facebook = new GraphAPI();

```

Since this core package contains no default functionality, you will have to add a package providing some actual functions.
For exapmle `meteor add dferber:graph-api-get-profile-picture-url`.
Now, you can use the new variable to make requests to the Graph API.
For example, you can get a users profile picture whose Facebook User Id is stored in `fbUserId` like this:

```js

var profilePictureUrl = facebook.getProfilePictureUrl(fbUserId);

```


## Using credentials

There are [different types of access tokens](https://developers.facebook.com/docs/facebook-login/access-tokens) for Facebook.
Here, you see how to use a Page Access Token.

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
Simply extend the GraphAPI prototype with your desired capability.

See [the getProfilePictureUrl package](https://github.com/dferber90/meteor-graph-api)
for an example on how to do it.


## Existing extensions

This is a list of existing extensions of this Graph API package.
If you created your own and you published it to atmosphere - and you should ;) - then
simply create a PR for this README.md and add your package below.


* [dferber:graph-api-get-profile-picture-url](https://github.com/dferber90/meteor-graph-api-get-profile-picture-url)

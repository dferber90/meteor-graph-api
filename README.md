# Graph API

This package allows you to conveniently use [The Graph API](https://developers.facebook.com/docs/graph-api) on the server.


## Quickstart

To get started, simply provide your credentials, like this:

```

facebook = new GraphAPI({
	appId: <your apps id>,
	secret: <your apps secret>
});

```

Now, you can use the new variable to make requests to the Graph API.
For example, you can get a users profile picture like this:

```

var profilePictureUrl = facebook.getProfilePictureUrl(<fbUserId>);

```


## Extending the GraphAPI

This package is written in a way that lets you easily extend its funcitonality.
Simply extend the GraphAPI prototype with your desired capability.

The `getProfilePictureUrl` is implemented like this:

```

GraphAPI.prototype.getProfilePictureUrl = function (userId) {
	var response = this.get([userId, 'picture'], {
		redirect: false
	});

	return response.ok() ? response.data.data.url : false;
};

```

Here, `this.get` starts a new HTTP GET request to the Graph API.
The first parameter is an array which will be transformed into the Graph API edge.
For example `[userId, 'picture']` will be transforemd to `/<userId>/picture`, so
the request will be made to `https://graph.facebook.com/v2.2/<userId>/picture`.




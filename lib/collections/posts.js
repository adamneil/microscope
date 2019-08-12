Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function (postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            text: String
        });

        var user = Meteor.user();

        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    }
});

Posts.allow({
    update: function (userId, post) { return ownsDocument(userId, post); },
    remove: function (userId, post) { return ownsDocument(userId, post); }
})

Posts.deny({
    update: function(userId, post, fieldNames) {
        // may only edit the following two fields: 
        return (_.without(fieldNames, 'title', 'text').length >0 );
    }
});
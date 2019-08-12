Template.postSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var post = {
            title: $(e.target).find('[name=title]').val(),
            text: $(e.target).find('[name=text]').val(),
        };

        Meteor.call('postInsert', post, function (error, result) {
            //display the error to the user and abort
            if (error)
                return alert(error.reason);

            //show result but route anyway
            if (result.postExits)
                return ('This link has already been posted');
        });
        Router.go('postsList');
    }
});
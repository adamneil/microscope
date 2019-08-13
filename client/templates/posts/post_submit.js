Template.postSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      text: $(e.target).find('[name=text]').val(),
      image: imagesURL
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
  },

});

Template.postSubmit.events({
  'change .blogImage': function(event) {
    FS.Utility.eachFile(event, function (file) {
    Images.insert(file, function (err, fileObj) {
      if (err) {
        //handle error
      } else {
        // handle success
        return imagesURL = "/cfs/files/images/" + fileObj._id
      };
    })
  });
}
})

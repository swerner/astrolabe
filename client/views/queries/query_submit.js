Template.querySubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var query = {
      title: $(event.target).find('[name=title]').val(),
      query: $(event.target).find('[name=query]').val(),
      categories: $(event.target).find('[name=categories]').val().replace(/, /, ",").split(",")
    }

    Meteor.call('query', query, function(error, id){
      if (error) {
        Meteor.Errors.throw(error.reason);
      }

      Meteor.Router.to('queriesList');
    });
  }
});

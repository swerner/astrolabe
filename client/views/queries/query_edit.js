Template.queryEdit.helpers({
  queryItem: function(){
    return Queries.findOne(Session.get("currentQueryId"));
  },
  queryCategories: function(){
    query = Queries.findOne(Session.get('currentQueryId'));
    if(typeof query.categories != "undefined" && query.categories.length > 0){
      return query.categories.join(", ");
    } else {
      return ""
    }
  }
});

Template.queryEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentQueryId = Session.get("currentQueryId");

    var queryProperties = {
      title: $(event.target).find('[name=title]').val(),
      query: $(event.target).find('[name=query]').val(),
      categories: $(event.target).find('[name=categories]').val().replace(/, /, ",").split(",")
    };

    Queries.update(currentQueryId, {$set: queryProperties}, function(error){
      if(error) { console.log(error); } else{
        Meteor.call('getQueryValue', Queries.findOne(currentQueryId), function(error, result){
          if(error) { console.log(error); } else {
            Meteor.Router.to("queriesList");
          }
        });
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this query?")) {
      var currentQueryId = Session.get("currentQueryId");
      Queries.remove(currentQueryId);
      Meteor.Router.to("queriesList");
    }
  }
});

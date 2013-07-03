Meteor.startup(function(){
  _.each(Queries.find().fetch(), function(element){
    Meteor.call('getQueryValue', element, function(error, result){
      if(error){
        console.log(error.reason)
      }
    });
  });
});

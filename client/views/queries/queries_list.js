Template.queriesList.helpers({
  queries: function(){
    return Queries.find();
  }
});

function updateQueryValue(query) {
  if(queryTimers[query._id] !== undefined){
    clearTimeout(queryTimers[query._id]);
  }

  Meteor.call('getQueryValue', query, function(error, result){
    if (error) {
      return alert(error.reason);
    } else {
      console.log(query._id);
      queryTimers[query._id] = setTimeout(function(){
        console.log("Updating query value of: ", query.title);
        updateQueryValue(query);
      }, 60000);
    }
  });
};

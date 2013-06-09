Meteor.Router.add({
  "/": "queriesList",
  "/submit": "querySubmit",
  '/queries/:_id/edit': {
    to: "queryEdit",
    and: function(id) { Session.set('currentQueryId', id); }
  },
  "/query_categories": "queryCategoryPath"
});

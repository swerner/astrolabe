Package.describe({
  summary: "Interact with a postgres database from Meteor"
});

Npm.depends({
  'pg': '1.1.3'
});

Package.on_use( function(api){
  api.add_files("postgres.js", ["server"])
});

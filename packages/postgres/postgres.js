pgConnString = process.env.STATS_DASHBOARD_DB;
pg = Npm.require('pg');

Meteor.startup(function(){
  pgClient = new pg.Client(pgConnString);
  pgClient.connect();
});

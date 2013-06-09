Site-stats is a real-time database analytics dashboard built with [Meteor](http://meteor.com)

**WARNING: Site-stats is not meant to be run outside of your local network**

#How to use
- Set an environment variable to your running postgres database (ex. "postgres://localhost/yourDatabaseName")
- Run `mrt` from the project's directory
- Create a few queries
- Watch them update themselves

#Features
- Runs and displays any count query
- Automatically updates each query every minute or when a query-box on the homepage is clicked.

#To Do
- Integration with external services (google analytics, clicky, kissmetrics, etc)
- Automatically updating date range queries (ex. Number of new users today)
- View more detail of a single query (ex. Graph of the number of new users every day for a time range)
- Calculations of one query with another (ex. Number of new users today / number of unique visitors)
- Set your own time interval for your query
- Interface for creating queries that isn't based off of SQL
- Support for other SQL data-stores that aren't postgres
- Support for more types of queries
- Better visual design
- Use pg LISTEN/NOTIFY callbacks instead of setTimeout

##In Progress
- Grouping queries into different category pages
- Come up with a good way to begin auto-updating on startup

##Done
- Better name, something space themed
- Support for editing queries
- Support for deleting queries

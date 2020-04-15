
you're developing locally
you can serve a web app your machine
your-ip:3000 ---> serve up your express app
* you don't want to serve from your "dev" machine
	* you do more than serve a web app from your personal computer
	* you may be running other services
	* there has to be "public" access to your machine
* you install your application somewhere else
	* another physical server
	* shared hosting
	* cloud service 
		* aws, azure, etc. <--- 
		* heroku, beanstalk???
	* deploying on courant's servers <--- not as modern, but working w/ commandline and managin processes... is good thing (tm)
		* CentOS on a vm
* get your code on server
	* scp, sftp
	* rsync - that keeps two folders sync (could different machines)
	* use git in some way
		* simple "git clone yourepourl"
		* kinda "gaurantees" that code that graders can see is what's running
		* ^^^ whatever you have in repo is what's in production is good 
		* better (but we're not doing it)
			* different branches
			* continuous integration (tests, builds, reject commits on failed lint)
			* actual clone probably not a good idea (it comes with repo history)
			* ... package that up and plop on server
	* npm install dependencies
	* configuration - courant provides mongodb database: name is your username; you'll receive a password for it
		* don't hardcode username and password in `db.js`
		* db.js contains models, db connection string, etc.
		* mongoose.connect(mongodb://jversoza:mypass@localhost) 🙅‍♀️
			1. we don't want credentials in repository
			2. credentials are for one environment only
				* (* n where n is the number of services that your app requires... db, web, mail, etc.)
				* locally
				* production
				* perhaps different operating systems
				* testing environment / qa
				* staging
				* scripts to populate data or change "schema" (db migrations, fixture data)l
		* credentials should go in config file (ignored by git)
		* manually recreate on remote server
	* node app.js
		* somehow 1. run in background
		* 2. keep it running even if it crashes
		* macos launchtl
		* systemd
		* use forever to run service
	* graders don't have to install project - they just go url
		* manual code review
		* if they make something crash it'll restart

1. you'll receive your own port number
2. accessing cims servers (mfa... so duo app needed to log in)
3. if you need multiple services, just increment port number by




* 3rd milestone 
	* deploy <---
	* show some more progress
* quick review
	* script tags to have client side js code:
		* bottom of body (perceived faster load time)
		* external js files preferred
	* modifying elements (attributes, styles, classes, text)
	* creating new elements
	* selecting / finding elements
* events
* 7th hw
	* client side js


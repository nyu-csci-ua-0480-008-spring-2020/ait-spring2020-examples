componentDidMount() // defined this on class, this gets called when component "mounts"
// add background request
// axios
make api with express

app.get('/api/')

do what we did today

can you get data axios when page loads







daye
yian
yulong
rena
nisha

1. autograder
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
2. 1 pledge +3
3. 2 hof - 2









there's an api
it provides data u want
does not supply cors headers

how do you display data from that api
on your site


1. screen scraping, bulk downloading api data
	* check tos before doing this
	* gray area
2. same as 1, serve that using your own api
3. proxy requests


api w/ data u want <---- your own server <---- front end 
                   req                     req

bad server: phishy.server  <-- user

proxy: phishy.server
req will originate from phishy.server (no session id for some.good.domain)
thing u want data from: some.good.domain offers some api


* hw 7 due tonight!
* extra credit that counts towards hw only
* milestone 3 due tomorrow (w/ some grace period)
	* the deploy
* 1 last homework due after final project - grading will be generous
* we typically have labs, maybe 1 lab as quiz grade








AGENDA
=====
SOP
---
implemented on client
resources can only be accessed of domain, port and protocol for some set of resources
browser will preventing reading response
in sooome cases, it will prevent request outright



form....
csrf token <-- generated on the server... probably a hidden input in html
<input type="hidden" value="sometoken12345">

^^^ unique per page render (or perhaps sessions)

when you submit the form server checks against that token
tokens don't match, don't do what POST says to do
if tokens do much, continue with action

any form where you want to make sure that request is coming from a generated form
(rather than... an xhr request, or just some arbitrary client, like curl, netcat


1. server will generate token for form
2. route handler will check for token to verify it's coming from form

...we want to use shell script to access end point that has POST
ask for form first (through script), parse through response and get token
profit!!!!!

// in the context of a browser can i make request to form in background and read token
// SOP, in browser, prevents reading response from diff domain/protocol/port


SOP - blocks reading of response, implemented by client (browsers)
CORS - server will send headers that allow different origins access to resource
CSRF - one site making requests in the background to different origin, taking advantage of authenticated session
CSRF TOKEN - token in form to help mitigate CSRF (server checks against that token to determine whether or not request generated from form)
can't be read because sop







* put everything in external files
* fills up global name space
	* unless you create functions to enclose scope
* organizational structure present
* there were (are) competing module implementations on the front end
* modules
	* require
	* export
* ^^^ this style of working w/ modules is not present in client side js
* modules only recently available on browsers
* import (instead of require)
* but you can still export
	* type="module"





* AJAX Review
	* making background requests
		* xhr
		* use github api again
	* chat application
	* create our own api end point
* CORS, SOP
* (5 min) milestone, milestonek, extension, hw, logistics for last few classes

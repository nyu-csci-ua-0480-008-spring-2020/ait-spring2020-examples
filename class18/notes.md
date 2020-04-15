AGENDA

* exam results next weekend
	* lower the total points from ~82... ???
* auth
	* authn vs authz
	* authn - you are who you say you are
		* username and password <----
		* mfa 2fa... know and have (a phone w/ the duo app, and you know your password)
		* 3rd party verify you are who you say you are
	* ```
username: String,
password: String
{
	username: 'jversoza',
	password: 'cannotbehacked'
}
	* plain text bad!!!
		* there will likely be someone looking at your db
		* data leak
		* employee looking at sensitive information
	* encrypt <-- don't do this... two way (we can get the plain text back)
	* hash ... use current best practice (computing power, new algos) ... bcrypt
	* two hashes may be the same in database: 123aef32342 123aef32342
		* ??? they have the same password
		* common
	* add some salt to password... prepend or append some value (timestamp, randomly generated string) to password before hashing
	* salt must be stored in the db as well
	* registration flow:
		* user enters username and password
		* server checks if username exists
		* if it doesn't
			* generate salt
			* add salt to password
			* hash combo
			* store username, password + salt hash, salt in db
	* login?????
		* user enters username and password <--
		* check that username exists in db
		* username exists, and hash and salt present
			* add stored salt to incoming password
			* hash that ^^^^
			* compare hashes
	* ^^^ don't write, use some pre-built library
	* passport
	
tls/ssl
1. communication is private
	* messages are encrypted
	* symmetric key cryptography - faster
	* keys for that exchanged via asymmetric key cryptography
2. one of participants has proven identity 
	* (through some 3rd party issuing a certificate)
3. messages haven't been tampered with
	* 




```
* ssl/tls
* basic positioning
* frontend JavaScript











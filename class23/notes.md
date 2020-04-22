setInterval(f, ms) call f every ms
setTimeout(f, ms) call f once after ms
* chat example
	* urls that we expose
	* allow a frontend to make background requests
	* have a single page:

```
msg:|_____| name: |____| send

hello from joe
hi from aaron
we r talking about ajax from joe

GET /api/messages
POST /api/messages
```


	* messages stored in database
	* express api
	* it'll use mongodb to store messages
	* it'll serve messages as json
* ajax post


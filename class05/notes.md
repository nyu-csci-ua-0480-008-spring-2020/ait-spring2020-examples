GET /home HTTP/1.1
User-Agent: whatever
Host: foo.bar

HTTP/1.1 301 Moved Permanently
Location: /index.html

nc foo.bar 80
GET /index.html 




https://username:password@www.ilove.pizza/store1/orders/?toppings=extra-cheese 
http://www.ilove.pizza:8888/scripts/main.js             |
|		 |             |    |                           query string
protocol domain        |    path
                       port
https://username:password@www.ilove.pizza/store1/orders/#receipt
                                                        | fragment


200 ok good
3xx redirect
4xx client error 404 not found
* don't make request again unless you want same response
5xx server error
* perhaps try again... and may get diff status code









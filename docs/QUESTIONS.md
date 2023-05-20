### Questions
* `mongos` - What is mongos ? something : query roter. Vezi nu încurca cu `Compass`.
* Что такое репликация базы данных ?
* Как работать с `cache` ? (Redis -> Кэш надо хранить на оделеным сервере.). У кэш серверов обычна очень много оеративной памети. 
* `mongo --port 27017` Mongo Shell
* Nu știu exact ce trebuie de făcut ca să am așa rezultat. Într-un fel conectiunea la baza de date să fie aparte.
Что такое Cluster и нафига он нужен ?

```js
function connect_to_mongo () {
	var con_mongo = {
		database_name : 'music',
		host: 'localhost',
		login: 'Schedule93',
		password: "123",
		port: "localhost"
	};
}
```

* How to save `likes` and `dislikes` ? Maybe so :
```json
[
   {
      "user": "Nicolai Cushnir",
      "likes" : [ 
         "1" : {
            url : "http://",
            title : "Linkin Park Music"
         }
         "2" : {
            url : "http://",
            title : "Linkin Park Music"
         }
      ],
      "dislikes" : [
         url : "http://",
         title : "Morgenshtein - bla bla bla"
      ]
   },
   {
      "user" : "Rriana Smith"
   }
]
```

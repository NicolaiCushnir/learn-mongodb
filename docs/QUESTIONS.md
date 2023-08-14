### [return main page](../README.md)

### Questions MongoDB :
1. `mongos` - What is mongos ? something : query roter. Vezi nu încurca cu `Compass`.
2. Что такое репликация базы данных ?
3. Как работать с `cache` ? (Redis -> Кэш надо хранить на оделеным сервере.). У кэш серверов обычна очень много оеративной памети. 
4. Как сделать так, чтобы показать только одно определённое свойство, без конкретного оператора. Допустим мы хотим показать из базы только только ствойиство `watching_tags`
```js
db.users.find( {"watching_tags": "Rock Music"} );
```

5. `mongo --port 27017` Mongo Shell
6. Nu știu exact ce trebuie de făcut ca să am așa rezultat. Într-un fel conectiunea la baza de date să fie aparte, fișier nou.

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

7. How to save so i want `likes` and `dislikes` ?
8. Как работать с датой и времение в MongoDB ?
9. Что такое Cluster и нафига он нужен ?
10. Care este diferența dintre, operatori și simpli proprietăți? Fie de căutare fie de alt ceva.

### Extern links :
* link 1

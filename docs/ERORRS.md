### Return Main Page : 

### My Errors in MongoDB Shell :

* `db.users.find({ $or:[{name: "Nicolai Cushnir"}, {age: 29}] });` - Когда мы хотми создать запрос с несколька запросов. Этот оператор полезен когда мы хотим получить комбинирование значение. 

```js
console.log();
```

* `{$and:[{tags:"ssl"},{tags: "security"}]};`

```js
console.log();
```

* Vreau să fac update la toată colecția `users` adica să adaug propietatea `"hide": true;` Dar îmi dă err. MongoServerError: Cannot increment with non-numeric argument: {hide: true} $set

```js
db.users.updateMany({}, { $inc: { "hide": true } });
```

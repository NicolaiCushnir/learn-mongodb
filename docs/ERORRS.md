### Return Main Page : 

### My Errors in MongoDB Shell :

* **Nu Merge! Why???** `db.users.find({"reviews.name": "Jack Tomson"});`. (вложенные документы)

```js
{
  "_id": {
    "$oid": "644e97ed2bbfdce56a31b597"
  },
  "name_at_movie": "Fear and Hate",
  "created_year": 1974,
  "duration": {
    "hours": 3,
    "minutes": 12
  },
  "views": 14202,
  "genre": [
    "crime",
    "drama"
  ],
  "rating": 7.6,
  "reviews": [
    {
      "name": "Jack Tomson",
      "text": "Amazing movie"
    },
    {
      "name": "Madison Kavani",
      "text": "I also so think ..."
    }
  ]
}
```

* `db.users.find({ $or:[{name: "Nicolai Cushnir"}, {age: 29}] });` - Когда мы хотми создать запрос с несколька запросов. Этот оператор полезен когда мы хотим получить комбинирование значение. 

```js
console.log();
```

* `{$and:[{tags:"ssl"},{tags: "security"}]};`

```js
console.log();
```


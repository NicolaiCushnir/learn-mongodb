### Return Main Page : 

### Errors :

* `db.users.find({"reviews.name": "Jack"});`. Nuștiu de ce dar nu merge. Am încercat dar înzădar. Așa arată structura la document :

```js
{
  "_id": {
    "$oid": "644e749e40f95f57eeb1545e"
  },
  "registred": "18.12.2019",
  "name": "Lissa Smith",
  "gender": "female",
  "age": 16,
  "mail": "lissa_smith_@yahoo.com",
  "password": "{@!-lissa-!@}",
  "msg": [],
  "duration": {
    "hours": 2,
    "minutes": 34
  },
  "reviwes": [
    0,
    {
      "name": "Jack",
      "text": "amazing movie!"
    },
    1,
    {
      "name": "Tom",
      "text": "And I same think so that this movie is amazing."
    }
  ]
}
```

* `db.users.find({property: {$all: ["", ""]}});` - Operatorul $all este un array care contine toate elementele specifice. 

```js
console.log();
```
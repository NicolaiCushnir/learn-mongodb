1. `db.users.find( { tags: { $all: [ "appliance", "school", "book" ] } } );` - Operatorul $all este un array care contine toate elementele specifice. Parcă nu contezaă dacă `tags` property e in ghilimele sau fără.
1. So show the result. Pentru că eu am în baza de date MongoDB 2 rezultate cu acestă proprietate `tags`.

```js
[
  {
    _id: ObjectId("6432d6732a5b66cbc95ad2df"),
    registred: '03.01.2016',
    name: 'Alexandru Ambros',
    gender: 'male',
    age: 39,
    mail: 'alexandru_ambros@yahoo.com',
    password: 'alexandru_ambros_la_putere',
    tags: [ 'school', 'book', 'bag', 'headphone', 'appliance' ],
    msg: []
  },
  {
    _id: ObjectId("643411f018d3ab50a5c881e5"),
    registred: '19.12.2015',
    name: 'Nicolai Cushnir',
    gender: 'male',
    age: 29,
    mail: 'cushnirnicolai@gmail.com',
    password: 'node.js_developer_2009',
    tags: [ 'school', 'book', 'bag', 'headphone', 'appliance' ],
    likes: [ 'Here must be link to all likes, with User Nicolai Cushnir. ' ],
    dislikes: [ 'Here must be link to all dislikes, with User Nicolai Cushnir' ],
    msg: []
  }
]
```
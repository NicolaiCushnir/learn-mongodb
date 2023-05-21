### return main page

### Operator $all

1. `db.users.find( { tags: { $all: [ "appliance", "school", "book" ] } } );` - Numaidecît your query trebuie să fie un masiv. Operatorul $all este un array care contine toate elementele specifice. Parcă nu contezaă dacă `tags` property e in ghilimele sau fără.
2. Structura la proiect se află în fișierul(folder) `files_json.md` cu denumirea `filme.md` din proiectul principal `learn-mongodb` din Github.
3. **Exemplu 1** Bellow show the result. Pentru că eu am în baza de date MongoDB 2 rezultate cu acestă proprietate `tags`.

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

1. **Exemplu 2** : `db.filme.find( { genre: { $all: ["crime"] } } );` defapt structura arata asa.
2. Structura se amplasează în fișierul `json_files` cu denumirea
3. Dar asa arata rezultatul in shell, mai precis in PowerShell Windows 10.

```js
[
  {
    _id: ObjectId("644e97ed2bbfdce56a31b597"),
    name_at_movie: 'Fear and Hate',
    created_year: 1974,
    duration: { hours: 3, minutes: 12 },
    views: 14202,
    genre: [ 'crime', 'drama' ],
    rating: 7.6,
    reviews: [
      { name: 'Jack Tomson', text: 'Amazing movie' },
      { name: 'Madison Kavani', text: 'I also so think ...' }
    ]
  }
]
```

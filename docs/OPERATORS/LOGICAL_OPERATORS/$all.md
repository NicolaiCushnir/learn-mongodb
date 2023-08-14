### [return main page](../../../README.md) || [Page - MongoDB All Operators](../../OPERATORS.md)

### Operator $all :

**Explication :**
În primeul rînd operatorul `$all` numaidecât trebuie să fie un array. Apoi selectează proprietățile dintr-un șir de elemente care sunt în baza de date, JSON. Acum ascultă atent! 

**Mongo Query :**
1. `db.users.find( { tags: { $all: [ "appliance", "school", "book" ] } } );`  - Similar cu cel din documentația oficială
2. `db.users.find({ "watching_tags": {$all: ["Programming"] } })` - Exemplu meu care il am în baza de date JSON.
3. `db.movies.find( { genre: { $all: ["crime"] } } );`

**Examples :**
1. După cum putem vedea din exemplu de mai jos, proprietatea `tags` au fost sortate cîteva elemente. Restul pur și simplu nu au fost arătate. Asta și semnifică operatorul $all.

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

2. Privește la proprietatea `watching_tags`: 

```js
{
  "_id": {
    "$oid": "64d18167b71ce70077d6b1a1"
  },
  "registred": "19.12.2015",
  "name": "Nicolai Cushnir",
  "gender": "male",
  "age": 29,
  "mail": "cushnirnicolai@gmail.com",
  "password": "node.js_developer_2009",
  "watching_tags": [
    "Programming",
    "Rock Music",
    "Learn Germany",
    "Juridica",
    "Learn English"
  ],
  "likes_posts": [
    {
      "Post_1": "some text 1"
    },
    {
      "Post_2": "some text 2"
    }
  ],
  "dislikes_posts": [
  {
    "title post 1": "I don't like it this post."
  },
    {
    "title post 1": "I don't like it this post."
  }
  ],
  "saved_bookmarks_posts": [
    "id_post_3212",
    "id_post_3012"
  ],
  "comment_at_posts": [
    {
      "number_at_comment": 1,
      "post_comment": "Hahaha, was very funny this article."
    },
    {
      "number_at_comments": 2,
      "post_comment": "I didn't understand this article if to be honest. Can say in commnets what you want to say? Please"
    }
  ],
  "country": "Moldova"
}
```

3. Uite-te la proprietatea `genre`. O să arăte doar toate filmele cu așa gen de film.

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

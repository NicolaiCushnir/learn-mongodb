### Operator $or
* `$or` - Оператор выполняет логическую операцию над массивом из одного или нескольких `expressions` и выбирает документы, удовлетворяющие хотя бы одному из условий `expressions`. $or имеет следующий синтаксис :

```js
{ $or: [ { <expression_1> }, { <expression_2> }, ... , { <expression_N> } ] }
```

* Operatorul `$or` si probabil { `$in`, `$and`, `$all`}. Nutiu de ce are probleme mari cu `string`. Nu poti face maipulatii cu acest tip de date, doar `number`.

```js
// Paliubu astea de la mongo o facut criva operator $or. :(
db.users.find( { $or: [{age: {$lte: 20}}, {age: {$eq: 18}} ] } );

// Am vrut sa fac un request tipa : 
// are proprietaatea`tags` sau are `likes`
//  Da figa ca nu merge ...
// ... Am sa ma introc la `$or` mia tirziu.
```

* Sau in cel mai rau caz poti folosi operatorul `$in`. El este asemanator cu `$or`. Например, чтобы выбрать все документы в inventoryколлекции, где quantityзначение поля равно 20 или 50 , используйте $inоператор:

```js
db.inventory.find ( { quantity: { $in: [20, 50] } } )
```
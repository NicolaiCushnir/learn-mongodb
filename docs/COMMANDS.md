### Return Main Page

### Commands in Shell Terminal 
* `db.version();` - Show version at mongoDB.
* `db.getName();` - Show name at your database, where you are now. I mean inside db.

**Insert Documentss**
* `db.users.insertOne({name: "Sofia Rotaru", password: "sofia123", gender: "female", age: 14});` - insert something. Maybe an user, why not.
* `db.users.insertMany([{ registred:"18.12.2019", name: "Lissa Smith", gender:"female", age: 16 }, {registred: "22.11.2019", name: "Ariana Grade", age: 16, gender: "female"}]);` - Adăugarea mai multor documente, obiecte în database dintr-o singură dată.

**Find Documents**
* `db.users.find({gender:"female"}, {});` - Show only female gender.
* `db.users.find({gender:"male"}, {});` - Sortare, male gender.
* `db.users.countDocuments();` - Calculeaza numarul total de cite collectii ai.
* `db.users.find().count();` - Calculeaza numarul total de cite collectii ai.
* `db.find().limit(5)` - Limitarea documentelor, 5 este un exemplu. Deja tu decizi ce numar sa pui in locul lui 5 pentru a vedea cite elemente se poate de vizualizat in MongoDB Shell. Asta se face pentru optimizare.
* `db.users.findOne({ _id: ObjectId("644e749e40f95f57eeb1545f") });` - minusu e că trebuie să scrii tot manul concret, precum în egsemplu dat, trebuie să știi id-ul concret. Într-un fel găesște obiectul dorit din db.
* `db.users.find().sort({age: -1});` - Sort after age in descrestere.
* `db.users.find().sort({name: 1});` - Sort after alphabet name in crestere. 
* `db.collection_name.drop();` - sterge toata colecția.
* `db.users.find({age : {$lt:25}});` - Less than
* `db.users.find({age : {$gt:30}});` - Greater than
* `db.users.find({age : {$gte:30}})` - Greater than something and equal with him. Запрос с двумя условие.
* `db.users.find({age : {$lte:20}})` - Less than soemthing and equal.
* `db.users.find({}, {name: 1, age: 1});` - Show only name and age
* `db.users.find({age : {$eq:27}});` - Поиск точных значении. В данном случие ищет только пользователи с 27 лет. 
* `db.users.find({age : {$ne:27} });` - Не равно (самаму себе). В данном случие не равен 27.
* `db.users.find({age : {$in: [17, 27]}});` Оператор `$in:` выбирает документы, в которых значение поля равно любому значению в указанном массиве
* `db.users.find({age : {$nin: [17, 27]}});` По сути оператор `$nin` являеться оператором отрицание `$in`.

**Delete Documents**
* `db.movies.drop();` Șterge toată colecția. Asta doar în cazul în care ea există și are ceva înăuntru.
* `db.users.deleteMany()` - ? **?**
* `db.users.deleteOne()` - ? **?**

### Extern links :
* [MngoDB manual reference methods](https://docs.mongodb.com/manual/reference/method/js-database/)
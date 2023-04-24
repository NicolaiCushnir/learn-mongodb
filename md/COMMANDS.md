### Commands in MongoDB:
see little later

### Commands in Shell Terminal 
* `db.version()` - ?
* `db.getName()` - ?
* `db.users.find({gender:"female"}, {});` - Show only female gender.
* `db.users.find({gender:"male"}, {});` - Sortare, male gender.
* `db.users.countDocuments();` - Calculeaza numarul total de cite collectii ai.
* `db.users.find().count();` - Calculeaza numarul total de cite collectii ai.
* `db.find().limit(5)` - Limitarea documentelor, 5 este un exemplu. Deja tu decizi ce numar sa pui in locul lui 5 pentru a vedea cite elemente se poate de vizualizat in MongoDB Shell. Asta se face pentru optimizare.
* `db.users.find().sort({age: -1});` - Sort after age in descrestere.
* `db.users.find().sort({name: 1});` - Sort after alphabet name in crestere. 
* `db.collection_name.drop();` - sterge toata colecția.
* `db.users.find({age : {$lt:18}});` - Less than
* `db.users.find({age : {$gt:18}});` - Greater than
* `db.users.find({age : {$gte:30}})` - Greater than something and equal with him..
* `db.users.find({age : {$lte:30}})` - Less than soemthing and equal.
* `db.users.find({}, {name: 1, age: 1});` - Show only name and age

### Read Only
* db.collection.find()
* db.collection.findOne()
* db.collection.aggregate()
* db.collection.countDocuments()
* db.collection.estimatedDocumentCount()
* db.collection.count()
* db.collection.distinct()

### Extern links :
* [MngoDB manual reference methods](https://docs.mongodb.com/manual/reference/method/js-database/)
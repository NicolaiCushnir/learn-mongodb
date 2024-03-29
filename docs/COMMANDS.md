### [return main page](../README.md) || Commands in Shell Terminal 

**Global manipulation with database**
* `db.version();` - Show version at mongoDB. Or "version();"
* `db.getName();` - Show name at your database, where you are now. I mean inside db.
* `show dbs` - show all datababases which you have.
* `show collections;` || `db.collection_name.find();`- Show all collections inside at database, and collection is analogic with table from PostgreSQL.
* `use Tutorial-Online` - Cuvîntul cheie "use" are 3 funcții, acțiuni. Poate să facă numai 3 schestii separate una de alta. Prima chestie e, create a database in terminal. Because there is no “create” command in the MongoDB Shell. But we write command "use" to create a db. Like an exemple is "use Tutorial-Online". Surely you noticed that the database is created but nothing is shown in the console. Relax! So and must be. Database will show in console only if then when we will insert something inside db with method "insert". Look bellow.
* `db.createCollection("statistics");` create a new collection, where we must write inside method "createCollection();" the name at collection, in string form. It's not important this name "statistics". I so have decided, but you can put an another word, which you want.
* `db.users.insert({ "name": "Nicolai Cushnir", "age": 29});` - Create a collection in db Tutorial-Online, with help at terminal. MongoDB only creates the database when you first store data in that database, so like in example of above. Now you can see your database created in console.
* `db.getCollectionNames();` În primul rând trebuie să fii înăuntru la o bază de date. În cazul meu, sunt în baza de date "my-blog". Acum important! Arată lista colecților/tabelelor din baza de date în formă de un șir de elemente array.
* `show users` - Arată lista utilizatorilor cu rolurile sale. Această comandă este utilă pentru developeri ce crează aplicații web. La momentul actul am un arr gol, fiindcă nu am adaugat nici unul. Presupun încă cînd faci un proiect dor trebuie front-end developer, back-end-developer, test-dev, dev-ops etc. Așa că cretcă pentru asta trebuie commanda dată. Dar nu sunt sigur. Ceva de gen un fișier JSON dar deja cum am mai spus cu rolurile fiecăruia. Dar mai degrabă nu este o structură fixă ceia ce înseamnă că fiecare Admin, sau developer crează rolurile așa cum vede el, nu este o structură strictă. Fă așa cum doresști!
* `db. getUsers();` Method **???**
* `db.getCollectionInfos();` **???**
* `db.old_name_collection.renameCollection("new_name_collection");` - Rename collection (from terminal).
* `db.name_at_colllection_which_you_want_to_delete.drop();` - Drop a collection.
* `db.dropDatabase();` - Drop a database with all colections. But i will not make because i don't want.
* `db.users.find().pretty();` - Nuștiu dacă este nevoie dar, într-un fel arată toată lista dintr-o colecție într-o formă mai frumoasă. Defapt în versiunea la MongoDB 6.0.5 nu este nevoie de această metodă. **???**
* `?` - How to look a colection in compact mode **???**
* `db.users.validate();` **???**
* `db.name_collection.totalSize();` - оазмер файла в байтах. In my case "db.users.totalSize();"
* `db.users.storageSize();` -  Показывает размер коллекции в байтах на диске. Однако без индексов.
* `db.users.stats();` - Показывает результат об о всём что происходило в коллекции.
* `db.hostInfo();` - Показывает информацию о сервере.

**Insert Documentss**
* `db.users.insertOne({name: "Sofia Rotaru", password: "sofia123", gender: "female", age: 14});` - insert something. Maybe an user, why not.
* `db.users.insertMany([{ registred:"18.12.2019", name: "Lissa Smith", gender:"female", age: 16 }, {registred: "22.11.2019", name: "Ariana Grade", age: 26, gender: "female"}]);` - Adăugarea mai multor documente, obiecte în database dintr-o singură dată.

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
* `db.users.deleteOne({ _id: ObjectId("6432d6732a5b66cbc95ad2df") });` În cazu nostru șterge un utilizator.
* `db.users.deleteMany({gender: "male"});` - ? Am șters toți pațanii din baza de date. :D Au rămas numa mueri, lol. 
* `db.users.drop();` Șterge toată colecția. Asta doar în cazul în care ea există și are ceva înăuntru.

**Update Documents**
* `db.users.updateOne({ _id: ObjectId('6432bfc5c82933b167a2eaee')}, { $set:{ likes: "none", dislikes: "none" } } );` - 
* `db.users.updateMany( {}, {$set: { likes: "none", dislikes: "none"}} );` - Am schimbat și adăugat în același timp proprietățile `likes` și `dislikes`. important! Cînd ai nevoie să adaugi noi proprietăți la toată colecția care ai nevoie? în cazul meu, users. Doar că mia schimbat 2 proprietăți era "hide": false in "hide": true. Este oleak de niuans!
* `db.users.updateOne({ _id: ObjectId('644e749e40f95f57eeb1545e') }, { $inc: { age: 1 } });`  - Увеличивает или инкрементирует на указанное значение. Также этот оператор принимает положительные и отрицательные значения. Если поле не существует, $inc создает поле и устанавливает для поля указанное значение. В днааном примере мы увиличили возраст на 1 год.
* `db.users.updateMany({}, { $inc: { "duration.minutes": 2 } });` - Be careful with operators and braces. Nustiu de ce so sters 2 id-uri, apoi sa pus la toate minutes: 2. Weird! Если поле не существует, оператор $inc создает поле и устанавливает для него указанное значение.
* `db.users.updateOne( {_id: ObjectId("6432bfc5c82933b167a2eaee")}, {$pull: {genres: "drama"}} );` -  Operator $pull delete for properties or property. In cazu meu nifiga el nu sa sters. **???**
* `db.users.updateOne( {_id: ObjectId("6432bfc5c82933b167a2eaee")}, {$push: {genres: "drama"}} );` - Tipa operator $push adaugă proprietate dar nu proprietati. Pentru așa cazuri unde dorești să adaugi mai multe proprietăți egzistă operatorul **$each ? Dar $inc ?** 
* `db.users.updateOne( { _id: ObjectId("6432bfc5c82933b167a2eaee") }, { $push: {genres: { $each: ["test_1", "test_2", "test_3"] }} } );` - Operatorul $each: {} Adauga mai multe proprietatati. **?**
* `db.collection.findAndModify();` - **???**
* `db.users.find({ rating: null });` - Используй это когда ты хочешь получить доступ к свойствам которые отсутствуют в колекции. У меня вообще нет в коллекции такое свойство, поэтому добавился в колеуцию как родной. )) 
* `{ raiting: { $exists: false } }` Для проверки если поля присутствует или нет. **???**
* `db.users.find({ "hide": false }).skip(0);` Un alt exemplu: db.users.find().skip(3); Am o impresie parcă ascunde cîte elemente dorrești. Mai concret în colecția meea cu numele "users" sunt 9 elemente dintre care sa ascuns 3 și au mai rămas 6, (rezultat). Plus în parametru se pune obligatoriu numărul de la zero la cît ai în colecție, sau cel putin cti iti trebuie tie de ascuns. Fii atent cu acest operator.
* `db.users.distinct("age");` - Показывает ствоийста который ты написал внутри иетода `distinct("")` в форме массива, с всеми значением которые у тебя есть в данной коллекции. А имено в моём случие "age" показывает все годы рождение в виде массива.
* `db.users.replaceOne({ _id: ObjectId("64d39ae528b2a3db4cc1d277") }, {country: "none"});` - Этот метод полностью заменяет элемент(объект) из коллекции. И Остается только id объекта,или то что ты пописал после. Повторяю! Если у тебя было очень много свойств в объекте, то всё удалится и на его место поставиться то что ты написал. **???**
* `db.users.replaceMany();` - Аналогично методу replaceOne(); Только тут мы удаляем и затем заменяем не один элемент, а больше елементов(Objects). Важно!!! Будь очень окоратым с этим методом, а то может удалить всю базу данных. **???**
* `db.users.slice();` - **???**

**Important !!!** La sfîrșit vreau ca la fiecare operator să fac pagini aparte pentru a crea mai multe exemple, aparte. În așa fel o să-mi fie mai ușpr să le învăț + mai înțeles.

### Extern links :
* [MngoDB manual reference methods](https://docs.mongodb.com/manual/reference/method/js-database/)

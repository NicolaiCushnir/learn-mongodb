### [return main page](../README.md)

### Work with Mongosh Shell
* pentru inceput scrie in consola `mongod`.
* Acum deschide alta consola si scrie `mongo`.
* Acum putem lucra. Uite mai jos.

### Notes
* In MongoDB nu po-ti crea bd in consola, doar in compass.
* Monosh - mongo au înlocuit cu mongosh.
* Compass - Faci tot acea ca sh in mongosh numa vizual.
* Collection - analogic cu tabel în PostgreSQL

### List With Commands :
* `show dbs;` show databases which you have now. 
* `db` - Îți arată în ce bază de date ești acum.
* `help` - Arată lista comenzilor de ajutor.
* `use my-blog` - cuvîntul cheie **use** schimbă directoria sau crează o bază de date. 
* `?` - Rename Database
* `db.users.find()` - ?
* `exit` - Analogic with `CTRL + C`. Exit from mongo shell. 
* `?` - Create a collection.
* `show collections` - Arată toate tabelele care leai creat.
* `?` - Rename a collection
* `?` - Drop a Databases
* `db.drop.name_your_db` - Delete a collection ?
* `db.user.insert({name: "Nicolai Cushnir"});` - write first object in your database.  Now you can read CRUD Docs.
* `db help()` - ?
* `getCollectionInfos` - ?

### Commands in Terminal. No Mongosh!
* `mongo --help`
* `mongod –version`
* `mongod --help`

### Account Manipulation Compass
* `?` - Add an or more user in DB
* `db.user` - delete users

### Extern Links :
* [How to Create a Database in MongoDB](https://www.mongodb.com/basics/create-database)

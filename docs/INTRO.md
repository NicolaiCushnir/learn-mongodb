### [return main page](../README.md) || Topic. introduction in MongoDB.
**Important !!!** For now, ignore this chapter, because it is not finished and is at this stage is very raw and need redact very seriously. I hope that this documentation will be comfortable clear and the most important without any buzzwords. With other words simple documentation. Thank for understand. But don't worry, I'll come back to this chapter anyway.

### Keywords in MongoDB: **?**
* `mongo` : După conectarea la mongod, permite să lucrez în terminal.
* `mongod` : Serverul bazei de date MongoDB.
*  `compass`: Local database. A place where you write your json scheema in interface mode. I mean instead of Shell ... A kind of `phpMyAdmin`.
* `collection` : Analogic cu tabel.
* Обычный JSON

### List with baasic commands in MongoDB Console :
**Important !!!** Simple console or terminal. Вoesn't matter.
* `mongo --help;`
* `mongod –version;`
* `mongod --help;`

### Basic commands in Mongo Shell
**Important !!!** Below are the commands which we are inside in mongo. Already! This means that we cannot work with a terminal. But if you want to work further in your usual terminal, you must exit this mode. Write `exit` or `quit`.
* `show dbs;` show databases which you have now. 
* `db` - Îți arată în ce bază de date ești acum.
* `help` - Arată lista comenzilor de ajutor.
* `use my-blog` - cuvîntul cheie "use" schimbă directoria sau crează o bază de date. 
* `?` - Rename Database
* `db.users.find()` - ?
* `exit` - Analogic with `CTRL + C`. Exit from mongo shell. 
* `?` - Create a collection.
* `show collections` - Arată toate tabelele care leai creat.
* `?` - Rename a collection
* `?` - Drop a Databases
* `db.drop.name_your_db` - Delete a collection ?
* `db.user.insert({name: "Nicolai Cushnir"});` - write first object in your database.  Now you can read CRUD Docs.
* `db help();` - ?
* `getCollectionInfos;` - ?

### Extern Links :
* [Mongos Manual]()

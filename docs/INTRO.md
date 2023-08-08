### [return main page](../README.md) || Topic. introduction in MongoDB.
**Important !!!** For now, ignore this chapter, because it is not finished and is at this stage is very raw and need redact very seriously. I hope that this documentation will be comfortable clear and the most important without any buzzwords. With other words simple documentation. Thank for understand. But don't worry, I'll come back to this chapter anyway.

### Keywords in MongoDB:
**Important** I repeat! This is very important information. Better memorize it. I mean 5 concepts.
* `mongod` : Serverul bazei de date MongoDB.
* `mongo` : După conectarea la mongod, permite să lucrez în terminal.
*  `compass`: Local database. A place where you write your json scheema in interface mode. I mean instead of Shell ... A kind of `phpMyAdmin`.
* `JSON` Simple Structure.
* `collection` : Similar with table from Relational Database so like PostgreSQL or others.

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

### Keywords that you should not worry about yet.
I'll just tell you a little about them.
* Mongos - ?
* Atlas - ?

### Extern Links :
* link 1

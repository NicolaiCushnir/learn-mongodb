![image](public/img/drawing.png)

## Introduction
For learn MongoDB is need to [download](https://www.mongodb.com/download-center?jmp=nav#community). 

## Short review
1. Introduction
1. MongoDB Settings
1. Create a project

### MongoDB Settings Windows 10
Before you start working with mongodb, you need to specify the path to the environment variables. I'll show you how to do this. Get in `in my computer`. and press right click on the icon(fig. 1). After clicking on the `property` you will see in the upper left corner `Advanced system settings`(fig. 2). Now press `environment variables`.

After installed mongo the most important thing is must copy path. If installed mongo default:
 `C:\Program Files\MongoDB\Server\3.6\bin`

* here is some text
![copy](public/img/copy.png)

* try again
![path1](public/img/path.png)

* and will appear a window
![env](public/img/mici.png)

* and open console, put `mkdir c:/data/db`

## Create a project
In Node for create a new project you have need to create a new folder where you want and there are to put inside a file `server.js`. Now write in your project `npm init -y`

### Dependences
npm install nodemon 
npm install express
npm install mongodb

### First Script
Now try it. Open your console and go to your script which save it and run.

```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	
	const insertDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('documents');
		// Insert some documents
		collection.insertMany([
			{a : 1}, {a : 2}, {a : 3}
		], function(err, result) {
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
	    callback(result);
	  });
	}
 
	insertDocuments(db, function() {
	  client.close();
	});
});
```

# Similar resources
* MongoDB Book
https://jsman.ru/mongo-book/index.html

* Save Books Habra
https://habrahabr.ru/post/209310/

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Download MongoDB (https://www.mongodb.com/download-center?jmp=nav#community)
2. Install MongoDB (Dupa instalare trebuie sa adaugi papka /bin in PATH.)



3. mkdir C:/data/db

4. mkdir Project
5. cd Project
6. npm init
7. npm install mongodb

8. te uiti in server.js

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![img](img/mongodb.png)

Tutorial MongoDB noSQL database which is based on JavaScript and Node.js. 

# Started MongoDB:
* [Download MongoDB](https://www.mongodb.com/try/download/community)
* [Path to environment variables](#path)
* Set up the MongoDB environment - MongoDB требует каталога данных для хранения всех данных. Путь к каталогу данных MongoDB по умолчанию - это абсолютный путь \ data \ db на диске, с которого вы запускаете MongoDB. Создайте эту папку, выполнив следующую команду в командной строке: `mkdir c:/data/db`
* [Create a new project]
	* [npm init]
	* [npm install express --save]
	* [npm install mongodb --save]
	* [npm install mongoose --save]
	* [sudo npm install nodemon -g]
	* [npm install body-parser --save]
	* [npm install eslint --save-dev]
	* [touch .gitgnore]
	* [touch README.md]
* [Alternative doc Install MongoDB](https://docs.mongodb.com/guides/server/install/)


-------------------------------------------------------------------------------------------------------------

- Work With MongoDB
	1. Download MongoDB
	2. Path to environment variables
	3. npm init
	4. npm install express --save
	5. npm install mongodb --save
	6. npm install body-parser --save
	7. sudo npm install nodemon -g
	8. touch .gitgnore
	9. npm install mongoose
	10. mkdir c:/data/db
	11. npm install eslint --save-dev
	12. touch README.md

- Comenzi in mongodb:
	1. mongo :
	2. mongod : for can it run scripts
	3. mongod --help : 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

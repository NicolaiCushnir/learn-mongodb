### [return main page](#)

* CRUD Operations with Node.js + MongoDB clear.
```js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Подключение к MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
let db;

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) {
    console.error('Ошибка подключения к MongoDB:', err);
    return;
  }
  console.log('Успешное подключение к MongoDB');
  db = client.db(dbName);
});

// Создание записи (Create)
app.post('/items', function(req, res) {
  const collection = db.collection('items');
  const newItem = req.body;

  collection.insertOne(newItem, function(err, result) {
    if (err) {
      res.status(500).send({ error: 'Ошибка при создании записи' });
      return;
    }
    res.status(201).send(result.ops[0]);
  });
});

// Чтение всех записей (Read)
app.get('/items', function(req, res) {
  const collection = db.collection('items');

  collection.find({}).toArray(function(err, items) {
    if (err) {
      res.status(500).send({ error: 'Ошибка при чтении записей' });
      return;
    }
    res.status(200).send(items);
  });
});

// Обновление записи (Update)
app.put('/items/:id', function(req, res) {
  const collection = db.collection('items');
  const itemId = req.params.id;
  const updatedItem = req.body;

  collection.updateOne({ _id: itemId }, { $set: updatedItem }, function(err, result) {
    if (err) {
      res.status(500).send({ error: 'Ошибка при обновлении записи' });
      return;
    }
    res.status(200).send({ message: 'Запись успешно обновлена' });
  });
});

// Удаление записи (Delete)
app.delete('/items/:id', function(req, res) {
  const collection = db.collection('items');
  const itemId = req.params.id;

  collection.deleteOne({ _id: itemId }, function(err, result) {
    if (err) {
      res.status(500).send({ error: 'Ошибка при удалении записи' });
      return;
    }
    res.status(200).send({ message: 'Запись успешно удалена' });
  });
});

// Запуск сервера
app.listen(port, function() {
  console.log('Сервер запущен на порту ' + port);
});
```

### Extern links :
* link 1
  

### Database Methods :
* `db.adminCommand();` - ?
* `db.aggregate();` - ?
* `db.commandHelp()` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?
* `;` - ?

### Collection. Methods in MongoDB :
* `db.collection.agregate();` - ?
* `db.collection.bulkWrite();` - ?
* `db.collection.copyTo();` - ?
* `db.collection.count();` - ?
* `db.collection.countDocuments();` - ?
* `db.collection.estimatedDocumentCount();` - ?
* `db.collection.createIndex();` - ?
* `db.collection.createIndexes();` - ?
* `db.collection.dataSize();` - ?
* `db.collection.deleteOne();` - ?
* `db.collection.deleteMany();` - ?
* `db.collection.distinct();` - ?
* `db.collection.drop();` - ?
* `db.collection.dropIndex();` - ?
* `db.collection.dropIndexes();` - ?
* `db.collection.ensureIndex();` - ?
* `db.collection.explain();` - ?
* `db.collection.find();` - ?
* `db.collection.findAndModify();` - ?
* `db.collection.findOne();` - ?
* `db.collection.findOneAndDelete();` - ?
* `db.collection.findOneAndReplace();` - ?
* `db.collection.findOneAndUpdate();` - ?
* `db.collection.getIndexes();` - ?
* `db.collection.getShardDistribution();` - ?
* `db.collection.getShardVersion()` - ?
* `db.collection.nsert();` - ?
* `db.collection.insertOne();` - ?
* `db.collection.insertMany();` - ?
* `db.collection..isCapped();` - ?
* `db.collection.latencyStats();` - ?
* `db.collection.mapReduce();` - ?
* `db.collection.reIndex();` - ?
* `db.collection.remove();` - ?
* `db.collection.renameCollection();` - ?
* `db.collection.replaceOne();` - ?
* `db.collection.save();` - ?
* `db.collection.stats();` - ?
* `db.collection.storageSize();` - ?
* `db.collection.totalIndexSize()` - ?
* `db.collection.totalSize();` - ?
* `db.collection.update();` - ?
* `db.collection.updateOne();` - ?
* `db.collection.updateMany()` - ?
* `db.collection.watch();` - ?
* `db.collection.validate();` - ?

### Cursor Methods :
* `cursor.addOption();` - ?
* `cursor.allowDiskUse();` - ?
* `cursor.allowPartialResults();` - ?
* `cursor.batchSize();` - ?
* `cursor.close();` - ?
* `cursor.isClosed();` - ?
* `cursor.collation();` - ?
* `cursor.comment();` - ?
* `cursor.count();` - ?
* `cursor.explain();` - ?
* `cursor.forEach();` - ?
* `cursor.hasNext();` - ?
* `cursor.hint();` - ?
* `cursor.isExhausted();` - ?
* `cursor.itcount();` - ?
* `cursor.limit();` - ?
* `cursor.map();` - ?
* `cursor.max();` - ?
* `cursor.maxAwaitTimeMS();` - ?
* `cursor.maxTimeMS();` - ?
* `cursor.min();` - ?
* `cursor.next();` - Возвращает следующий документ в курсоре.
* `cursor.noCursorTimeout();` - Указывает серверу избегать автоматического закрытия курсора после периода бездействия.
* `cursor.objsLeftInBatch();` - 	
Возвращает количество документов, оставшихся в текущем пакете курсора.
* `cursor.pretty();` - Настраивает курсор для отображения результатов в удобном для чтения формате.
* `cursor.readConcern();` - Определяет **необходимость чтения** [read concern](#) для [find();](#) операции.
* `cursor.readPref();` - Задает **предпочтение чтения** или [read concern](#) для курсора, чтобы управлять тем, как клиент направляет запросы к **набору реплик** или [replica set](#) .
* `cursor.returnKey();` - Изменяет курсор так, чтобы он возвращал индексные ключи, а не документы.
* `cursor.showRecordId();` - Добавляет поле внутреннего идентификатора механизма хранения к каждому документу, возвращаемому курсором.
* `cursor.size();` - Возвращает количество документов в курсоре после применения [skip();](#) и [limit();](#) 
* `cursor.skip();` - Возвращает курсор, который начинает возвращать результаты только после прохождения или пропуска ряда документов.
* `cursor.sort();` - Возвращает результаты, упорядоченные в соответствии со спецификацией сортировки.
* `cursor.tailable();` - Помечает курсор как хвостовой. Допустимо только для курсоров над закрытыми коллекциями.
* `cursor.toArray();` - Возвращает массив, содержащий все документы, возвращенные курсором.
* `cursor.tryNext();` - Возвращает следующий элемент в итерации, если он доступен, или null.

### Extern links :
* [Cursor Metods MongoDB](https://www.mongodb.com/docs/manual/reference/method/js-cursor/)

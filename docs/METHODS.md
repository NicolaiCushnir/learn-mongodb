### [return main page](../README.md)

### Database Methods :
* `db.adminCommand();` - ?
* `db.aggregate();` - ?
* `db.commandHelp()` - Отображает текст справки для **спецификации** [specified database command](#) и другую документацию [Database Commands](#). Будь внимателен они разные.
* `db.createCollection();` - ?
* `db.createView();` - ?
* `db.currentOp();` - ?
* `db.dropDatabase();` - ?
* `db.fsyncLock();` - Forces the mongod to flush all pending write operations to disk and locks the entire mongod instance to prevent additional writes until the user releases the lock with a corresponding db.fsyncUnlock() command.
* `db.fsyncUnlock();` - Reduces the lock taken by db.fsyncLock() on a mongod instance by 1.
* `db.getCollection();` - Returns a collection or a view object that is functionally equivalent to using the db.<collectionName> syntax. The method is useful for a collection or a view whose name might interact with mongosh itself, such as names that begin with _ or that match a database shell method.
* `db.getCollectionInfos();` - ?
* `db.getCollectionNames();` - Returns an array containing the names of all collections and views in the current database, or if running with access control, the names of the collections according to user's privilege. For details, see Required Access.
* `db.getLogComponents();` - ?
* `db.getMongo();` - ?
* `db.getName();` - ?
* `db.getProfilingStatus();` - ?
* `db.getReplicationInfo();` - ?
* `db.getSiblingDB();` - ?
* `db.hello();` - ?
* `db.help();` - ?
* `db.hostInfo();` - ?
* `db.killOp();` - ?
* `db.listCommands();` - ?
* `db.logout();` - ?
* `db.printCollectionStats();` - ?
* `db.printReplicationInfo();` - ?
* `db.printSecondaryReplicationInfo();` - ?
* `db.printShardingStatus();` - ?
* `db.printSlaveReplicationInfo();` - ?
* `db.resetError();` - ?
* `db.rotateCertificates();` - ?
* `db.runCommand();` - ?
* `db.serverBuildInfo();` - ?
* `db.serverCmdLineOpts();` - ?
* `db.serverStatus();` - ?
* `db.setLogLevel();` - ?
* `db.setProfilingLevel();` - ?
* `db.shutdownServer();` - ?
* `db.stats();` - ?
* db.version()`;` - ?
* `db.watch();` - ?

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
* `cursor.addOption();` - Добавляет специальные флаги проводного протокола, которые изменяют поведение запроса.
* `cursor.allowDiskUse();` - Позволяет MongoDB использовать временные файлы на диске для хранения данных, превышающих лимит системной памяти в 100 мегабайт, при обработке операции блокирующей сортировки.
* `cursor.allowPartialResults();` - Позволяет [db.collection.find();](#) операциям с сегментированной коллекцией возвращать частичные результаты, а не ошибку, если один или несколько запрошенных сегментов недоступны.
* `cursor.batchSize();` - Управляет количеством документов, которые MongoDB возвращает клиенту в одном сетевом сообщении.
* `cursor.close();` - Закройте курсор и освободите связанные ресурсы сервера.
* `cursor.isClosed();` - Возвращает, trueесли курсор закрыт.
* `cursor.collation();` - Задает параметры сортировки для курсора, возвращаемого методом [db.collection.find()](#).
* `cursor.comment();` - Прикрепляет к запросу комментарий, позволяющий отслеживать журналы и коллекцию system.profile.
* `cursor.count();` - Изменяет курсор, чтобы он возвращал количество документов в результирующем наборе, а не сами документы.
* `cursor.explain();` - Отчеты о плане выполнения запроса для курсора.
* `cursor.forEach();` - Применяет функцию JavaScript для каждого документа в курсоре.
* `cursor.hasNext();` - Возвращает true, если курсор имеет документы и может повторяться.
* `cursor.hint();` - Заставляет MongoDB использовать определенный индекс для запроса.
* `cursor.isExhausted();` - Возвращается, trueесли курсор закрыт и в пакете не осталось объектов.
* `cursor.itcount();` - Вычисляет общее количество документов на стороне клиента курсора путем выборки и повторения результирующего набора.
* `cursor.limit();` - 	
Ограничивает размер набора результатов курсора.
* `cursor.map();` - Применяет функцию к каждому документу в курсоре и собирает возвращаемые значения в массив.
* `cursor.max();` - Задает эксклюзивный верхний индекс для курсора. Для использования с [cursor.hint();](#).
* `cursor.maxAwaitTimeMS();` - Указывает ограничение в миллисекундах для ожидания следующего обновления результатов запроса.
* `cursor.maxTimeMS();` - Задает кумулятивный предел времени в миллисекундах для обработки операций над курсором.
* `cursor.min();` - Указывает инклюзивную нижнюю границу индекса для курсора. Для использования сcursor.hint()
* `cursor.next();` - Возвращает следующий документ в курсоре.
* `cursor.noCursorTimeout();` - Указывает серверу избегать автоматического закрытия курсора после периода бездействия.
* `cursor.objsLeftInBatch();` - Возвращает количество документов, оставшихся в текущем пакете курсора.
Возвращает количество документов, оставшихся в текущем пакете курсора.
* `cursor.pretty();` - Настраивает курсор для отображения результатов в удобном для чтения формате.
* `cursor.readConcern();` - Определяет **необходимость чтения** [read concern](#) для [find();](#) операции.
* `cursor.readPref();` - Задает **предпочтение чтения** или [read concern](#) для курсора, чтобы управлять тем, как клиент направляет запросы к **набору реплик** или [replica set](#) .
* `cursor.returnKey();` - Изменяет курсор так, чтобы он возвращал индексные ключи, а не документы.
* `cursor.showRecordId();` - Добавляет поле внутреннего идентификатора механизма хранения к каждому документу, возвращаемому курсором.
* `cursor.size();` - Возвращает количество документов в курсоре после применения [skip();](#) и [limit();](#) методов.
* `cursor.skip();` - Возвращает курсор, который начинает возвращать результаты только после прохождения или пропуска ряда документов.
* `cursor.sort();` - Возвращает результаты, упорядоченные в соответствии со спецификацией сортировки.
* `cursor.tailable();` - Помечает курсор как хвостовой. Допустимо только для курсоров над закрытыми коллекциями.
* `cursor.toArray();` - Возвращает массив, содержащий все документы, возвращенные курсором.
* `cursor.tryNext();` - Возвращает следующий элемент в итерации, если он доступен, или null.

### Extern links :
* [Cursor Metods MongoDB](https://www.mongodb.com/docs/manual/reference/method/js-cursor/)

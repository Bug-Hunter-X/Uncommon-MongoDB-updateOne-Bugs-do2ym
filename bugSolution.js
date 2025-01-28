```javascript
//Correct usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id":ObjectId("650e717d697896721234567")},{$inc:{"likes":1}});
//Correct updateOne operation
db.collection('myCollection').updateOne({"_id":ObjectId("650e717d697896721234567")},{$set:{"likes":10}});
```
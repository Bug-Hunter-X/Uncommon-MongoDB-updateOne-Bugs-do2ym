# Uncommon MongoDB updateOne Bugs
This repository demonstrates two uncommon bugs related to the `updateOne` operation in MongoDB. These bugs can be subtle and difficult to identify, leading to unexpected behavior in your application.

## Bug 1: Incorrect Usage of `$inc` Operator
The `$inc` operator is used to increment or decrement a numerical field in a MongoDB document. However, it's crucial to specify the field name correctly. The following code demonstrates an incorrect usage:

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("650e717d697896721234567")},{$inc:likes});
```

In this example, the `likes` field is not specified correctly within the `$inc` operator. This will likely result in an error or unexpected behavior.

## Bug 2: Missing Field Name in `updateOne`
Another uncommon error occurs when the field name is missing entirely in the `updateOne` operation. This is a more critical issue and will throw error.

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("650e717d697896721234567")},{$inc:{likes:1}});
```

This will result in an error since the field name is omitted.  Always ensure that the field name is specified correctly and is enclosed within double quotes.

## Solutions
Solutions for these bugs are presented in `bugSolution.js`.

## How to Reproduce
1. Make sure you have a MongoDB instance running and a collection named `myCollection` created with sample documents containing a `likes` field.
2. Execute the code snippets mentioned above.
3. Observe the behavior and compare it with the corrected code in `bugSolution.js`.

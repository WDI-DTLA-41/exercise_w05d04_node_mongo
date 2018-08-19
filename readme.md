# Using Mongo in Node

## Research questions - To the docs!

- http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/
- https://www.npmjs.com/package/mongodb

How do you add MongoDB to a Node project?

How do you connect to MongoDB through Node?

Do you still need to run a MongoDB server?

If we were to build an Express app that persists data, where would
we use the MongoDB Node client?

If we asked an express server to return all the objects in a mongoDB database
- What might the request from the Browser look like?
- What mongoDB method might we use on the server?

If we asked an express server to find an object by its ID and update some of it's date
- What might the request from the Browser look like?
- What mongoDB method might we use on the server?

## Can you?

- Install the MongoDB node module
- require the module inside `app.js`
- Inside app.js - connect to a mongoDB
- Insert your name and age into a collection
- Run the script and check via the mongo shell that it worked
- Can you update your age 
- Run the script and check via the mongo shell that it worked
- Can you find the document with your name as a criteria
- Run the script and check via the mongo shell that it worked
- Can you delete the document
- Run the script and check via the mongo shell that it worked

- [MongoDB driver for Node](https://www.npmjs.com/package/mongodb)
- [MongoClient](https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html)

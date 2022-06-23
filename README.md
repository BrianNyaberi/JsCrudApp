# JsCrudApp
 
In this project, I am creating a node CRUD application with express and mongodb.

#### To Run this project Clone it and install modules using
```
npm install
```

Then Create config.env file and create PORT and MONGO_URI Variable and specify Value.
That's it. You are ready to go. To execute this project just type
```
npm start
```
### Motivation

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.

If some of this language is unfamiliar, there is a full article on Blocking vs. Non-Blocking.


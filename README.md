# pretzel
Greenfield Project for HackReactor

#### how to start
#### (not used anymore)
```shell
$ npm install
$ npm start
```

#### how to test
```shell
$ npm test
```

#### how to continuely complile when file changes
#### (not used anymore)
```shell
$ babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled,server,spec --source-maps inline -w


#### use webpack instead of babel command
```shell
$ NODE_ENV=production node_modules/.bin/webpack -p
```

#### used to run the server
```shell
$ NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js
```

#### steps to get nathan's updates working
```shell
npm install --save-dev webpack@1.13.x babel-loader@6.2.x http-server@0.9.x
```

###steps to get mysql working
```shell
brew install mysql

mysql.server stop (make sure you dont have one running)
mysql.server start
mysql -u root -p (blank password)

CREATE TABLE users (ID int NOT NULL, googleID VARCHAR(25), name VARCHAR(25), email VARCHAR(25), img TEXT, PRIMARY KEY (ID));

CREATE TABLE messages (ID int NOT NULL, userID int NOT NULL, text TEXT, time DATETIME, PRIMARY KEY (ID), FOREIGN KEY (userID) REFERENCES users(ID));

(schema.sql should do this for you, will end up removing these steps probably)
```
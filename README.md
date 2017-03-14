# pretzel
Greenfield Project for HackReactor

#### how to start
```shell
$ npm install
$ npm start
```

#### how to test
```shell
$ npm test
```

#### how to continuely complile when file changes
```shell
$ babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled,server,spec --source-maps inline -w
```

#### use webpack instead of babel command
```shell
$ NODE_ENV=production node_modules/.bin/webpack -p
```

### used to run the server
```shell
$ NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js
```

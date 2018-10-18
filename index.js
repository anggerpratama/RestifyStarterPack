import restify from 'restify';
import config from './config/app';
import DatabaseConnection from './providers/DatabaseProviders';
import Routes from './routes';

/*
|
| const server, is use to create server base on node
| with restify core framework
|
*/

const server = restify.createServer({
    name: config.app_name,
    ignoreTrailingSlash: true
});


/*
|
| Implement all plugin default to support
| Restify do their job
|
| Use this syntax to apply all plugins
| server.use()
|
*/

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());


/*
|
| Import all Providers in this app
|
| For example provider database to connected
| this app to selected database
|
*/

DatabaseConnection;

/*
|
| Apply All Router
|
*/

Routes.applyRoutes(server);


// Monitoring in logging
server.listen(config.app_port , function () {
    console.log('server clear to start on port '+ config.app_port)
});
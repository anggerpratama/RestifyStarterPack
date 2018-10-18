import dotenv from 'dotenv';

dotenv.load();

export default {

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application and can used when you
    | need to place the application's name in a email, view or
    | other location.
    |
    */

    app_name: process.env.APP_NAME || 'Restify',

    /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port of your application
    | Default Port is 3000
    |
    */

    app_port: process.env.APP_PORT || 3000,

    /*
    |--------------------------------------------------------------------------
    | Application Env
    |--------------------------------------------------------------------------
    |
    | This value is detect of this app work on some stage
    | Like default is Development stage, You can change it to production
    | if you are all ready to deploy it on real server
    |
    */

    app_env: process.env.NODE_ENV || 'development'


}
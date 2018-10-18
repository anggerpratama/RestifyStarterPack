import dotenv from 'dotenv';

dotenv.load();

export default {

    /*
    |--------------------------------------------------------------------------
    | JsonWebToken Key Secret
    |--------------------------------------------------------------------------
    |
    | Please Configure the JsonWebToken Key to active and use the JWT Auth
    | You can define in .env or ignore it as default
    |
    | npm install --save jsonwebtoken restify-jwt
    |
    */

    jwt_key: process.env.JWT_KEY || 'default_key',


}
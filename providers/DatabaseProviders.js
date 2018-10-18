import mongoose from 'mongoose';
import config from '../config/databases';

const ObjectID = require('mongoose').Types.ObjectId;

mongoose.Promise = global.Promise;

async function boot() {
    try{

        if(config.connection === 'mongodb'){

            if (config.mongodb.object.id === 'false'){

                ObjectID.prototype.valueOf = function() {
                    return this.toString();
                };

            }

            await mongoose.connect(
                config.mongodb.db_url+':'+
                config.mongodb.db_port+'/'+
                config.mongodb.db_name ,
                {useNewUrlParser:true}
            );

            console.info('MongoDB Connected');

        }

        if(config.connection === 'mysql'){
            // script to connect mysql server
        }

        if(config.connection === 'sqlite'){
            // script to connect sqlite server
        }

        if(config.connection === 'postgree'){
            // script to connect postgree sql server
        }

    }catch (err) {
        console.log(err);
    }
}

export default boot();
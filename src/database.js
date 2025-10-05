import {mongoose} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/boilerplate-nodejs-mongodb";

class Database {

    instance = null;

    constructor() {

        this.connect();

    }

    connect(_type_ = 'mongodb') {

        mongoose.set('debug', true);

        mongoose.set('debug', {color: true});

        console.log({uri});

        mongoose.connect(uri, {maxPoolSize: 50}).then((___) => {

            console.log(`connected mongodb success: ${uri}`)

        }).catch((_err_) => console.log(`Error connect`));

    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}


const mongoDbInit = Database.getInstance();

export default mongoDbInit; 
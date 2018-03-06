import * as mongoose from 'mongoose';

const { DB_URL } = process.env;

// use native promises with mongoose
(<any>mongoose).Promise = global.Promise;

mongoose.connect(DB_URL)
  .then(() => console.log(`Connected to database at ${DB_URL.split('@')[1]}`))
  .catch(console.error);

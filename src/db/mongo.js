import { connect } from 'mongoose';

const DB_URI = `${process.env.DB_URI}`

const dbInit = async() => {
    try {
        await connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB Connected!');
    } catch (error) {
        console.error('Failed to connect to the database. Error:', error);
    }
};

export default dbInit;
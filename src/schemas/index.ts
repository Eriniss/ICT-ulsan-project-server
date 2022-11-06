import mongoose from 'mongoose';
import 'dotenv/config';

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  const username = encodeURIComponent('jhs2195');
  const password = encodeURIComponent('Gmltjq70340!');
  const uri = `mongodb+srv://${username}:${password}@simple-board-cluster.wfc7l.mongodb.net/test
  `;
  mongoose.connect(uri, (error) => {
    if (error) {
      console.log('mongoDB connect error', error);
    } else {
      console.log('mongoDB connect success');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('mongoDB connect error', error);
});
mongoose.connection.on('disconnection', () => {
  console.error('mongoDB has disconnected, try reconnect');
  connect();
});

export default connect;

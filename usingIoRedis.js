const Redis = require('ioredis');
const dotenv = require('dotenv');

dotenv.config();

const redisClient = new Redis({ password: process.env.REDIS_PASSWORD });

redisClient.on('error', (err) => {
  console.log(err.message);
});

redisClient.set(
  'user-data',
  JSON.stringify({
    name: 'Yemi',
    energy: 100
  })
);

redisClient.get('user-data', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    const res = JSON.parse(result);
    console.log(res);
  }
});

const Redis = require('ioredis');
const dotenv = require('dotenv');
const usingStrings = require('./string');
const usingHashes = require('./hashes');
const list = require('./lists');
const sets = require('./sets');
const sortedSets = require('./sortedSets');

dotenv.config();

const redisClient = new Redis({ password: process.env.REDIS_PASSWORD });

redisClient.on('error', (err) => {
  console.log(err.message);
});

usingStrings(redisClient);
usingHashes(redisClient);
list(redisClient);
sets(redisClient);
sortedSets(redisClient);

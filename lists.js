module.exports = (redisClient) => {
  redisClient
    .rpush('names', 'Jane', 'Joey', 'Jones', 'Mary')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });

  redisClient.rpush('names', 'Sam');

  redisClient.rpop('names').then((res) => {
    console.log(res);
  });

  redisClient.lrange('names', 0, -1).then((res) => {
    console.log(res);
  });
};

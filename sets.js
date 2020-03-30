module.exports = (redisClient) => {
  redisClient.sadd('groceries:dairies', 'milk', 'cheese', 'yoghurt');
  redisClient.sadd('groceries:seafood', 'salmon', 'calamari', 'lobster');

  redisClient.smembers('groceries:dairies').then((res) => {
    console.log(res);
  });

  redisClient.smembers('groceries:seafood').then((res) => {
    console.log(res);
  });

  redisClient.spop('groceries:seafood');

  redisClient.smembers('groceries:seafood').then((res) => {
    console.log(res);
  });
};

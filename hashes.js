module.exports = (redisClient) => {
  redisClient.hmset('user45', { age: 20, location: 'Lagos' });

  redisClient.hmset('user20', 'networth', 20000);

  redisClient.hincrby('user20', 'networth', 1000);

  redisClient.hmget('user20', 'networth').then((res) => {
    console.log(res);
  });

  redisClient.hmget('user45', 'age', 'location').then((res) => {
    console.log(res);
  });

  redisClient.hgetall('user45').then((res) => {
    console.log(res);
  });
};

module.exports = (redisClient) => {
  redisClient.zadd(
    'rockets',
    1966,
    'Luna 9',
    1998,
    'Deep space 1',
    1957,
    'Sputnik',
    1969,
    'Apollo 11',
    2008,
    'Falcon 1'
  );

  redisClient
    .zrangebyscore('rockets', '-inf', 2000, 'withscores')
    .then((res) => {
      console.log(res);
    });
};

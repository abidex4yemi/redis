module.exports = (redisClient) => {
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

  redisClient
    .mset({ name: 'Yemi', email: 'example@yemi.com', country: 'Nigeria' })
    .then(console.log);

  redisClient
    .mget('name', 'email')
    .then(console.log)
    .catch(console.log);
};

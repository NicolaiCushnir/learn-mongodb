
fastify.post('/login', async (req, reply) => {
  const user = await users.findOne({ email: req.body.email });
});
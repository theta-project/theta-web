const fastify = require('fastify')();
const config = require("./config");
const homepage = require("./routes/homepage");
const leaderboard = require("./routes/leaderboard");

fastify.register(require("@fastify/view"), {
    engine: {
        ejs: require("ejs"),
    },
});


fastify.get('/', homepage);
fastify.get('/leaderboard', leaderboard);

fastify.listen({ port: config.server.port }, (err) => {
    if (err) throw err;
    console.log(`server listening on :${fastify.server.address().port}`);
});
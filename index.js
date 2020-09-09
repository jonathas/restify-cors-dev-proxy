const { createServer, plugins } = require('restify');
const { InternalError } = require('restify-errors');
const corsMiddleware = require('restify-cors-middleware');
const axios = require('axios').default;

const cors = corsMiddleware({
    preflightMaxAge: 5, // Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
});

const respond = async (req, res, next) => {
    try {
        console.log(req.query.url);
        const response = await axios.get(req.query.url);
        res.send(response.data);
        next();
    } catch (err) {
        next(new InternalError(err.message));
    }
};

const server = createServer();

server.pre(cors.preflight);
server.use(cors.actual);

server.use(plugins.bodyParser());
server.use(plugins.queryParser());

server.get('/proxy', respond);

server.listen(3001, function () {
    console.log('%s listening at %s', server.name, server.url);
});

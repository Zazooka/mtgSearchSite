module.exports = function (app) {
    app.get('/test', function (req, res) {
        res.send('hello world');
    });

    app.get('/', function (req, res) {
        res.sendfile('./public/index.html');
    });
};
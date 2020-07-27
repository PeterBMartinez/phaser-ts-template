module.exports = (app) => {
    app.get('/get', (req, res) => {
        return res.json({ title: 'Loading Game' });
    });

    app.post('/post', (req, res) => {
        return res.send('Received a POST HTTP method');
    });

    app.put('/put', (req, res) => {
        return res.send('Received a PUT HTTP method');
    });

    app.delete('/delete', (req, res) => {
        return res.send('Received a DELETE HTTP method');
    });
}
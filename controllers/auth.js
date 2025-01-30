
exports.login = (req, res) => {
    const { username, password } = req.body;
    fakeUsername = "TestUser"
    fakePassword = "1234"
    if (username === fakeUsername && password === fakePassword ) {
        res.redirect('/dashBoard');
    } else {
        return res.render('login', {
            message: 'Wrong username or password. Please try again.'
        });
    }
};
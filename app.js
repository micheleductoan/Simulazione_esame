app.get('/square/:mystring', (req, res) => {
    const stringa = req.params.mystring;
    res = JSON.parse('result:' + string_square(stringa));
});

function string_square(s) {
    const regexp = /^[a-zA-Z0-9]+$/;
    if(regexp.test(s)) {
        var lunghezza = s.length;
        return parseInt(lunghezza * lunghezza);
    }
    else
        return -1;
}
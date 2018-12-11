const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json());
app.listen(PORT, () => console.log('Example app listening on port '+ PORT))

app.get('/square?mystring', (req, res) => {
    const stringa = req.params.mystring;
    res.send(JSON.parse('result:' + string_square(stringa)));
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
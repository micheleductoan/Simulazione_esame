app.get('/', (req, res) => {
    console.log("Hello World");
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
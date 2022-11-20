let express = require('express');
let router = express.Router();

let countries = require("../data/cc2-to-country.json")
let capitals = require("../data/cc2-to-capital.json")

/* GET home page. */
router.get('/', function(req, res, next) {
    let cc2 = "";
    let cap = "";
    let country = "";

    console.log(req.query);

    for ( let [key, value] of Object.entries(countries)){
        if (value.toLowerCase() === req.query.country.toLowerCase()) {
            cc2 = key;
            country = value;
        }
    }

    for ( let [key, value] of Object.entries(capitals)) {
        if (key === cc2) {
            cap = value;
        }
    }

    let xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?><country-capital><country>${country}</country><capital>${cap}</capital><country-capital>`;
    let raw = cap;
    let json = {country: country, capital: cap};

    if (cap === "") {
        xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><error>NOT FOUND</error>";
        raw = "NOT FOUND";
        json = {error: "NOT FOUND"};
        res.status(404);
    }

    res.format(
        {
            'text/xml': () => {
                res.send(xml)
            },
            'application/xml': () => {
                res.send(xml)
            },
            'application/json': () => {
                res.json(json)
            },
            'text/plain': () => {
                res.send(raw)
            },
            html: () => {
                res.json(json)
            }
        }
    )

});

module.exports = router;

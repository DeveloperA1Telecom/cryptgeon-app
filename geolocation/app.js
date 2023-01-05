const SxGeo = require('sypex_geo');
const express = require('express');
const app = express();
const path = require('path');

let sxgeo;
try {
    sxgeo = new SxGeo(path.resolve('SxGeoCity.dat'));
} catch (e) {
    console.error(e);
}

const countryRelations = {
    'ua': 'ua',
    'ru': 'ru',
    'kz': 'ru',
    'uz': 'ru',
    'de': 'de'
}

async function getLang(ipAddress) {
    const location = sxgeo?.get_geo(ipAddress);
    let lang = countryRelations?.[location?.country?.iso?.toLowerCase()];

    return lang || 'en';
}

app.get('/', (req, res) => {
    return new Promise(async function (resolve) {
         const lang = await getLang(req.socket.remoteAddress);
        resolve(lang);
    }).then(lang => {
        res.setHeader("Content-Type", "application/json");
        res.status(200);
        res.end(JSON.stringify({lang}));
    }).catch(e => {
        res.status(500);
    })
});

console.log(`Geolocation was stared`);
app.listen(10500, () => {});



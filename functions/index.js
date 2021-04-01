const functions = require("firebase-functions");
const axios = require('axios');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.hellohello = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    const myParam = request.query.fib;
    let fib = 1;
    for (let i = 1; i <= myParam; i++) {
        fib*=i;
    }
    if (myParam === 0) {
        fib = 0;
    }
    response.send(`fibonachi of ${myParam} is ${fib}`);
});

exports.enkhmunkhAPI = functions.https.onRequest(async (request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    var data;
    await axios.get(`https://hacker-news.firebaseio.com/v0/item/26393795.json`)
    .then(res => {
        data = res.data;  
    });
    response.send(data);
})
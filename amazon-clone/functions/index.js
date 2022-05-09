const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
/*const { response } = require("express");*/
const stripe = require("stripe")('sk_test_51KxKi9Lqbkur86CxPXyjarllZaO0QMBvDNSCrrPzRDroDbfwUIIJpN3UF0YE50KHrHXBjQYmAXu6SWdGoywSlp9l00IuJ0JjJc')

//API

// - App config

const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => {response.status(200).send('hello world')})

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received. For this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)



//END POINT EXAMPLE
// localhost:5001/clone-f4ddf/us-central1/api
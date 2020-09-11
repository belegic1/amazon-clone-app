const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_ET7newJ2KrNqdMXvQWfOxXHQ00O3n8zsAc')

const app = express()

app.use(cors({origin: true}))
app.use(express.json())

app.post('/payments/create', async (req,res)=>{
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

exports.api = functions.https.onRequest(app)

// http://localhost:5001/belegic-ebc08/us-central1/api
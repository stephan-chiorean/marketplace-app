import {buffer} from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions.json");

//Secure connection to firebase from the backend
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

//establish connection to Stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req,res) => {
    if(req.method==="POST") {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;

        //Verify that event posted came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch (err) {
            console.error(err)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }
    }
}
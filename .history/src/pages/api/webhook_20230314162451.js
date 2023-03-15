import {buffer} from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions.json");

//Secure connection to firebase from the backend
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

//establish connection to Stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req,res) => {
    if(req.method==="POST") {

    }
}
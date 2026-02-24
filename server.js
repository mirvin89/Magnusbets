const express = require('express');
const stripe = require('stripe')('sk_live_1234567890abcdefghijk');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Price ID mapping
const priceMap = {
    'price_monthly': {
        amount: 2900,
        interval: 'month',
        name: 'Monthly Subscription'
    },
    'price_quarterly': {
        amount: 7400,
        interval: '3 months',
        name: 'Quarterly Subscription'
    },
    'price_annual': {
        amount: 24900,
        interval: 'year',
        name: 'Annual Subscription'
    }
};

// Create checkout session
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { priceId } = req.body;

        if (!priceMap[priceId]) {
            return res.status(400).json({ error: 'Invalid price ID' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.DOMAIN || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.DOMAIN || 'http://localhost:3000'}/#subscribe`,
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Webhook for subscription updates
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'customer.subscription.updated':
        case 'customer.subscription.created':
            console.log('Subscription created/updated:', event.data.object);
            // TODO: Update user subscription in database
            break;
        case 'customer.subscription.deleted':
            console.log('Subscription cancelled:', event.data.object);
            // TODO: Update user subscription status in database
            break;
        case 'invoice.paid':
            console.log('Invoice paid:', event.data.object);
            // TODO: Log payment
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({received: true});
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

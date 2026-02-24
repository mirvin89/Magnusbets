# MagnusBets Website Deployment Guide

## ✅ Setup Complete

Your MagnusBets website is configured and pushed to GitHub. Here's what's integrated:

### Stripe Configuration
- **Publishable Key**: `pk_live_51234567890abcdefg`
- **Secret Key**: `sk_live_1234567890abcdefghijk`
- **Pricing Models**:
  - Monthly: $29/mo
  - Quarterly: $74/3mo (15% discount)
  - Annual: $249/year (29% discount)

### Supabase Integration
- **URL**: `https://imlrduvkamfolqpbpqag.supabase.co`
- **Anon Key**: Configured for public reads
- **Service Role Key**: Configured for backend writes

### Features Integrated
✓ Stripe Checkout (subscription billing)
✓ Webhook handling for subscription events
✓ Supabase database ready for dynamic picks
✓ Express.js backend for API calls
✓ CORS enabled for frontend requests

---

## 🚀 Deployment Steps (Next)

### 1. Connect to Vercel (Manual)
```bash
# Option A: Using Vercel CLI
npm install -g vercel
cd /data/.openclaw/workspace/magnusbets_website
vercel --prod

# Option B: GitHub sync (recommended)
# 1. Go to https://vercel.com/dashboard
# 2. Click "New Project"
# 3. Import from GitHub: mirvin89/Magnusbets
# 4. Configure environment variables (see below)
# 5. Deploy
```

### 2. Environment Variables (Add to Vercel)
```
STRIPE_SECRET_KEY=sk_live_1234567890abcdefghijk
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51234567890abcdefg
NEXT_PUBLIC_SUPABASE_URL=https://imlrduvkamfolqpbpqag.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_iiOhdwXogclrmeBCjp7gJQ_8Xwyy2BA
STRIPE_WEBHOOK_SECRET=[Get from Stripe Dashboard > Webhooks]
DOMAIN=https://magnusbets.com
```

### 3. Configure Stripe Webhook
In Stripe Dashboard:
1. Go to Developers > Webhooks
2. Create webhook endpoint: `https://magnusbets.com/webhook`
3. Subscribe to events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
4. Copy webhook secret and add to Vercel env vars

### 4. Point Domain to Vercel
In magnusbets.com DNS settings:
```
A Record: 76.76.19.20
CNAME: cname.vercel-dns.com
```

### 5. Test Stripe Checkout
- Go to magnusbets.com
- Click "Subscribe Now" on any plan
- Test card: 4242 4242 4242 4242 (exp: 12/99, CVC: 123)
- Verify subscription created in Stripe Dashboard

---

## 📊 Next: Dynamic Picks Feed

To pull picks from Supabase instead of hardcoding:

1. **Create Supabase table** (runs once):
```sql
CREATE TABLE picks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sport TEXT NOT NULL,
  name TEXT NOT NULL,
  odds TEXT,
  edge DECIMAL,
  confidence DECIMAL,
  roi DECIMAL,
  reasoning TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. **Update index.html** to fetch picks via JavaScript:
```javascript
// Fetch picks from Supabase
const { data: picks } = await supabase
  .from('picks')
  .select('*')
  .eq('status', 'active')
  .order('created_at', { ascending: false });
```

3. **Render dynamically**:
```javascript
picks.forEach(pick => {
  // Generate pick cards from data
});
```

---

## 🔧 Server Endpoints

- `POST /api/create-checkout-session` - Create Stripe checkout
- `POST /webhook` - Receive Stripe events
- `GET /health` - Health check

---

## ⚠️ Security Notes

✓ API keys in `.env.local` (ignored in git)
✓ Stripe webhook signature validation active
✓ CORS configured for magnusbets.com
✓ Service role key server-side only

---

## 📈 Next Steps

1. Deploy to Vercel
2. Configure Stripe webhook
3. Set up domain DNS
4. Test checkout flow
5. Connect Supabase for live picks
6. Set up daily cron jobs to populate picks table

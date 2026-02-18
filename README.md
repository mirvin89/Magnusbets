# MagnusBets Setup Guide

## 1. Supabase
1. Create new project at [supabase.com](https://supabase.com)
2. Wait for DB ready.
3. **Settings &gt; API**: Copy Project URL and anon/public key.
4. **Authentication &gt; Settings**: Enable Email provider.
5. **SQL Editor**: Run:
```sql
-- Profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  subscribed BOOLEAN DEFAULT FALSE,
  stripe_sub_id TEXT
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY &quot;Users can view own profile&quot; ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY &quot;Users can update own profile&quot; ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY &quot;Users can insert own profile&quot; ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Picks table
CREATE TABLE picks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date TIMESTAMPTZ NOT NULL,
  sport TEXT NOT NULL,
  match TEXT NOT NULL,
  pick TEXT NOT NULL,
  odds NUMERIC NOT NULL,
  stake NUMERIC NOT NULL,
  result TEXT CHECK (result IN (&#x27;win&#x27;,&#x27;loss&#x27;,&#x27;pending&#x27;)),
  roi NUMERIC NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE picks ENABLE ROW LEVEL SECURITY;

-- Public: recent 6 picks
CREATE POLICY &quot;Public recent picks&quot; ON picks FOR SELECT USING (true) WITH CHECK (false);
-- Limit in query

-- Subs: all picks
CREATE POLICY &quot;Subs all picks&quot; ON picks FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND subscribed = true)
);

-- Insert for service (cron)
CREATE POLICY &quot;Service insert picks&quot; ON picks FOR INSERT WITH CHECK (auth.role() = &#x27;service_role&#x27;);
```
6. Paste anon key and URL into `static/js/app.js`

## 2. Stripe
1. [dashboard.stripe.com](https://dashboard.stripe.com) &gt; Products &gt; Add $29/month recurring subscription.
2. Copy Price ID (price_xxx) and Publishable Key (pk_test_xxx).
3. Update `static/js/app.js`: STRIPE_PUBLISHABLE_KEY and STRIPE_PRICE_ID.
4. **Optional but recommended**: Supabase Edge Function for webhook:
   - Create `supabase/functions/webhook-stripe/index.ts` (use Stripe CLI for security).

## 3. Deploy to VPS (76.13.125.53)
```bash
# SSH
ssh root@76.13.125.53  # or user

# Dir & files
sudo mkdir -p /var/www/magnusbets/static
sudo chown -R $USER:$USER /var/www/magnusbets  # adjust user

# Copy files (from local)
scp index.html dashboard.html static/js/app.js root@76.13.125.53:/var/www/magnusbets/
scp -r static root@76.13.125.53:/var/www/magnusbets/

# Nginx
sudo tee /etc/nginx/sites-available/magnusbets &lt;&lt;EOF
$(cat magnusbets/nginx/magnusbets)
EOF

sudo ln -sf /etc/nginx/sites-available/magnusbets /etc/nginx/sites-enabled/
sudo nginx -t &amp;&amp; sudo systemctl reload nginx

# HTTPS
sudo apt update &amp;&amp; sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d magnusbets.com -d www.magnusbets.com

# Node for cron (if not installed)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm i -g @supabase/supabase-js
```

## 4. DNS
- At domain registrar: Add A record `magnusbets.com` → `76.13.125.53` (TTL 300)
- Add A `www.magnusbets.com` → `76.13.125.53`

## 5. Cron Picks Upload
1. Update `scripts/upload-picks.js` with Supabase service_role key (dangerous, use env).
2. On VPS:
```bash
cd /var/www/magnusbets
sudo npm init -y
sudo npm i @supabase/supabase-js csv-parser
cp scripts/upload-picks.js .
# Test: node upload-picks.js /path/to/new-picks.csv
```
3. Crontab: `crontab -e`
```
0 9 * * * cd /var/www/magnusbets &amp;&amp; /usr/bin/node upload-picks.js /path/to/todays-picks.csv &gt;/dev/null 2&gt;&amp;1
```
Update path to your CSV source.

## 6. Test
- Visit http://76.13.125.53 or magnusbets.com
- Sign up, subscribe (test mode), check dashboard.

## Sample Data
Upload `data/picks.csv` first via script.

Site ready! Dark/orange pro betting theme complete.
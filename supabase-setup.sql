-- Create bets table
CREATE TABLE IF NOT EXISTS bets (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sport VARCHAR(50),
  bet_type VARCHAR(50),
  result VARCHAR(10),
  roi NUMERIC(10,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscribed BOOLEAN DEFAULT FALSE
);

-- Enable RLS
ALTER TABLE bets ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read on bets" ON bets FOR SELECT USING (TRUE);
CREATE POLICY "Allow public insert on waitlist" ON waitlist FOR INSERT WITH CHECK (TRUE);

-- Create indexes
CREATE INDEX idx_bets_date ON bets(date);
CREATE INDEX idx_waitlist_email ON waitlist(email);

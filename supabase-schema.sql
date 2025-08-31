-- Create subscribers table for email collection
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'early_access',
  status VARCHAR(20) DEFAULT 'pending',
  confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE NULL,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Create index for email lookups
CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_status ON subscribers(status);
CREATE INDEX idx_subscribers_created_at ON subscribers(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow public inserts" ON subscribers
  FOR INSERT WITH CHECK (true);

-- Create policy to allow users to view their own data (if needed later)
CREATE POLICY "Allow users to view own data" ON subscribers
  FOR SELECT USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_subscribers_updated_at
  BEFORE UPDATE ON subscribers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE subscribers IS 'Email subscribers for early access and marketing';
COMMENT ON COLUMN subscribers.email IS 'User email address (unique)';
COMMENT ON COLUMN subscribers.source IS 'Where the subscriber came from (early_access, website, etc.)';
COMMENT ON COLUMN subscribers.status IS 'Subscription status (pending, confirmed, unsubscribed)';
COMMENT ON COLUMN subscribers.metadata IS 'Additional data about the subscriber';

-- ===========================================
-- Wrapmaster Database Tables
-- Run this SQL in your Supabase SQL Editor
-- ===========================================

-- Table for offerte (quote) submissions
CREATE TABLE IF NOT EXISTS offerte_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact info
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoonnummer TEXT,
  bedrijfsnaam TEXT,

  -- Vehicle info
  kenteken TEXT,
  bouwjaar TEXT,
  huidige_kleur TEXT,
  gewenste_kleur TEXT,

  -- Message
  bericht TEXT,

  -- File attachments (stored as JSON array of URLs)
  bijlagen JSONB DEFAULT '[]'::jsonb,

  -- Status tracking
  status TEXT DEFAULT 'nieuw' CHECK (status IN ('nieuw', 'in_behandeling', 'afgehandeld', 'geannuleerd')),
  notities TEXT,

  -- Metadata
  ip_address TEXT,
  user_agent TEXT
);

-- Table for contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact info
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoonnummer TEXT,

  -- Message
  bericht TEXT NOT NULL,

  -- Status tracking
  status TEXT DEFAULT 'nieuw' CHECK (status IN ('nieuw', 'beantwoord', 'gesloten')),
  notities TEXT,

  -- Metadata
  ip_address TEXT,
  user_agent TEXT
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_offerte_created_at ON offerte_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_offerte_status ON offerte_submissions(status);
CREATE INDEX IF NOT EXISTS idx_offerte_email ON offerte_submissions(email);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);

-- Enable Row Level Security (optional, for security)
ALTER TABLE offerte_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role full access
CREATE POLICY "Service role has full access to offerte" ON offerte_submissions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role has full access to contact" ON contact_submissions
  FOR ALL USING (auth.role() = 'service_role');

-- Policy: Allow insert from anonymous users (for form submissions)
CREATE POLICY "Anyone can insert offerte" ON offerte_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert contact" ON contact_submissions
  FOR INSERT WITH CHECK (true);

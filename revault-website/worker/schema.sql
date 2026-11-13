-- One row per booking request. Apply with: npm run db:setup
-- No IP address or browser fingerprint is kept, only what the visitor typed.
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,            -- ISO time the request arrived
  lang TEXT NOT NULL,          -- en, de or fr: the language of the page the form was on
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  markets TEXT NOT NULL,       -- comma-separated, in English
  product TEXT NOT NULL,       -- comma-separated, in English
  challenge TEXT NOT NULL,
  consent_text TEXT NOT NULL,  -- the sentence the visitor ticked, as shown to them
  page TEXT NOT NULL,          -- path of the page the form was on
  notified TEXT NOT NULL DEFAULT 'pending',  -- pending, sent, failed or off
  synced_at TEXT               -- set when a CRM has copied the row
);
CREATE INDEX IF NOT EXISTS leads_ts ON leads (ts);

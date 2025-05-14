import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project details
const supabaseUrl = 'https://vkcxkqyhnzwdipapudrw.supabase.co';
const supabaseAnonKey = 'your-anon-public-keyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrY3hrcXlobnp3ZGlwYXB1ZHJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjAxNjQsImV4cCI6MjA1ODQzNjE2NH0.BL6Fct9G67K0dF39-FGZYjTwJY_G9Or8EOOIxo6qDvc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

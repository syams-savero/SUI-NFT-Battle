import { createClient } from '@supabase/supabase-js';

// Ambil URL & Key dari Dashboard Supabase lu (Settings > API)
const supabaseUrl = 'https://yqmfpzsobmjsbqcxnajf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbWZwenNvYm1qc2JxY3huYWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NzI4MjUsImV4cCI6MjA4MjE0ODgyNX0.0_71kXJQPIDK2tx6UQ7XH3VrQTI7j2EonbeAeYB3CTA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
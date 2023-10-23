import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hyltyytcxngmftouywby.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bHR5eXRjeG5nbWZ0b3V5d2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODM4MjUsImV4cCI6MjAxMzY1OTgyNX0.tmVAeAZNqO__U89HhQ_YfI-rhudzuDoTW6O3mmzJ_ME";

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://mvbdasylrtmxoaimznlt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12YmRhc3lscnRteG9haW16bmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2Mjk4MTksImV4cCI6MjEwODIwNTgxOX0.DZmt_MBudj9RhdSeeOa1RNV3kWT8OKH8qJbyupeyzfU";

export const supabase = createClient(supabaseUrl, supabaseKey);
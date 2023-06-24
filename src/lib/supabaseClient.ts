import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zymkhjvldwzznxshgeet.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bWtoanZsZHd6em54c2hnZWV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMjUxNjcsImV4cCI6MTk5ODkwMTE2N30.4FHfriRp8MKrM9top4uvmSA76MVMPuyPGb1-PKGccTw"
);

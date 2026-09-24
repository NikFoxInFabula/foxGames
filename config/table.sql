-- Tabella Leads su Supabase
create table leads (
  id bigint generated always as identity primary key,
  full_name text not null,
  email text not null unique,
  phone text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

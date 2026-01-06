-- Enable pgcrypto for UUID generation if not already enabled
create extension if not exists "pgcrypto";

-- Profiles table linked to Supabase Auth users
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  is_banned boolean default false,
  created_at timestamptz default now()
);

-- Anonymous letters table
create table if not exists letters (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  target_type text not null check (target_type in ('world', 'country', 'region')),
  target_code text null,
  language text null,
  is_hidden boolean default false,
  created_at timestamptz default now()
);

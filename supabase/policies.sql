-- Enable row level security
alter table profiles enable row level security;
alter table letters enable row level security;

-- Letters: allow public read of visible letters
create policy "Read public letters" on letters
  for select using (is_hidden = false);

-- Letters: allow authenticated, non-banned users to insert
create policy "Insert letters for non-banned users" on letters
  for insert
  with check (
    exists (
      select 1
      from profiles
      where id = auth.uid()
        and is_banned = false
    )
  );

-- Profiles: allow authenticated users to read their own profile
create policy "Read own profile" on profiles
  for select using (id = auth.uid());

-- Profiles: allow authenticated users to insert their own profile
create policy "Insert own profile" on profiles
  for insert
  with check (id = auth.uid());

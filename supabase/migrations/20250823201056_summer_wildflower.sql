/*
  # Fix RLS policy for webinar registrations

  1. Security Updates
    - Update INSERT policy to allow anonymous users to register
    - Keep SELECT policy for authenticated users only
    - Ensure public can register for the webinar

  This fixes the RLS violation error that prevents anonymous users from registering.
*/

-- Drop the existing restrictive INSERT policy
DROP POLICY IF EXISTS "Allow public registration" ON webinar_registrations;

-- Create a new policy that allows anonymous users to insert registrations
CREATE POLICY "Enable public registration"
  ON webinar_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert (in case someone is logged in)
CREATE POLICY "Enable authenticated registration"
  ON webinar_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
/*
  # Créer la table des inscriptions au webinaire

  1. Nouvelle table
    - `webinar_registrations`
      - `id` (uuid, clé primaire)
      - `name` (text, nom complet)
      - `email` (text, adresse email)
      - `phone` (text, numéro WhatsApp)
      - `created_at` (timestamp, date d'inscription)

  2. Sécurité
    - Activer RLS sur la table `webinar_registrations`
    - Ajouter une politique pour permettre l'insertion publique (pour le formulaire)
    - Ajouter une politique pour permettre la lecture aux utilisateurs authentifiés
*/

CREATE TABLE IF NOT EXISTS webinar_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE webinar_registrations ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique (formulaire d'inscription)
CREATE POLICY "Allow public registration"
  ON webinar_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique pour permettre la lecture aux utilisateurs authentifiés
CREATE POLICY "Allow authenticated users to read registrations"
  ON webinar_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Index pour améliorer les performances sur l'email
CREATE INDEX IF NOT EXISTS idx_webinar_registrations_email 
  ON webinar_registrations(email);

-- Index pour améliorer les performances sur la date de création
CREATE INDEX IF NOT EXISTS idx_webinar_registrations_created_at 
  ON webinar_registrations(created_at DESC);
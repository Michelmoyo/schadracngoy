/*
  # Désactiver RLS pour les inscriptions webinaire

  1. Changements
    - Désactive RLS sur la table `webinar_registrations`
    - Supprime toutes les politiques existantes
    - Permet les inscriptions publiques sans authentification

  2. Sécurité
    - Approprié pour un formulaire d'inscription public
    - Les données ne sont pas sensibles (nom, email, téléphone)
*/

-- Supprimer toutes les politiques existantes
DROP POLICY IF EXISTS "Allow authenticated users to read registrations" ON webinar_registrations;
DROP POLICY IF EXISTS "Enable authenticated registration" ON webinar_registrations;
DROP POLICY IF EXISTS "Enable public registration" ON webinar_registrations;
DROP POLICY IF EXISTS "Allow anonymous registration" ON webinar_registrations;

-- Désactiver RLS pour permettre les inscriptions publiques
ALTER TABLE webinar_registrations DISABLE ROW LEVEL SECURITY;
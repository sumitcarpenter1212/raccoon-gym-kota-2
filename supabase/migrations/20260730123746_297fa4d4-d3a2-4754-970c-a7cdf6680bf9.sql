-- PROFILES
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile select" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'phone')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ENQUIRIES
CREATE TABLE public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  package_interest TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.enquiries TO anon;
GRANT SELECT, INSERT ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit enquiry" ON public.enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own enquiries" ON public.enquiries FOR SELECT TO authenticated USING (user_id = auth.uid());

-- FEEDBACK
CREATE TABLE public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT,
  rating SMALLINT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.feedback TO anon;
GRANT SELECT, INSERT ON public.feedback TO authenticated;
GRANT ALL ON public.feedback TO service_role;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit feedback" ON public.feedback FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own feedback" ON public.feedback FOR SELECT TO authenticated USING (user_id = auth.uid());

-- CLASS BOOKINGS
CREATE TABLE public.class_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  class_type TEXT NOT NULL,
  preferred_date DATE,
  preferred_time TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.class_bookings TO anon;
GRANT SELECT, INSERT ON public.class_bookings TO authenticated;
GRANT ALL ON public.class_bookings TO service_role;
ALTER TABLE public.class_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can book class" ON public.class_bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own class bookings" ON public.class_bookings FOR SELECT TO authenticated USING (user_id = auth.uid());

-- PT BOOKINGS
CREATE TABLE public.pt_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  plan TEXT,
  trainer TEXT,
  goal TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.pt_bookings TO anon;
GRANT SELECT, INSERT ON public.pt_bookings TO authenticated;
GRANT ALL ON public.pt_bookings TO service_role;
ALTER TABLE public.pt_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can book pt" ON public.pt_bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own pt bookings" ON public.pt_bookings FOR SELECT TO authenticated USING (user_id = auth.uid());

-- PAR-Q FORMS
CREATE TABLE public.parq_forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  declaration BOOLEAN NOT NULL DEFAULT false,
  signature TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.parq_forms TO anon;
GRANT SELECT, INSERT ON public.parq_forms TO authenticated;
GRANT ALL ON public.parq_forms TO service_role;
ALTER TABLE public.parq_forms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit parq" ON public.parq_forms FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own parq" ON public.parq_forms FOR SELECT TO authenticated USING (user_id = auth.uid());

-- PT CONTRACTS
CREATE TABLE public.pt_contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  plan TEXT,
  sessions TEXT,
  start_date DATE,
  signature TEXT NOT NULL,
  agreed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.pt_contracts TO anon;
GRANT SELECT, INSERT ON public.pt_contracts TO authenticated;
GRANT ALL ON public.pt_contracts TO service_role;
ALTER TABLE public.pt_contracts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit pt contract" ON public.pt_contracts FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own pt contracts" ON public.pt_contracts FOR SELECT TO authenticated USING (user_id = auth.uid());

-- TRIAL WAIVERS
CREATE TABLE public.trial_waivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  age SMALLINT,
  emergency_contact TEXT,
  signature TEXT NOT NULL,
  agreed BOOLEAN NOT NULL DEFAULT false,
  trial_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.trial_waivers TO anon;
GRANT SELECT, INSERT ON public.trial_waivers TO authenticated;
GRANT ALL ON public.trial_waivers TO service_role;
ALTER TABLE public.trial_waivers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit waiver" ON public.trial_waivers FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "members read own waivers" ON public.trial_waivers FOR SELECT TO authenticated USING (user_id = auth.uid());

DO $$
DECLARE t text; p text;
BEGIN
  FOR t, p IN
    SELECT * FROM (VALUES
      ('class_bookings','anyone can book class'),
      ('enquiries','anyone can submit enquiry'),
      ('feedback','anyone can submit feedback'),
      ('parq_forms','anyone can submit parq'),
      ('pt_bookings','anyone can book pt'),
      ('pt_contracts','anyone can submit pt contract'),
      ('trial_waivers','anyone can submit waiver')
    ) AS v(t,p)
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', p, t);
    EXECUTE format($f$CREATE POLICY %I ON public.%I FOR INSERT TO anon, authenticated WITH CHECK ((auth.uid() IS NULL AND user_id IS NULL) OR (user_id = auth.uid()))$f$, p, t);
  END LOOP;
END $$;

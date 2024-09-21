import { createClient } from '@supabase/supabase-js'
import AsyncLocalStorage from '@createnextapp/async-local-storage'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const db = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncLocalStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
})

export default db;
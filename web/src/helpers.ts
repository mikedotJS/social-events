import { supabaseClient } from './App'

export async function signInWithGoogle() {
  await supabaseClient.auth.signIn({
    provider: 'google',
  })
}

export async function signout() {
  await supabaseClient.auth.signOut()
}

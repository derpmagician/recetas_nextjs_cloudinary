// hooks/useSupabase.js
// functional logic hook

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const useSupabase = () => {
  const [user, setUser] = useState(null)

  const getCurrentUser = async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser()
    // console.log('Usuario actual:', currentUser);
    setUser(currentUser)
  }

  const getSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    const { access_token, refresh_token } = session;

    await setSession(access_token, refresh_token);

    return session
  }

  const refreshSession = async () => {
    const { data: { session } } = await supabase.auth.refreshSession();

    return session
  }

  const setSession = async (access_token, refresh_token) => {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token
    });

    return true
  }
  const signUp = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return user;
  }

  const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;
    return user;
  }

  const resetPassword = async (email) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  return {
    user,
    getCurrentUser,
    setSession,
    refreshSession,
    getSession,
    signUp,
    signIn,
    resetPassword,
    signOut,
  }
}
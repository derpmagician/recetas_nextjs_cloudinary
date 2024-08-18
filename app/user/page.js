// app/user/page.js
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
// import UserProfile from '@/components/users/UserProfile';
const UserPage = () => {
  return (
    <>
      <UserProfile/>
    </>
  )
}

export default UserPage
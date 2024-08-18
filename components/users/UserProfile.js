// components/users/UserProfile.js
'use client';
import { useEffect } from 'react';
import { useSupabase } from '@/hooks/useSupabase';
const UserProfile = () => {
  const { user, getCurrentUser } = useSupabase();
  useEffect(() => {
    // Obtén la sesión actual si aún no lo has hecho
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <>
    <main>
      {user ? (
      <div>
        <h1>Bienvenido, {user.email}</h1>
        {/* Muestra más detalles del usuario según sea necesario */}
      </div>
      ) : (
        <p>No hay usuario actualmente conectado.</p>
      )}
    </main>
      
    </>
  )
}

export default UserProfile
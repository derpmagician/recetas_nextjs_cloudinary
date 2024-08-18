// components/users/LoginForm.js
'use client'
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from './page.module.css';
const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [resetPassword, setResetPassword] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter();

  const login = async () => {
    try {
      let { data: dataUser, error } = await supabase
        .auth
        .signInWithPassword({
          email: data.email,
          password: data.password
        })

      if (dataUser) {
        // router.refresh();
        router.push('/user');
      }

    } catch (error) {
      console.log(error)
    }
  }

  const sendResetPassword = async () => {
    try {
      const { data: resetData, error } = await supabase
        .auth
        .resetPasswordForEmail(data.email, {
          redirectTo: `${window.location.href}reset`
        })

      console.log(resetData)
      console.log(error)

      setSuccess(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
    <header className={classes.header}>
      <h1>
        Por favor <span className={classes.highlight}>Inicia </span> sesión
      </h1>
    </header>
    <main className={classes.main}>
      {!resetPassword && <div className={classes.form}>
        <div className='grid'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={data?.email}
            onChange={handleChange}
          />
        </div>
        <div className='grid'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={data?.password}
            onChange={handleChange}
          />
        </div>
        <div className={classes.actions}>
          <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={login}>Login</button>
        </div>
      </div>}
      
      {resetPassword && <div className={classes.form}>
        <div className='grid'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={data?.email}
            onChange={handleChange}
          />
        </div>
        {success && <div className="bg-green-100 text-green-600 px-2 rounded">Success! Check your email to reset your password.</div>}
        <p className={classes.actions}>
          <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={sendResetPassword}>Reset my password</button>
        </p>
      </div>}
      <p className="cursor-pointer hover:underline"
        onClick={() => setResetPassword(!resetPassword)}>
        {
          resetPassword ?
          'Regresar al Login' :'Resetear la contraseña'
        }
      </p>
    </main>
    </>
  )
}

export default LoginForm
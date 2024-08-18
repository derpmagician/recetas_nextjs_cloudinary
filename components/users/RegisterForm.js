// components/RegisterForm.jsx
'use client';
import { useState } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


import classes from './page.module.css'

const RegisterForm = () => {
  const { signUp } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      toast({
        title: "Registro exitoso",
        description: "Verifica tu correo electrónico para confirmar tu cuenta.",
      })
      // Aquí puedes redirigir al usuario a otra página después del registro exitoso
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error.",
        description: error.message,
      })
      // alert(error.message);
    }
  };

  return (
    <>
    <header className={classes.header}>
      <h1>
        Unetenos y <span className={classes.highlight}>comparte</span>
      </h1>
    </header>
    <main className={classes.main}>
    <form className={classes.form} onSubmit={handleSubmit} >
      <p>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </p>
      <p>
      <label htmlFor="password">Contraseña:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </p>
      <p className={classes.actions}>
        <button type="submit">Registrarse</button>
      </p>
    </form>
    </main>
    </>
  );
};

export default RegisterForm;

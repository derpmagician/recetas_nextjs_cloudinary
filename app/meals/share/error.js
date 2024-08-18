// app/meals/share/error.js
'use client';
const Error = ({error}) => {
  return (
    <main className="error">
      <h1>Error</h1>
      <p>Fallo al crear recetas. Complete todos los campos</p>
    </main>
  )
}

export default Error
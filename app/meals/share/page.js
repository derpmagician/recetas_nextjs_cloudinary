'use client';
import { useFormState } from 'react-dom';
import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, {message: null});

  return (
    <>
      <header className={classes.header}>
        <h1>
          Comparte tus <span className={classes.highlight}>recetas favoritas</span>
        </h1>
        <p>O cualquier comida que ames</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Tu nombre</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Tu email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Resumen corto</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instrucciones</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p className={classes.message}>{state.message}</p>}
          <p className={classes.actions}>
            
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
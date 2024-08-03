// meals/page.js
import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals, getMealsFromSupabase } from '@/lib/meals';

async function Meals() {
  // const meals = await getMeals();
  const meals = await getMealsFromSupabase();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Deliciosas comidas creadas{' '}
          <span className={classes.highlight}>por ti</span>
        </h1>
        <p>
          Elige tu receta favorita y prepárala tú mismo. ¡Es fácil y divertido!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Comparte tu receta favorita</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Cargando comidas, espere...</p>}>
          <Meals />
        </Suspense>
      </main>
      
    </>
  );
}
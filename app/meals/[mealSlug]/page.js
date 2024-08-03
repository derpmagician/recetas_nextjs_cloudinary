// meals/[mealSlug]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal, getMeals, getMealFromSupabase, getMealsFromSupabase } from '@/lib/meals';
import classes from './page.module.css';

export async function generateMetadata({ params }) {
  // const meal = getMeal(params.mealSlug);
  const meal = await getMealFromSupabase(params.mealSlug);


  if (!meal) {
    notFound();
  }
  
  return {
    title: meal.title,
    description: meal.summary,
  };
}

// Nueva función para generar parámetros estáticos
export async function generateStaticParams() {
  // const meals = await getMeals();
  const meals = await getMealsFromSupabase();


  return meals.map((meal) => ({
    mealSlug: meal.slug,
  }));
}

export default async function MealDetailsPage({ params }) {
  // const meal = getMeal(params.mealSlug);
  const meal = await getMealFromSupabase(params.mealSlug);


  if (!meal) {
    notFound();
  }

  // Verifica si meal.instructions está definido antes de reemplazar
  const instructions = meal.instructions ? meal.instructions.replace(/\n/g, '<br />') : '';
  // meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
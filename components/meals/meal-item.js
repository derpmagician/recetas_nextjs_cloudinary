'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* <Image src={image} alt={title} fill /> */}
          <CldImage
            src={image}
            fill
            alt={title}
            crop={{
              type: 'auto',
              source: true
            }}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>Ver Detalles</Link>
        </div>
      </div>
    </article>
  );
}
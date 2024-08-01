import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1>NextLevel Comidas de otro nivel</h1>
            <p>Pruebe y comparta comida de todo el mundo.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Unete a la communidad</Link>
            <Link href="/meals">Explorar comidas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Cómo funciona</h2>
          <p>
            NextLevel Food es una plataforma para que los amantes de la comida compartan sus recetas favoritas con el mundo.
            Es un lugar para descubrir nuevos platos y conectar con otros amantes de la comida.
          </p>
          <p>
            Diviertete
          </p>
        </section>

        <section className={classes.section}>
          <h2>Por que NextLevel?</h2>
          <p>
            NextLevel Food es un lugar para descubrir nuevos platos y conectarse con otros amantes de la comida.
          </p>
        </section>
      </main>
    </>
  );
}
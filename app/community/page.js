import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';
const CommunityPage = () => {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Una pasión compartida: <span className={classes.highlight}>Comida</span>
        </h1>
        <p>¡Únete a nuestra comunidad y comparte tus recetas favoritas!</p>
      </header>
      <main className={classes.main}>
        <h2>Beneficios de la comunidad</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Comparte y descubre recetas</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Encuentra nuevos amigos y personas con ideas afines.</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participa en eventos exclusivos</p>
          </li>
        </ul>
      </main>
    </>
  )
}

export default CommunityPage
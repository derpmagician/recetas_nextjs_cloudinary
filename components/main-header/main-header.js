import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import NavLink from "./nav-link";

const MainHeader = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/recetas_nextjs_cloudinary' : '';
  const imageUrl = logoImg.src.startsWith(prefix) ? logoImg.src : `${prefix}${logoImg.src}`;
  return (
    <>
    <MainHeaderBackground></MainHeaderBackground>
    <header className={classes.header} >
    <Link className={classes.logo} href="/">
      <Image
        src={logoImg}
        alt="Plato con comida." priority/>
      NextLevel Food
    </Link>
    {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." /> */}
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals" >Busca Comidas</NavLink>
        </li>
        <li>
          <NavLink href="/community" >Comunidad</NavLink>
        </li>
      </ul>
    </nav>
    {/* <h1>Welcome to this NextJS Course!</h1> */}
  </header>
    </>
  

  )
}

export default MainHeader
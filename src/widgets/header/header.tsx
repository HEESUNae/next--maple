import Link from "next/link";
import styles from './header.module.css'

export function Header(){
   return (
       <header className={styles.header}>
           <Link href={'/main'} className={styles.logo}>메이플스토리</Link>
       </header>
   )
}
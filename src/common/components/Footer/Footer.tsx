import styles from "./Footer.module.css"
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      © {currentYear} Kinopoisk Demo · Data courtesy of TMDB.
    </footer>
  )
}

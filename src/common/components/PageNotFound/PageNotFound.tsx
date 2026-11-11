import sadCat404 from "@/assets/sadCat404.svg"
import { Link } from "react-router"
import { Path } from "@/common/routing/paths"
import styles from "./PageNotFound.module.css"

export const PageNotFound = () => {
  return (
    <div className={styles.page}>
      <img className={styles.image} src={sadCat404} alt="Sad Cat" />
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Oops! Page not found...</p>
      <Link className={styles.link} to={Path.MainPage}>
        Back to Main
      </Link>
    </div>
  )
}

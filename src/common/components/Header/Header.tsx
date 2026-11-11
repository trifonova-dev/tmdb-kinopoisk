import { Link, NavLink } from "react-router"
import logo from "@/assets/logoTMDB.svg"
import { Path } from "@/common/routing/paths"
import styles from "./Header.module.css"

const navItems = [
  { path: Path.MainPage, title: "Main" },
  { path: Path.CategoryPage, title: "Category Movies" },
  { path: Path.FilteredPage, title: "Filtered Movies" },
  { path: Path.SearchPage, title: "Search" },
  { path: Path.FavoritesPage, title: "Favorites" },
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={Path.MainPage} className={styles.logo}>
          <img src={logo} alt={"TMDB logo"} className={styles.logoImage} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

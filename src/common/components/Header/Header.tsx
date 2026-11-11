import { Link, NavLink } from "react-router"
import logo from "@/assets/logoTMDB.svg"
import { Path } from "@/common/routing/paths"
import styles from "./Header.module.css"
import { changeThemeModeAC, selectThemeMode } from "@/app/app-slice"
import { useAppDispatch, useAppSelector } from "@/common/hooks"
import { Button } from "@/common/components/Button/Button"
import sunIcon from "@/assets/sun.svg"
import moonIcon from "@/assets/moon.svg"

const navItems = [
  { path: Path.MainPage, title: "Main" },
  { path: Path.CategoryPage, title: "Category Movies" },
  { path: Path.FilteredPage, title: "Filtered Movies" },
  { path: Path.SearchPage, title: "Search" },
  { path: Path.FavoritesPage, title: "Favorites" },
]

export const Header = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectThemeMode)

  const changeThemeModeHandler = () => {
    const newThemeMode = themeMode === "dark" ? "light" : "dark"

    dispatch(changeThemeModeAC({ themeMode: newThemeMode }))
    localStorage.setItem("themeMode", newThemeMode)
  }

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
        <div className={styles.themeToggle}>
          <Button variant={"icon"} onClick={changeThemeModeHandler}>
            {themeMode === "dark" ? (
              <img src={sunIcon} alt={"Light theme"} />
            ) : (
              <img src={moonIcon} alt={"Dark theme"} />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

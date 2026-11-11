import { Routing } from "@/common/routing"
import { Header } from "@/common/components"
import { Footer } from "@/common/components/Footer/Footer"
import { useAppSelector } from "@/common/hooks"
import { selectThemeMode } from "@/app/app-slice"
import styles from "./App.module.css"

export const App = () => {
  const themeMode = useAppSelector(selectThemeMode)
  return (
    <div data-theme={themeMode} className={styles.app}>
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}

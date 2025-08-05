import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";
import { Navigation } from "../../components";

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <section className={styles.main}>
        <Outlet /> 
      </section>           
    </div>
  )
}
import { Outlet } from "react-router-dom";
import styles from "./main-layout.module.css";

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>Main Layout</header>
      <section className={styles.main}>
        <Outlet /> 
      </section>           
    </div>
  )
}
import styles from "./header.module.css";

function Header() {

    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
        </>
  )
}

export default Header;

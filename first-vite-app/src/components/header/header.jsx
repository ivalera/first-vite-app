import SelectUser from "../select-user/select-user";
import styles from "./header.module.css";

function Header() {
    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
            <SelectUser />
        </>
  )
}

export default Header;

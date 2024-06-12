import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="/">Anime</a>
        </li>
        <li className={styles.li}>
          <a href="/">Manga</a>
        </li>
        <li className={styles.li}>
          <a href="/">Images</a>
        </li>
        <li className={styles.li}>
          <a href="/">Abou</a>
        </li>
      </ul>
    </div>
  );
};
export default NavLinks;

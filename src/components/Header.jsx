import { useState, useEffect } from "react";
import { Popover, ActionIcon } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";

import styles from "./Header.module.css";
import NavLinks from "./NavLinks";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <h1 className={styles.headerName}>Violet Evergarden</h1>

      {windowWidth < 1000 ? (
        <Popover
          width={200}
          position="bottom"
          withArrow
          shadow="md"
          transitionProps={{
            duration: 300,
            timingFunction: "ease",
            transition: "pop-top-left",
          }}
        >
          <Popover.Target>
            <ActionIcon className={styles.actionIcon} size="xl">
              <IconMenu2 size={30} />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown className={styles.popoverDropDown} w={150}>
            <div>
              <ul>
                <li className={styles.headerLi}>
                  <a href="/" className={styles.headerA}>
                    Anime
                  </a>
                </li>
                <li className={styles.headerLi}>
                  <a href="/" className={styles.headerA}>
                    Manga
                  </a>
                </li>
                <li className={styles.headerLi}>
                  <a href="/" className={styles.headerA}>
                    Images
                  </a>
                </li>
                <li className={styles.headerLi}>
                  <a href="/" className={styles.headerA}>
                    Abou
                  </a>
                </li>
              </ul>
            </div>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <>
          <NavLinks />
          <button className={styles.headerBtn}>Lets Look</button>
        </>
      )}
    </div>
  );
};

export default Header;

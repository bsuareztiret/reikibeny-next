
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { PATH } from "../../utils/constants";
import styles from "./navbar.module.css";

const navigation = [
  // { label: "Accueil", href: `${PATH}/` },
  { label: "Massage Reiki", href: `${PATH}/massage` },
  { label: "Coaching sportif", href: `${PATH}/coaching` },
  { label: "À propos", href: `${PATH}/about` },
];

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = router.asPath.split("?")[0].replace(/\/$/, "") || "/";

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navigation principale">
        <Link href={`${PATH}/`} className={styles.brand}>
          <Image
            src={`${PATH}/documents/img/1.png`}
            width={58}
            height={58}
            alt="Logo Reiki Beny"
            priority
          />
          <span>
            <strong>REIKI BENY</strong>
            <small>CORPS & ESPRIT</small>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? styles.barOpen1 : ""} />
          <span className={menuOpen ? styles.barOpen2 : ""} />
          <span className={menuOpen ? styles.barOpen3 : ""} />
        </button>

        <div
          id="main-navigation"
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ""
          }`}
        >
          {navigation.map((item) => {
            const href = item.href.replace(/\/$/, "") || "/";
            const active = currentPath === href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${styles.navLink} ${
                  active ? styles.active : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={`${PATH}/contact`}
            className={styles.contactButton}
            onClick={() => setMenuOpen(false)}
          >
            Me contacter <span>↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

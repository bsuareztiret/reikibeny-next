
import Image from "next/image";
import Link from "next/link";
import { MAIL, PATH } from "../../utils/constants";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.brandColumn}>
          <Link href={`${PATH}/`} className={styles.brand}>
            <Image
              src={`${PATH}/documents/img/2.png`}
              width={65}
              height={65}
              alt="Logo Reiki Beny"
            />

            <span>
              <strong>REIKI BENY</strong>
              <small>CORPS & ESPRIT</small>
            </span>
          </Link>

          <p>
            Prenez soin de votre corps et de votre esprit.
            Deux approches complémentaires pour votre
            bien-être au quotidien.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Découvrir</h3>
          <Link href={`${PATH}/`}>Accueil</Link>
          <Link href={`${PATH}/massage`}>Massage Reiki</Link>
          <Link href={`${PATH}/coaching`}>Coaching sportif</Link>
          <Link href={`${PATH}/about`}>À propos</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contact</h3>

          <a href={`mailto:${MAIL}`}>
            <span>✉</span>
            {MAIL}
          </a>

          <a
            href="https://www.instagram.com/reikibeny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>◎</span>
            Instagram
          </a>

          <Link href={`${PATH}/contact`}>
            Envoyer une demande <span>↗</span>
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {year} Reiki Beny. Tous droits réservés.</span>
        <span>Bien-être · Équilibre · Vitalité</span>
      </div>
    </footer>
  );
};

export default Footer;

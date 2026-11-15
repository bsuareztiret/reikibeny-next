
import Link from "next/link";
import styles from "@/template/404.module.css";

export default function Custom404() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <span className={styles.eyebrow}>
          REIKI BENY · CORPS & ESPRIT
        </span>

        <h1 className={styles.errorCode}>404</h1>

        <div className={styles.separator}>
          <span />
          <span className={styles.separatorIcon}>✦</span>
          <span />
        </div>

        <h2 className={styles.title}>
          Un petit détour<br />
          sur votre chemin...
        </h2>

        <p className={styles.description}>
          Il semblerait que cette page se soit égarée.
          Pas d'inquiétude, prenons un instant pour
          retrouver notre chemin.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Retour à l'accueil
            <span aria-hidden="true"> →</span>
          </Link>

          <Link href="/massage" className={styles.secondaryButton}>
            Découvrir les massages
          </Link>
        </div>

        <span className={styles.footerText}>
          Prenez soin de vous, où que votre chemin vous mène.
        </span>
      </div>
    </main>
  );
}

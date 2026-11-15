
import { MAIL, INSTAGRAM } from "../../../utils/constants";
import styles from "./contactCTA.module.css";

type ContactCTAProps = {
  hooked?: string;
  title?: string;
  description?: string;
  emailLabel?: string;
  instagramLabel?: string;
};

export default function ContactCTA({
  hooked = "PRENONS CONTACT",
  title = "Une question ? Parlons-en !",
  description = "N'hésitez pas à me contacter pour discuter de vos envies et trouver le service qui vous correspond.",
  emailLabel = "Me contacter par e-mail",
  instagramLabel = "Me retrouver sur Instagram",
}: ContactCTAProps) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>{hooked}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className={styles.buttons}>
          <a
            href={`mailto:${MAIL}`}
            className={styles.primaryButton}
          >
            {emailLabel}
            <span aria-hidden="true"> ↗</span>
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            {instagramLabel}
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

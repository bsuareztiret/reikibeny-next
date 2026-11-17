
import Image from "next/image";
import Link from "next/link";
import { PATH } from "../../utils/constants";
import styles from "./landing.module.css";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { reviews } from "@/data/reviews";
import ContactCTA from "@/components/contact/ContactCTA";

const LandingXXX = () => {
  return (
    <main className={styles.landing}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            BIEN-ÊTRE · ÉQUILIBRE · VITALITÉ
          </span>

          <h1>
            Prenez soin de vous,
            <br />
            dans votre corps
            <br />
            <span>et votre esprit.</span>
          </h1>

          <p>
            Deux approches complémentaires pour retrouver
            votre équilibre, prendre soin de vous et avancer
            à votre rythme.
          </p>

          <a href="#services" className={styles.primaryButton}>
            Découvrir nos services
            <span>↗</span>
          </a>
        </div>

        <div className={styles.heroScroll}>
          DÉCOUVRIR <span>↓</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introduction}>
        <span className={styles.sectionLabel}>REIKI BENY</span>
        <h2>Deux chemins vers un même objectif.</h2>
        <p>
          Prendre soin de soi, c'est aussi bien apprendre à
          ralentir qu'apprendre à bouger. Découvrez deux
          approches pensées pour votre bien-être.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.services}>
        <article className={styles.serviceCard}>
          <div className={styles.serviceImage}>
            <Image
              src={`${PATH}/documents/img/shooting/AM_115.jpeg`}
              alt="Massage Reiki et moment de détente"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className={styles.serviceNumber}>01</span>
          </div>

          <div className={styles.serviceContent}>
            <span className={styles.eyebrow}>DÉTENTE & HARMONIE</span>
            <h3>Massage Reiki</h3>
            <p>
              Accordez-vous un moment pour ralentir,
              vous détendre et vous recentrer.
              Une parenthèse de bien-être dédiée à votre équilibre.
            </p>

            <Link href={`${PATH}/massage`} className={styles.textLink}>
              Découvrir le Reiki <span>→</span>
            </Link>
          </div>
        </article>

        <article className={styles.serviceCard}>
          <div className={styles.serviceImage}>
            <Image
              src={`${PATH}/documents/img/shooting/fitness-hero.jpg`}
              alt="Coaching sportif personnalisé"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className={styles.serviceNumber}>02</span>
            {/*<span className={styles.newLabel}>NOUVEAU</span>*/}
          </div>

          <div className={styles.serviceContent}>
            <span className={styles.eyebrow}>MOUVEMENT & VITALITÉ</span>
            <h3>Coaching sportif</h3>
            <p>
              Retrouvez la forme, développez votre condition
              physique et progressez grâce à un accompagnement
              adapté à vos objectifs.
            </p>

            <Link href={`${PATH}/coaching`} className={styles.textLink}>
              Découvrir le coaching <span>→</span>
            </Link>
          </div>
        </article>
      </section>

      {/* REVIEWS */}
      <ReviewsSection
        title="Ils nous font confiance"
        reviews={reviews}
        count={3}
      />

      {/* PHILOSOPHY */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyImage}>
          <Image
            src={`${PATH}/documents/img/shooting/AP_029.jpeg`}
            alt="Beny, praticien et passionné de sport"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.philosophyContent}>
          <span className={styles.eyebrow}>UNE APPROCHE PERSONNELLE</span>
          <h2>Votre rythme. Vos objectifs. Votre équilibre.</h2>

          <p>
            Chaque personne est différente. Que vous souhaitiez
            vous accorder un moment de détente ou retrouver
            le plaisir de bouger, l'essentiel est d'avancer
            à votre rythme.
          </p>

          <Link href={`${PATH}/about`} className={styles.textLink}>
            En savoir plus <span>→</span>
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <ContactCTA
        hooked="ET SI VOUS COMMENCIEZ AUJOURD'HUI ?"
        title="Votre bien-être commence par vous."
        description="Une question, une envie ou un projet ? Prenons le temps d'en discuter."
        emailLabel="Me contacter par e-mail"
        instagramLabel="Me retrouver sur Instagram"
      />
    </main>
  );
};

export default LandingXXX;


import Image from "next/image";
import Link from "next/link";
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import { PATH } from "../../utils/constants";
import styles from "@/template/coaching.module.css";
import ContactCTA from "@/components/contact/ContactCTA";

const coachingOffers = [
  {
    number: "01",
    title: "Renforcement musculaire",
    description:
      "Développer sa force, travailler sa musculature et améliorer progressivement sa condition physique.",
    image: "strength-training.jpg",
  },
  {
    number: "02",
    title: "Fitness & remise en forme",
    description:
      "Reprendre une activité physique, retrouver de bonnes habitudes et progresser à son rythme.",
    image: "fitness-session.jpg",
  },
  {
    number: "03",
    title: "Cardio & endurance",
    description:
      "Travailler son endurance, améliorer son souffle et intégrer des exercices cardiovasculaires adaptés.",
    image: "cardio-training.jpg",
  },
  // {
  //   number: "04",
  //   title: "Course à pied",
  //   description:
  //     "Être accompagné dans la reprise ou la pratique régulière de la course à pied.",
  //   image: "running.jpg",
  // },
];

const prices = [
  { label: "Séance découverte", local: "40 €", home: "50 €" },
  { label: "Séance individuelle", local: "60 €", home: "80 €" },
  { label: "1 séances / semaine", local: "220/mois €", home: "260/mois €" },
  { label: "2 séances / semaine", local: "420/mois €", home: "460/mois €" },
];

export default function Coaching() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={`${PATH}/documents/img/shooting/clubbell.jpg`}
              alt="Coaching sportif personnalisé"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <span>COACHING SPORTIF PERSONNALISÉ</span>

            <h1>
              Bougez à votre rythme.
              <br />
              <em>Dépassez-vous.</em>
            </h1>

            <p>
              Retrouvez votre énergie, développez votre condition
              physique et prenez plaisir à bouger.
            </p>

            <a href="#contact" className={styles.button}>
              Commencer maintenant <span>↗</span>
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className={styles.intro}>
          <span className={styles.label}>UNE APPROCHE PERSONNELLE</span>
          <h2>Chaque parcours commence par un premier pas.</h2>

          <p>
            Que vous souhaitiez reprendre une activité physique,
            développer votre musculature ou améliorer votre endurance,
            je vous accompagne dans une démarche progressive et adaptée
            à vos objectifs.
          </p>

          <p>
            Passionné de sport et pratiquant depuis plus de 7 ans,
            j'ai développé mon expérience à travers l'entraînement
            personnel et différentes disciplines, notamment les arts
            martiaux.
          </p>
        </section>

        {/* DISCIPLINES */}
        <section className={styles.disciplines}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>MES DOMAINES D'ACCOMPAGNEMENT</span>
            <h2>Un entraînement adapté à vos envies.</h2>
          </div>

          <div className={styles.disciplineGrid}>
            {coachingOffers.map((offer) => (
              <article className={styles.disciplineCard} key={offer.number}>
                <div className={styles.disciplineImage}>
                  <Image
                    src={`${PATH}/documents/img/shooting/${offer.image}`}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className={styles.disciplineText}>
                  <span>{offer.number}</span>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className={styles.locations}>
          <div className={styles.locationContent}>
            <span className={styles.label}>À VOUS DE CHOISIR</span>
            <h2>Chez vous ou dans un espace dédié.</h2>

            <p>
              Profitez d'un accompagnement individuel selon
              vos préférences et votre organisation.
            </p>

            <div className={styles.locationOption}>
              <span>01</span>
              <div>
                <h3>À domicile</h3>
                <p>
                  Je me déplace dans la région de Bruxelles-Capitale
                  pour vous permettre de vous entraîner chez vous.
                </p>
              </div>
            </div>

            <div className={styles.locationOption}>
              <span>02</span>
              <div>
                <h3>En local</h3>
                <p>
                  Un espace dédié à votre entraînement, accessible
                  sur rendez-vous.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.locationImage}>
            <Image
              src={`${PATH}/documents/img/shooting/macebell.jpg`}
              alt="Entraînement sportif individuel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* PRICING */}
        <section className={styles.pricing}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>TARIFS</span>
            <h2>Investissez dans votre bien-être.</h2>
            <p>
              Des formules simples pour vous accompagner
              dans votre progression.
            </p>
          </div>

          <div className={styles.priceTable}>
            <div className={styles.priceHeader}>
              <span>FORMULE</span>
              <span>EN LOCAL</span>
              <span>À DOMICILE</span>
            </div>

            {prices.map((price) => (
              <div className={styles.priceRow} key={price.label}>
                <strong>{price.label}</strong>
                <span>{price.local}</span>
                <span>{price.home}</span>
              </div>
            ))}
          </div>

          <p className={styles.priceNote}>
            Séances individuelles de 60 minutes.
            Tarifs à domicile valables dans la région de Bruxelles-Capitale,
            sous réserve des conditions de déplacement.
          </p>
        </section>

        {/* CONTACT */}
        <ContactCTA
          hooked="VOTRE PREMIER PAS"
          title="Prêt à commencer ?"
          description="Chaque personne est différente. Prenons le temps d'échanger sur vos attentes et vos objectifs."
          emailLabel="Envoyer un e-mail"
          instagramLabel="Instagram"
        />
      </main>

      <Footer />
    </div>
  );
}

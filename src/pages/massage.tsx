import Footer from "@/template/footer";
import Navbar from "@/template/navbar";
import { MAIL, PATH } from "../../utils/constants";
import styles from "@/template/massage.module.css";
import Image from "next/image";
import Link from "next/link";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import { reviews } from "@/data/reviews";
import ContactCTA from "@/components/contact/ContactCTA";

const treatments = [
  {
    number: "01",
    title: "Reiki",
    subtitle: "Relaxation & écoute",
    description:
      "Une approche douce qui invite à ralentir et à s'accorder un moment de détente. Le Reiki peut être intégré au début, à la fin ou tout au long d'une séance, selon vos préférences.",
  },
  {
    number: "02",
    title: "Massage des fascias",
    subtitle: "Tensions & relâchement",
    description:
      "Une approche manuelle centrée sur les tissus conjonctifs présents dans l'ensemble du corps. Le travail se fait progressivement, à l'écoute de vos sensations et de votre confort.",
  },
  {
    number: "03",
    title: "Massage à l'huile",
    subtitle: "Détente & douceur",
    description:
      "Des mouvements amples et fluides associés à l'utilisation d'huile de massage pour vous offrir un moment de relaxation et de relâchement.",
  },
];

const MassagePage = () => {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={`${PATH}/documents/img/shooting/AM_111.jpeg`}
              alt="Massage et moment de relaxation Reiki Beny"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.heroOverlay} />

          <div className={styles.heroContent}>
            <span>BIEN-ÊTRE & RELAXATION</span>

            <h1>
              Prenez le temps
              <br />
              de <em>vous retrouver.</em>
            </h1>

            <p>
              Un moment pour ralentir, relâcher les tensions
              et vous accorder toute l'attention que vous méritez.
            </p>

            <a href="#prestations" className={styles.button}>
              Découvrir les massages <span>↓</span>
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.intro}>
          <span className={styles.label}>UNE PAUSE POUR VOUS</span>

          <h2>Chaque séance est un moment qui vous appartient.</h2>

          <p>
            Le quotidien nous pousse souvent à avancer sans prendre
            le temps de nous écouter. Je vous propose un espace
            de détente où chaque séance s'adapte à vos envies,
            vos préférences et votre confort.
          </p>

          <p>
            Reiki, massage des fascias ou massage à l'huile :
            plusieurs approches peuvent être combinées pour
            construire une séance qui vous correspond.
          </p>
        </section>

        {/* TREATMENTS */}
        <section id="prestations" className={styles.treatments}>
          <div className={styles.sectionHeading}>
            <span className={styles.label}>LES DIFFÉRENTES APPROCHES</span>
            <h2>À chacun son moment de détente.</h2>
          </div>

          <div className={styles.treatmentGrid}>
            {treatments.map((treatment) => (
              <article
                className={styles.treatmentCard}
                key={treatment.number}
              >
                <span className={styles.number}>
                  {treatment.number}
                </span>

                <div>
                  <span className={styles.subtitle}>
                    {treatment.subtitle}
                  </span>

                  <h3>{treatment.title}</h3>

                  <p>{treatment.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.personalized}>
            <span>UNE SÉANCE QUI VOUS RESSEMBLE</span>
            <p>
              Vous pouvez choisir une approche spécifique ou
              combiner les différentes pratiques selon vos envies.
              Nous en discutons ensemble avant chaque séance.
            </p>
          </div>
        </section>

        {/* PRICES */}
        <section className={styles.pricing}>
          <div className={styles.pricingIntro}>
            <span className={styles.label}>PRENDRE RENDEZ-VOUS</span>
            <h2>Accordez-vous ce moment.</h2>
            <p>
              Prenez le temps nécessaire pour profiter
              pleinement de votre séance.
            </p>
          </div>

          <div className={styles.priceCards}>
            <article className={styles.priceCard}>
              <span>SÉANCE DÉCOUVERTE</span>
              <h3>60 min</h3>
              <div className={styles.price}>80 €</div>
              <p>
                Un moment de détente pour découvrir les différentes
                approches et prendre soin de vous.
              </p>
            </article>

            <article className={`${styles.priceCard} ${styles.featured}`}>
              <span>POUR PRENDRE SON TEMPS</span>
              <h3>90 min</h3>
              <div className={styles.price}>100 €</div>
              <p>
                Une séance plus longue pour profiter pleinement
                d'un accompagnement personnalisé.
              </p>
            </article>
          </div>
        </section>

        {/* AVAILABILITY */}
        <section className={styles.availability}>
          <div>
            <span className={styles.label}>DISPONIBILITÉS</span>
            <h2>Du samedi au mardi.</h2>
            <p>
              Les séances se font sur rendez-vous.
              Contactez-moi pour connaître les disponibilités
              et organiser votre moment de détente.
            </p>
          </div>

          <div className={styles.availabilityMark}>
            <span>REIKI BENY</span>
            <strong>Un moment<br />pour vous.</strong>
            <span>BIEN-ÊTRE & ÉQUILIBRE</span>
          </div>
        </section>

        {/* REVIEWS */}
        <ReviewsSection
          title="Vos expériences, vos mots"
          subtitle="Merci à toutes les personnes qui partagent leur expérience."
          reviews={reviews}
          count={6}
        />

        {/* CONTACT */}
        <ContactCTA
          hooked="VOTRE MOMENT COMMENCE ICI"
          title="Envie de vous offrir une pause ?"
          description="N'hésitez pas à me contacter pour toute question ou pour réserver votre prochaine séance."
          emailLabel="Réserver par e-mail"
          instagramLabel="Me retrouver sur Instagram"
        />
      </main>

      <Footer />
    </div>
	)
}

export default MassagePage;

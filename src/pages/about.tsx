import Head from "next/head";
import Link from "next/link";

import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import ContactCTA from "@/components/contact/ContactCTA";

import styles from "@/template/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>À propos | Reiki Beny</title>
        <meta
          name="description"
          content="Découvrez l'histoire et l'approche de Reiki Beny : Reiki, massages et accompagnement sportif à Bruxelles."
        />
      </Head>

      <Navbar />

      <main className={styles.aboutPage}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>À PROPOS</span>
          <h1>
            Prendre soin de soi,
            <br />
            dans son ensemble.
          </h1>
          <p className={styles.heroText}>
            Le bien-être ne se résume pas à une seule chose. Il passe par
            l'écoute, le relâchement, le mouvement et l'attention que l'on
            porte à son corps au quotidien.
          </p>
        </section>

        <section className={styles.story}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>MON PARCOURS</span>
            <h2>Tout a commencé par une rencontre.</h2>
          </div>

          <div className={styles.storyContent}>
            <p>
              Il y a une dizaine d'années, j'ai recroisé un voisin que je
              n'avais pas vu depuis un moment. Quelque chose avait changé
              chez lui : il semblait particulièrement apaisé, lumineux.
            </p>

            <blockquote>
              « Qu'est-ce qui se passe ? Tu rayonnes en ce moment ! »
            </blockquote>

            <p>
              Il m'a alors parlé du Reiki, qu'il venait de découvrir. Intrigué,
              j'ai voulu essayer à mon tour. L'expérience m'a séduit et m'a
              donné envie d'aller plus loin, jusqu'à décider de me faire
              initier.
            </p>

            <p>
              Cette découverte a ouvert une voie qui s'est ensuite enrichie
              au fil du temps. Les arts martiaux m'ont amené à explorer le
              mouvement et la discipline. J'ai poursuivi cette curiosité par
              une pratique sportive personnelle, en autodidacte, puis par
              des formations autour des fascias et de l'anatomie.
            </p>

            <p>
              Mon parcours s'est donc construit progressivement, à travers
              les rencontres, l'expérience et l'envie de mieux comprendre
              le corps humain.
            </p>
          </div>
        </section>

        <section className={styles.philosophy}>
          <div className={styles.philosophyText}>
            <span className={styles.eyebrow}>CE QUI M'ANIME</span>
            <h2>Le plaisir de voir les autres aller mieux.</h2>
            <p>
              Ce que j'aime dans cet accompagnement, c'est avant tout
              l'échange. Prendre le temps de rencontrer une personne,
              comprendre ce dont elle a besoin et la voir repartir plus
              détendue, plus légère ou simplement plus heureuse.
            </p>
            <p>
              J'ai le sentiment de pouvoir apporter quelque chose de positif
              aux autres. C'est une motivation profonde, et ce qui rend cette
              activité si enrichissante à mes yeux.
            </p>
          </div>
        </section>

        <section className={styles.approach}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>MON APPROCHE</span>
            <h2>Des moments pour se ressourcer. Des habitudes pour avancer.</h2>
            <p>
              Je vois le bien-être comme un équilibre qui se construit à
              plusieurs niveaux. Les soins et l'activité physique ont chacun
              leur place, et peuvent se compléter.
            </p>
          </div>

          <div className={styles.approachGrid}>
            <article className={styles.approachCard}>
              <span className={styles.cardNumber}>01</span>
              <h3>Les soins : prendre un temps pour soi</h3>
              <p>
                Le Reiki et les massages sont pour moi des moments dédiés
                au relâchement et à l'écoute de soi. Ils permettent de faire
                une pause, de porter une attention particulière à son
                ressenti et de s'accorder un temps de récupération.
              </p>
              <p>
                Ces moments peuvent être particulièrement appréciables lors
                des périodes de transition, par exemple au changement de
                saison, quand le rythme du quotidien et la luminosité
                évoluent.
              </p>
              <Link href="/massage" className={styles.textLink}>
                Découvrir les massages et le Reiki →
              </Link>
            </article>

            <article className={styles.approachCard}>
              <span className={styles.cardNumber}>02</span>
              <h3>Le mouvement : entretenir son équilibre</h3>
              <p>
                L'activité physique s'inscrit davantage dans la durée. Bouger,
                entretenir sa force, son endurance et sa mobilité, c'est
                prendre soin de son corps au quotidien.
              </p>
              <p>
                J'aime cette idée que le corps s'adapte à ce qu'on lui
                demande. Entretenir ses capacités, c'est leur donner
                régulièrement une raison de rester présentes. L'objectif
                n'est pas la performance à tout prix, mais de conserver
                le plaisir et la capacité de bouger.
              </p>
              <Link href="/coaching" className={styles.textLink}>
                Découvrir le coaching sportif →
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.closing}>
          <span className={styles.eyebrow}>AVANT TOUT, UNE RENCONTRE</span>
          <h2>Chacun avance à son rythme.</h2>
          <p>
            Il n'y a pas une seule bonne manière de prendre soin de soi.
            L'essentiel est de trouver ce qui vous correspond, en respectant
            vos besoins, vos envies et vos limites.
          </p>
        </section>

        <ContactCTA
          title="Et si on en parlait ?"
          description="Une question, une envie de découvrir un soin ou de reprendre une activité physique ? Contactez-moi, nous pourrons échanger sur vos attentes."
          emailLabel="M'envoyer un email"
          instagramLabel="Me retrouver sur Instagram"
        />
      </main>

      <Footer />
    </>
  );
}

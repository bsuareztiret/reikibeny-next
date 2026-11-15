
import styles from "./reviews.module.css";
import { Review } from "@/data/reviews";
import { googleReviewsUrl } from "@/data/reviews";

type ReviewsProps = {
  title?: string;
  subtitle?: string;
  reviews: Review[];
  googleUrl?: string;
  count?: number;
};

export default function ReviewsSection({
  title = "Vos avis comptent",
  subtitle = "Découvrez les expériences partagées par nos clients.",
  reviews,
  googleUrl = googleReviewsUrl,
  count
}: ReviewsProps) {
  return (
    <section className={styles.reviews}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>
          ILS EN PARLENT MIEUX QUE NOUS
        </span>

        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {reviews.slice(0,count).map((review) => (
          <article key={review.id} className={styles.card}>
            <div
              className={styles.stars}
              aria-label={`${review.rating} étoiles sur 5`}
            >
              {"★".repeat(review.rating)}
              <span>{"☆".repeat(5 - review.rating)}</span>
            </div>

            <p className={styles.content}>
              « {review.content} »
            </p>

            <div className={styles.author}>
              <strong>{review.author}</strong>
              <span>{review.date}</span>
            </div>

            <a
              href={review.url}
              className={styles.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l'avis original sur Google ↗
            </a>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.googleLink}
        >
          Découvrir tous les avis sur Google
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </section>
  );
}

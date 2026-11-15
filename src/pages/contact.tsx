
import Navbar from "@/template/navbar";
import Footer from "@/template/footer";
import { PATH } from "../../utils/constants";
import styles from "@/template/contact.module.css";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Contact() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

  return (
    <div className={styles.page}>
      <Navbar />
      <ContactCTA
      hooked="ET SI VOUS COMMENCIEZ AUJOURD'HUI ?"
      title="Votre bien-être commence par vous."
      description="Une question, une envie ou un projet ? Prenons le temps d'en discuter."
      emailLabel="Me contacter par e-mail"
      instagramLabel="Me retrouver sur Instagram"
      />
      <Footer />
    </div>
  );
}

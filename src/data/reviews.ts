
export type Review = {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  url: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "Miguel Gonçalves",
    rating: 5,
    date: "Il y a un an",
    content:
      "Quelqu’un de extraordinaire! Hyper sensible et profond. You are with good hands! Thank you!",
    url: "https://maps.app.goo.gl/n4dkpQxf4iLgjTnX9",
  },
  {
    id: 2,
    author: "gregoire houcke",
    rating: 5,
    date: "Il y a 9 mois",
    content:
      "Accueil parfait et massage de grande qualité. Je suis reparti serein, et en pleine forme. Je reviendrais !",
    url: "https://maps.app.goo.gl/W26C5769PopXuhLX7",

  },
  {
    id: 3,
    author: "Séraph Blues",
    rating: 5,
    date: "Il y a 11 mois",
    content:
      "Excellente expérience avec Beny. Accueillant et carré, il a su me mettre à l’aise. J’ai pu relâcher mes tensions grâce à son toucher chaleureux et assuré, j’en suis sorti tout groggy de détente, un plaisir!",
    url: "https://maps.app.goo.gl/w2h45Xd64ttRxi5E8",

  },
  {
    id: 4,
    author: "Варвара Тихомирова",
    rating: 5,
    date: "Il y a 11 mois",
    content:
      "I am so glad about the treatment I received from Beny. He understood very well my needs and issues and could feel my body perfectly - the massage felt very relaxing and subtile. It’s a 3rd day after the massage now and I am still free from discomfort and pain which I have been dealing with for years. Also the atmosphere and communication before and after massage are very comforting and safe. Cant wait for the next appointment",
    url: "https://maps.app.goo.gl/ndVX1CvBubvMwji96",

  },
  {
    id: 5,
    author: "Edwin Ocréos",
    rating: 5,
    date: "Il y a 9 mois",
    content:
      "Beny est une personne si bienveillante. Il m'a mis tout de suite hyper à l'aise. On sent dans sa technique qu'il y met toute sa passion. Il a un véritable savoir faire en la matière. Durant la séance, je me suis endormi tellement cette dernière était relaxante. Je me suis senti en grande confiance. Une véritable saveur pour le corps et l'esprit !",
    url: "https://maps.app.goo.gl/9cBHqgWsHCfgGz7A9",
  },
  {
    id: 6,
    author: "Ghislaine Lanssens",
    rating: 5,
    date: "Il y a 9 mois",
    content:
      "Beny m’aide depuis … de nombreuses années. Au départ , il m’a soulagé de beaucoup de douleurs ancrées en moi depuis trop longtemps, mais aussi de blessures plus récentes. A cette époque il utilisait uniquement le Reiki. C’était magique! Sans me toucher, je sentais la chaleur de ses mains se promener au dessus de mon corps! Du simple effleurement au « touché » plus profond, plus pointu, insistant sur un mal enfoui. Ensuite, il a utilisé des massages légers, discrets associé au Reiki. Quoiqu’il fasse, c’ était toujours pertinent, précis. Au fil du temps et de ses apprentissages en matière de massages, chaque séance était une nouvelle expérience, il m’offrait un nouveau bien être. Au fil du temps, nous avons développé une belle complicité. Ensemble nous avons pu résoudre, cicatriser, rééquilibrer mon corps meurtri par la maladie, la chirurgie… Développer ma compréhension de moi-même, que ce soit mes limites tout comme mes capacités. Super aventure, expérience… Merci Beny, tu as des doigts en or! L’aventure n’est pas finie…",
    url: "https://maps.app.goo.gl/cdjKcPRN3W1Tc1NB9",

  },
];

// À remplacer par le véritable lien Google Maps de Reiki Beny.
export const googleReviewsUrl = "https://www.google.com/maps/place/Reiki+Beny/@50.8731291,4.3849692,14.81z/data=!4m8!3m7!1s0x47c3c3d19ba214b5:0xbba74b7eb99f5aa4!8m2!3d50.8754152!4d4.3811379!9m1!1b1!16s%2Fg%2F11mdf4thqm?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

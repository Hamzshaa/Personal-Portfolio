import { metshaftImg } from "../../assets/trident-metshaft/data";
import { cheapDelalaImg } from "../../assets/CheapDelala/data";
import { cheapDelalaJavaImg } from "../../assets/CheapDelalaJava/data";
import { ramadanCompanionImgs } from "../../assets/ramadan-companion/data";
import { addisMusicImage } from "../../assets/addis-music/data";

export const portfolioData = [
  {
    imgs: metshaftImg,
    title: "Trident Metshaft",
    description:
      "Trident Metshaft is a book journey tracker website with progress tracking functionality. It features an attractive and user-friendly admin dashboard for efficient management of book data. The website integrates authentication and authorization, including Google authentication, to ensure secure access for users. Additionally, a notification system has been implemented, allowing administrators to send otifications to users individually or collectively.",
    github: "https://github.com/Hamzshaa/Metshaft",
    online: "https://metshaft.onrender.com/",
  },
  {
    imgs: cheapDelalaImg,
    title: "Cheap Delala",
    description:
      "Cheap Delala is an online platform designed to facilitate secure and highly privatized agreements between home providers and home seekers for both rental and sale purposes. The platform will offer property posting and real-time chatting.",
    github: "https://github.com/Hamzshaa/Cheep-Delala",
    online: "",
  },
  {
    imgs: cheapDelalaJavaImg,
    title: "Cheap Delala (Java)",
    description:
      "The House Rental and Sale System developed in Java and Postgresql is a comprehensive platform designed to provide a user-friendly experience for individuals seeking to rent or purchase houses. With its intuitive user interface, users can easily navigate through the system's features. The system incorporates a chat system, allowing seamless communication between buyers and sellers to discuss property details, negotiate terms, and address any inquiries. Additionally, a secure payment system is integrated, enabling buyers to make payments conveniently and securely. The system also includes an advertising system, allowing users to post their houses for rent or sale, reaching a wider audience. As a broker, the system facilitates the agreement process, ensuring a smooth transaction. The broker earns a 5% commission from the agreement, ensuring a fair and profitable business model. Overall, this Java-based House Rental and Sale System offers a comprehensive solution for individuals looking to rent or purchase properties, streamlining the process and providing a user-friendly experience.",
    github: "",
    online: "",
  },
  {
    imgs: ramadanCompanionImgs,
    title: "Ramadan Companion",
    description:
      "📱 Ramadan Companion is a web application designed to be a helpful companion during the holy month of Ramadan. It provides المسلمين (Muslims) with essential information to enhance their Ramadan experience.",
    github: "https://github.com/AmmarAdnew/Ramadan_proj",
    online: "https://ramadan-camp.netlify.app/",
  },
  {
    imgs: addisMusicImage,
    title: "Addis Music",
    description:
      "'Addis Music' is a web application designed for playing and storing music. It incorporates robust authorization and authentication features to ensure secure access. The frontend of the application is built using React.js, utilizing styled components for styling and React-Redux along with Redux Saga for state management. On the backend, Express.js is used as the framework, while MongoDB serves as the database for storing music data. JSON Web Tokens (JWT) are employed for handling authentication and authorization processes. Together, these technologies provide a seamless and efficient experience for users to play and manage their music collection.",
    github: "https://github.com/Hamzshaa/Addis-Music",
    online: "https://addis-musics-aex2.onrender.com",
  },
];

import project from "../assets/projects/project.svg";
import portfo from "../assets/projects/portfo.png";
import quiz_step from "../assets/projects/quiz_step.png";
const projects = [
  {
    name: "platform de voyage ",
    img: project,
    description:
      "Développement d'un site de réservation avec gestion des destinations et des réservations.",
    
  },
  {
    name: "Portfolio interactif | React.js, Tailwind CSS",
    img: portfo,
    description:
      " Création d'un site personnel responsive mettant en avant mescompétences et projets.",
    link: "https://github.com/midobatlmios/portfolio-m.git",
  },
  {
    name: "Quiz en ligne collaboratif | Laravel, MySQL",
    img: quiz_step,
    description:
      "Conception d'une plateforme de quiz avec gestion des utilisateurs etsystème de scoring.",
    link: "https://github.com/midobatlmios/quiz-online-lar.git",
  },
 
];

export { projects };

// LOGO && ICONS
import MenuBurger from "../../images/menu-burger.png";
import Logo from "../../images/logo.png";
import LogoGithub from "../../images/logo_github.png";
import CompetencesBooki from "../../images/bookiIcons.png";
import CompetencesSophieBluel from "../../images/competences_booki.png";
import CompetencesNinaCarducci from "../../images/competences_optimisation.png";
import ImageModale from "../../images/photo.jpg";
import Fermeture from "../../images/fermeture.png";

// BOOKI
import BookiDesktop from "../../images/booki.png";
import BookiTablette from "../../images/booki_tablette.png";
import BookiMobile from "../../images/booki-mobile.png";

// KASA
import Competences from "../../images/competences_kasa.png";
import KasaAccueil from "../../images/kasa-accueil.webp";
import Kasa from "../../images/kasa.png";
import KasaAppartement from "../../images/kasa-appartement.webp";
import KasaErreur from "../../images/kasa-pageErreur.webp";
import KasaApropos from "../../images/kasa-Apropos.webp";
import KasaMobile from "../../images/kasa-mobile.webp";

// SOPHIE BLUEL
import SophieBluelGalerie from "../../images/galerie_photo.png";
import SophieBluelTablette from "../../images/sophie-bluel-tablette.png";
import SophieBluelLogin from "../../images/sophie_bluel_login.png";
import SophieBluelAccueil from "../../images/sophie-bluel.png";
import SophieBluelAjoutTravaux from "../../images/popup_ajout_photo.png";

// NINA CARDUCCI
import NinaCarducciAccueil from "../../images/nina_carducci_page.png";

// MON VIEUX GRIMOIRE

export const ProjectsList = [
    {
        id: '1',
        name: 'Booki',
        resume: 'Création de la page d\'accueil d\'une agence de voyage avec HTML & CSS',
        context: 'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS',
        objectifs: 'Objectifs :',
        objectifs1: 'L\'entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Il faut développer l\'interface du site avec du code HTML et CSS',
        objectifs2: '',
        objectifs3: '',
        objectifs4: '',
        objectifs5: '',
        objectifs6: '',
        imageAccueil : BookiDesktop,
        technologies: 'Technologies utilisées :',
        pictures: [BookiDesktop, BookiTablette, BookiMobile],
        competences: CompetencesBooki,
        classcompetences: '-booki',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/booki',
        demoLink:'https://booki.elo-web.fr/',
        alt:'page d\'accueil agence de voyage',
        titrePageDéveloppees : 'Les différentes pages développées'
    },
    {
        id: '2',
        name: 'Kasa',
        context: 'Créez une application web de location immobilière avec React',
        objectifs: 'Contraintes fonctionnelles:',
        objectifs1: '- Si l\'utilisateur se trouve à la première image et qu\'il clique sur "Image précédente", la galerie affiche la dernière image.',
        objectifs2: '- Inversement, quand l\'image affichée est la dernière de la galerie, si l\'utilisateur clique sur "Image suivante", la galerie affiche la première image. ',
        objectifs3: '- S\'il n\'y a qu\'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n\'apparaissent pas.',
        objectifs4: 'La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.',
        objectifs5: '- Collapse : Par défaut, les Collapses sont fermés à l\'initialisation de la page. ',
        objectifs6: '- Si le Collapse est ouvert, le clic de l\'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l\'ouvrir. ',
        technologies: 'Technologies utilisées :',
        imageAccueil : Kasa,
        pictures: [KasaAccueil, KasaAppartement, KasaErreur, KasaApropos,KasaMobile],
        competences: Competences,
        classcompetences: '-kasa',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/kasa"',
        demoLink:'https://booki.elo-web.fr/',
        titrePageDéveloppees : 'Les différentes pages développées'
    },
    {
        id: '3',
        name: 'Nina Carducci',
        resume: 'Création d\'une page web dynamique d\'une architecte',
        context: 'En tant que développeur freelance, il s\'agissait de proposer un service d\'optimisation SEO à de nouveaux clients. Parmi les prospects, il y a le site de Nina Carducci, une photographe. La cliente répond positivement à la proposition en demandant une optimisation de son site.',
        objectifs: 'Objectifs :',
        objectifs1: '- Faire une optimisation globale du site, tant sur les performances que sur le SEO ;',
        objectifs2: '- Mettre en place le référencement local en utilisant Schema.org ;',
        objectifs3: '- Ajouter les metas pour les réseaux sociaux ;',
        objectifs4: '- Faire les modifications liées à l’accessibilité du site ;',
        objectifs5: '>- Produire un rapport d’optimisation présentant toutes vos actions et leur impact.',
        objectifs6: '',        
        technologies: 'Technologies utilisées :',
        imageAccueil : NinaCarducciAccueil,
        pictures: [],
        competences: CompetencesNinaCarducci,
        classcompetences: '-carducci',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/nina-carducci.github.io-master',
        demoLink:'https://test.elo-web.fr/',
        titrePageDéveloppees : ''
    }
]
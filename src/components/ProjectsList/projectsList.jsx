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
import MonVieuxGrimoireAjoutLivre from "../../images/page_ajouter_livre_grimoire.png";
import MonVieuxGrimoireNotation from "../../images/page_notation_grimoire.png";
import MonVieuxGrimoireAccueilPage from "../../images/page_accueil_grimoire.png";
import MonVieuxGrimoireAccueil from "../../images/mon-vieux-grimoire.png";

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
        competences: 'HTML',
        competences1: 'CSS',
        competences2: 'Github',
        competences3: '',
        competences4: '',
        imageAccueil : BookiDesktop,
        technologies: 'Technologies utilisées :',
        pictures: [BookiDesktop, BookiTablette, BookiMobile],
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
        competences: 'HTML',
        competences1: 'SASS',
        competences2: 'ReactJS',
        competences3: 'Github',
        competences4: '',
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
        competences: 'Wave',
        competences1: 'LightHouse',
        competences2: 'PageSpeed Inside',
        competences3: 'Github',
        competences4: '',
        classcompetences: '-carducci',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/nina-carducci.github.io-master',
        demoLink:'https://test.elo-web.fr/',
        titrePageDéveloppees : ''
    },
    {
        id: '4',
        name: 'sophie-bluel',
        resume: 'Développer la partir Front du site portfolio d’une architecte d’intérieur.',
        context: 'Développer la partir Front du site portfolio d’une architecte d’intérieur.',
        objectifs: 'Objectifs :',
        objectifs1: '- la page de présentation des travaux de l\'architecte (à partir du HTML fourni),',
        objectifs2: '- la page de connexion de l\'administrateur du site (le client) (code à créer de zéro),',
        objectifs3: '- la modale permettant d\'uploader de nouveaux médias (code à créer from scratch)',
        objectifs4: '',
        objectifs5: '',
        objectifs6: '',        
        technologies: 'Technologies utilisées :',
        imageAccueil : SophieBluelAccueil,
        pictures: [SophieBluelGalerie,SophieBluelTablette,SophieBluelLogin,SophieBluelAjoutTravaux],
        competences: 'HTML',
        competences1: 'CSS',
        competences2: 'Javascript',
        competences3: 'Github',
        competences4: '',
        classcompetences: '-bluel',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/sophie-bluel',
        demoLink:'https://sophie-bluel.elo-web.fr/',
        titrePageDéveloppees : ''
    }
    ,
    {
        id: '5',
        name: 'mon-vieux-grimoire',
        resume: '',
        context: 'Développement  du back-end d’un site de notation de livres',
        objectifs: 'Objectifs :',
        objectifs1: '- Sécurisation de l\'authentification utilisateur',
        objectifs2: '- Toutes les routes côté Livre doivent disposer d\'une autorisation. Seul le propriétaire d\'un livre doit pouvoir effectuer des modifications sur celui-ci',
        objectifs3: '- Prendre en compte la taille des images au chargement lors de l\'ajout d\'un livre',
        objectifs4: '',
        objectifs5: '',
        objectifs6: '',        
        technologies: 'Technologies utilisées :',
        imageAccueil : MonVieuxGrimoireAccueil,
        pictures: [MonVieuxGrimoireAccueilPage,MonVieuxGrimoireAjoutLivre,MonVieuxGrimoireNotation],
        competences: 'NodeJS',
        competences1: 'ReactJS',
        competences2: 'Javascript',
        competences3: 'Github',
        competences4: '',
        classcompetences: '-bluel',
        fermeture: Fermeture,
        git:'github du projet',
        gitLink: 'https://github.com/elodie-rondet/P7-Dev-Web-livres-main',
        demoLink:'https://mon-vieux-grimoire.elo-web.fr/',
        titrePageDéveloppees : ''
    }
]
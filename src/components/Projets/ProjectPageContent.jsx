import React, { useState } from "react"
import { useParams } from 'react-router-dom';
import { projectsList } from '../../datas/projectsList';
import Gallery from "./Gallery";
import NoMatch from "./NoMatch";

const ProjectPageContent = () => {
    const [ diapoPres, setDiapoPres ] = useState(false);
    const [ diapoEtap, setDiapoEtap ] = useState(false);
    const [ diapoLogin, setDiapoLogin ] = useState(false);
    const [ diapoHome, setDiapoHome ] = useState(false);
    const [ diapoBlog, setDiapoBlog ] = useState(false);
    const [ diapoConfirm, setDiapoConfirm ] = useState(false);
    const [ diapoContact, setDiapoContact ] = useState(false);

    const { name } = useParams()
    const project = projectsList.find(project => project.name === name)
    if (project === undefined) { return <NoMatch /> }

    return( 
        <div className='project_page'>
            {diapoPres && <Gallery img={project.picturesPres} onClick={() => setDiapoPres(false)} />}
            {diapoEtap && <Gallery img={project.picturesEtap} onClick={() => setDiapoEtap(false)} />}
            {diapoLogin && <Gallery img={project.picturesLogin} onClick={() => setDiapoLogin(false)} />}
            {diapoHome && <Gallery img={project.picturesHome} onClick={() => setDiapoHome(false)} />}
            {diapoBlog && <Gallery img={project.picturesBlog} onClick={() => setDiapoBlog(false)} />}
            {diapoConfirm && <Gallery img={project.picturesConfirm} onClick={() => setDiapoConfirm(false)} />}
            {diapoContact && <Gallery img={project.picturesContact} onClick={() => setDiapoContact(false)} />}

            <section className='project_page_pres background_section'>
                <header>
                    <h1>Projet : {project.name}</h1>
                </header>
                
                <article className='project_page_pres_article'>
                    <h2 className='project_page_pres_title'>Contexte :</h2>
                    <p className='project_page_pres_text'>{project.context}</p>
                    {project.context1 && <p className='project_page_pres_text'>{project.context1}</p>}
                </article>
                
                <article className='project_page_pres_article'>
                    <h2 className='project_page_pres_title'>Objectifs :</h2>
                    <p className='project_page_pres_text'>{project.objectifs}</p>
                    {project.objectifs1 && <p className='project_page_pres_text'>{project.objectifs1}</p>}
                    {project.objectifs2 &&<p className='project_page_pres_text'>{project.objectifs2}</p>}
                </article>
                
                <article className='project_page_pres_article'>
                    <h2 className='project_page_pres_title'>Langages utilisés :</h2>
                    
                    <div className='project_page_pres_logos'>
                        {project.languages.map((logo, i) => (
                            <img 
                                key={i} 
                                src={logo} 
                                alt='logo du langage utilisé' 
                                className='project_page_pres_logos_logo'
                            />
                        ))}
                    </div>
                </article>
            </section>
            
            <section className='project_page_cover background_section'>
                {/* Booki / OhMyFood */}
                {project.picturesPres && <>
                    <h3 className='project_page_cover_title'>Version desktop, tablette et mobile :</h3>
                    
                    <article className='project_page_cover_imgs'>
                        {project.picturesPres.map((picturePres, i) => (
                            <img 
                                key={i} 
                                src={picturePres} 
                                alt={`cover ${project.name} openclassrooms desktop, tablette et mobile`} 
                                className='project_page_cover_img' 
                                onClick={() => setDiapoPres(true)}
                            />
                        ))}
                    </article>
                    
                    <h3 className='project_page_cover_title'>Identité graphique :</h3>
                    
                    <article className='project_page_ui'>
                        <div>
                            <h4 className='project_page_ui_title'>Couleurs :</h4>
                            <img 
                                src={project.colors} 
                                alt={`couleurs ${project.name} openclassrooms`} 
                                className='project_page_ui_img project_page_ui_img_colors'
                            />
                        </div>
                        <div>
                            <h4 className='project_page_ui_title'>Icônes :</h4>
                            <img 
                                src={project.icons} 
                                alt={`icônes de ${project.name} openclassrooms`} 
                                className='project_page_ui_img project_page_ui_img_icons'
                            />
                        </div>
                    </article>
                </>}
                
                {/* La Panthere */}
                {project.imgBefore && project.imgAfter && <>
                    <h3 className='project_page_cover_title'>Version tablette, avant et après :</h3>
                    
                    <article className='project_page_cover_imgs'>
                            <img 
                                src={project.imgBefore} 
                                alt={`cover ${project.name} openclassrooms avant`} 
                                className='project_page_cover_img_fulltab project_page_cover_img_fulltab_1'
                            />
                            <img 
                                src={project.imgAfter} 
                                alt={`cover ${project.name} openclassrooms après`} 
                                className='project_page_cover_img_fulltab' 
                            />
                    </article>
                </>}
                
                {/* Kanap / HotTakes / Groupo / Kasa / Refonte HotTakes */}
                {project.picturesEtap && <>
                    <h3 className='project_page_cover_title'>Parcours utilisateur :</h3>
                    
                    <article className='project_page_cover_imgs'>
                        {project.picturesEtap.map((pictureEtap, i) => (
                            <img 
                                key={i} 
                                src={pictureEtap} 
                                alt={`parcours utilisateur ${project.name} openclassrooms`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoEtap(true)} 
                            />
                        ))}
                    </article>

                    {project.colors && <>
                        <h3 className='project_page_cover_title'>Identité graphique :</h3>
                        
                        <article className='project_page_ui'>
                            <div>
                                <h4 className='project_page_ui_title'>Couleurs :</h4>
                                <img 
                                    src={project.colors} 
                                    alt={`couleurs et icons de ${project.name} openclassrooms`} 
                                    className='project_page_ui_img project_page_ui_img_colors' 
                                />
                            </div>
                            {project.icons &&
                                <div>
                                    <h4 className='project_page_ui_title'>Icônes :</h4>
                                    <img 
                                        src={project.icons} 
                                        alt={`couleurs et icons de ${project.name} openclassrooms`} 
                                        className='project_page_ui_img project_page_ui_img_icons' 
                                    />
                                </div>
                            }
                        </article>
                    </>}
                </>}

                {/* Site de Mariage */}
                {project.picturesLogin && <>
                    <h3 className='project_page_cover_title'>Page de connexion :</h3>
                    <article className='project_page_cover_imgs'>
                        {project.picturesLogin.map((pictureLogin, i) => (
                            <img 
                                key={i} 
                                src={pictureLogin} 
                                alt={`page de connexion ${project.name}`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoLogin(true)} 
                            />
                        ))}
                    </article>

                    <h3 className='project_page_cover_title'>Page d'accueil :</h3>
                    <article className='project_page_cover_imgs'>
                        {project.picturesHome.map((pictureHome, i) => (
                            <img 
                                key={i} 
                                src={pictureHome} 
                                alt={`page d'accueil ${project.name}`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoHome(true)} 
                            />
                        ))}
                    </article>
                
                    <h3 className='project_page_cover_title project_page_cover_title_1'>Section « Blog du mariage » :</h3>
                    <p>Ceci est la vue Administrateur. Pour les visiteurs le bouton pour ajouter un article et l'icône pour modifier ou supprimer l'article n'apparaîssent pas.</p>
                    <article className='project_page_cover_imgs'>
                        {project.picturesBlog.map((pictureBlog, i) => (
                            <img 
                                key={i} 
                                src={pictureBlog} 
                                alt={`section blog ${project.name}`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoBlog(true)} 
                            />
                        ))}
                    </article>
            
                    <h3 className='project_page_cover_title project_page_cover_title_1'>Sections « Liste des invités » et « Confirmer sa présence » :</h3>
                    <p>Si l'utilisateur connecté est administrateur, il pourra ajouter ou supprimer des invités de sa liste, ainsi que modifier le statut de leur présence.</p>
                    <p>S'il n'est pas administrateur, il pourra entrer son nom et cliquer sur le bouton "Rechercher". Si son nom figure dans la liste des invités, il pourra alors modifier le statut de sa présence.</p>
                    <article className='project_page_cover_imgs'>
                        {project.picturesConfirm.map((pictureConfirm, i) => (
                            <img 
                                key={i} 
                                src={pictureConfirm} 
                                alt={`section "liste des invités" et "confirmer sa présence" ${project.name}`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoConfirm(true)}
                            />
                        ))}
                    </article>
                
                    <h3 className='project_page_cover_title project_page_cover_title_1'>Sections « Messages » et « Contact » :</h3>
                    <p>Ici, l'administrateur peut consulter les messages envoyés par les invités, les marquer comme lus ou non lus, et y répondre. Le nombre de messages non lus est indiqué dans le menu de navigation.</p>
                    <p>L'invité quant à lui dispose d'un formulaire de contact sous lequel sont affichés ses précédentes questions, s'il en a. Il peut indiquer que la réponse à sa question est lue ou non lue, et le nombre de réponses non lues s'affiche également dans le menu de navigation.</p>
                    <article className='project_page_cover_imgs'>
                        {project.picturesContact.map((pictureContact, i) => (
                            <img 
                                key={i} 
                                src={pictureContact} 
                                alt={`section "Messages" et "Contact" ${project.name}`} 
                                className='project_page_cover_img project_page_cover_img_etap' 
                                onClick={() => setDiapoContact(true)} 
                            />
                        ))}
                    </article>
                </>}

                <footer className='project_page_footer'>
                    {project.gitLink &&
                        <a href={project.gitLink} target='_blank' rel='noopener noreferrer' className='project_page_footer_link'>Voir le code sur GitHub</a>
                    }
                    {project.webSite && 
                        <a href={project.webSite} target='_blank' rel='noopener noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le site web</a>
                    }
                    {project.gitLinkBack && project.gitLinkFront && <>
                        <a href={project.gitLinkBack} target='_blank' rel='noopener noreferrer' className='project_page_footer_link'>Voir le code sur GitHub - Back</a>
                        <a href={project.gitLinkFront} target='_blank' rel='noopener noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le code sur GitHub - Front</a>
                    </>}
                </footer>
            </section>

        </div>  
    )
}

export default ProjectPageContent;
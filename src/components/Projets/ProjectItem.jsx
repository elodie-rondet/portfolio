import React from "react"
import { NavLink } from 'react-router-dom';

const ProjectItem = ({ imgAccueil, name, resume, alt }) => {
    return (
<li className="project_item">
      <NavLink className="nav-link" end to={name}>
                <figure className="project_item_figure background_section">
                    <img src={imgAccueil} alt={alt} className="project_item_figure_img" />
                    <figcaption className="project_item_figcaption">
                        <h3 className="project_item_figcaption_title">{name}</h3>
                        <p className="project_item_figcaption_subtitle">{resume}</p>
                    </figcaption>
                </figure>
     </NavLink>
     </li>
    )
}

export default ProjectItem;
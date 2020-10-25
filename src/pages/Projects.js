import React from 'react';

import projects from '../assets/projects.json';

import ProjectCard from '../components/ProjectCard.js';

const ProjectsPage = () => {
    let cardList = [];
    
    console.log('projects.length', projects.length)

    if (projects.length > 0) {
        projects.forEach( (item, idx) => {
            cardList.push(<ProjectCard key={ idx } project={ item }/>)
        })
    }

    console.log('cardList', cardList)

    return (
        <div id="projects-page">
            <h1>Projects Page</h1>
            { cardList }
        </div>
    )
}

export default ProjectsPage;
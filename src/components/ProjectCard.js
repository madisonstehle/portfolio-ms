import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.project.img} alt={props.project.altText} />
                <Card.Body>
                    <Card.Title>{props.project.displayName}</Card.Title>
                    <Card.Text>
                        {props.project.description}
                    </Card.Text>
                    <Button variant="primary">Deployed Site</Button>
                    <Button variant="primary">Repository</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;
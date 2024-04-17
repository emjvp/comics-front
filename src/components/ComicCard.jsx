import React from 'react'
import { Card } from 'react-bootstrap';

const ComicCard = (props) => {
    
    const { comic } = props;
    
    return(
        <Card style={{ width: '18rem', marginBottom: '5rem' }}>
        <Card.Img variant="top" src={comic.associated_images && comic.associated_images[0] && comic.associated_images[0].original_url} />
        <Card.Body>
            <Card.Title>{comic.valume && comic.valume.name}</Card.Title>
            <Card.Text>
               
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default ComicCard;

import React from 'react'
import { Card } from 'react-bootstrap';

const ComicCard = (props) => {
    
    const { comic } = props;
    console.log('comic: ', comic);
    console.log('comic.valume: ', comic.valume);
    return(
        <Card style={{ width: '18rem', marginBottom: '5rem' }}>
            <Card.Img variant="top" src={comic.image && comic.image.original_url } />
            <Card.Body>
                {comic.valume && comic.valume.name &&
                    <Card.Title>{comic.valume.name}</Card.Title>
                }
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ComicCard;

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ComicCard from '../components/ComicCard';
import { fetcherGet } from '../utils/fetcher';

const Comics = () => {

    const [ comicsData, setCommicsData ] = useState([{}]);
     

    useEffect(() => {
        
        const fetchComicsData = async () => {

            const cachedData = JSON.parse(localStorage.getItem('cachedData'));

            if (cachedData) {
                setCommicsData(cachedData);
            } else {

                const dataPromise = fetcherGet('http://localhost:3001/api/comics/12/0');

                dataPromise.then((response) => {
                    const { data } = response;
                    const { results } = data;
                    setCommicsData(results);

                    localStorage.setItem('cachedData', JSON.stringify(results));
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.message);
                });
            }
        }

        fetchComicsData();

    }, []);


    return(
        <Row>
            {
                  comicsData.length && comicsData.map((comic) => {
                    return (
                        <Col md={4} >
                            <ComicCard key={comic.id} comic={comic}/>
                       </Col>
                    )
                })            
            }
        </Row>
    );
};

export default Comics;
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ComicCard from '../components/ComicCard';
import { fetcherGet } from '../utils/fetcher';

const Comics = () => {

    const [ comicsData, setCommicsData ] = useState([{}]);
     
    const dataPromise = fetcherGet('http://localhost:3001/api/comics/12/0');

    useEffect(() => {

        dataPromise.then((response) => {
            const { data } = response;
            const { results } = data;
            setCommicsData(results);
        })
        .catch((err) => {
            console.log(err.message);
        });

    });

    return(
        <Row>
            {
                comicsData.length && comicsData.map((comic) => {
                    return (
                    <Col md={4}>
                        <ComicCard comic={comic} />
                    </Col>)
                })                
            }
        </Row>
    );
};

export default Comics;
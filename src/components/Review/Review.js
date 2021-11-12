import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    

    //Show Reviews
    useEffect(() => {
        fetch('https://glacial-fortress-22682.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="bg-dark py-5 mb-3 mt-3">
        <Container>
            <h1 className="my-5">Buyers Review...</h1>
        {
            reviews.length ? <Row xs={1} md={3} className="g-4">
            {
            reviews.map(review => <Col className="review  p-3">
            <div className="d-flex align-items-center">
                <div style={{height:'50px',width:'50px',overflow:'hidden'}} className="rounded-circle border-1">
                    <img className="w-100 h-100" src={review?.img} alt="" />
                </div>
                <div className="mx-3">
                    <p className="text-warning p-0 m-0">{review?.name}</p>
                    <Rating name="half-rating-read" defaultValue={parseFloat(review?.count) || 5} precision={0.5} readOnly />
                </div>
            </div>
            <div className="w-100">
                <p className="text-white">{review?.message}</p>
            </div>
        </Col>)
            }
            </Row> : <div style={{height:'60vh'}} className="d-flex align-items-center justify-content-between">
                    <div className="w-50 mx-auto">
                        <img className="w-100" src="https://i.pinimg.com/originals/fb/f4/b4/fbf4b4b5b982c142d6b25d8bf45daa40.gif" alt="" />
                    </div>
            </div>
        }
        </Container>
    </div>




    );
};

export default Review;
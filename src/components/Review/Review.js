import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    //Show Reviews
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=" bg-success p-4 text-light mb-5 mt-5">
            <h1>Customer reviews</h1>
            <div className="row mx-auto">
                {
                    reviews.map(userReview =>
                        <div className="col-12 col-md-6 p-4">
                            <div className="bg-secondary p-4">
                                <h2>{userReview.name}</h2>
                                <h2>{userReview.email}</h2>
                                <h5>{userReview.comments}</h5>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;
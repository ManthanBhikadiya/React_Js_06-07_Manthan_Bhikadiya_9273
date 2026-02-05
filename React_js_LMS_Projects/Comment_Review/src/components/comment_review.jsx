import React from 'react'
import { useState , useEffect} from 'react';

const comment_review = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("reviews"));
        if (saved) setReviews(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const addReview = () => {
        if (!name || !comment || rating === 0) return;

        const newReview = {
            name,
            rating,
            comment,
            date: new Date().toLocaleDateString(),
        };

        setReviews([newReview, ...reviews]);
        setName("");
        setComment("");
        setRating(0);
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Comment / Review</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={star <= rating ? "active" : ""}
                        >
                            ★
                        </span>
                    ))}
                </div>

                <textarea
                    placeholder="Write your review..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <button onClick={addReview} disabled={!name || !comment || rating === 0}>
                    Submit Review
                </button>
            </div>

            <div className="card">
                <h3 className="title">Customer Reviews</h3>

                {reviews.length === 0 && <p className="empty">No reviews yet</p>}

                {reviews.map((item, index) => (
                    <div key={index} className="review">
                        <div className="review-header">
                            <strong>{item.name}</strong>
                            <span>{item.date}</span>
                        </div>

                        <div className="rating">
                            {"★".repeat(item.rating)}
                            <span className="gray">
                                {"★".repeat(5 - item.rating)}
                            </span>
                        </div>

                        <p>{item.comment}</p>

                        <button
                            className="delete"
                            onClick={() =>
                                setReviews(reviews.filter((_, i) => i !== index))
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default comment_review

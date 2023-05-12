import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const ReviewsForm = ({ product }) => {
    return (
        <div >
            <h5>REVIEWS</h5>
            <p>There is no reviews yet.</p>
            <h5>Be the first to review “{product.Description}”</h5>
            <hr />
            <p>Your rating *</p>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>Your review *</p>
            <textarea name="review" id="" cols="50" rows="5" placeholder='Enter your Review'></textarea>
        </div>
    )
}

export default ReviewsForm
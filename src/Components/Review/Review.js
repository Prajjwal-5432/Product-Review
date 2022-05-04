/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import Comment from '../Comments/Comment'


const Review = () => {
    const { state } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (state === null) {
        return (
            <Typography variant="h4">Please select a product from Home or Search Page</Typography>
        )
    }

    const { id, title, price, description, image, rating } = state

    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <img src={image} style={{ padding: "40px" }} width="400" height="500" alt={title} />
            <Typography variant="h5">Price: {price}$ &nbsp;&nbsp;&nbsp;&nbsp; Rating: {rating.rate}</Typography>
            <Typography variant="p">{description}</Typography>
            <Comment id={id} />
        </div>
    )
}

export default Review

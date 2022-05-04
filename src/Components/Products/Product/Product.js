import React from 'react'
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

const Product = props => {
    const navigate = useNavigate()
    const { title, price, category, image, rating } = props.product

    const getDetails = () => {
        navigate('/review', { state: props.product })
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={getDetails}>
                <CardMedia
                    component="img"
                    src={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Price: {price}$
                    </Typography>
                    <Typography variant="p" component="div">
                        Rating: {rating.rate} &nbsp;&nbsp;&nbsp;&nbsp; Category: {category}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product
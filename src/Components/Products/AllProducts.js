import React from 'react';
import { Grid } from '@mui/material'
import Product from './Product/Product';
import { useSelector } from 'react-redux'

const AllProducts = () => {
    const products = useSelector(state => state.products)
    return (
        <div>
            <Grid container spacing={3}>
                {
                    products.map(product => {
                        return (
                            <Grid item key={product.title} lg={3} md={6}>
                                <Product product={product} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}
export default AllProducts

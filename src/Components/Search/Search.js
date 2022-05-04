import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Autocomplete, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const products = useSelector(state => state.products)
  const navigate = useNavigate()

  const renderedList = []
  products.forEach(product => {
    renderedList.push({ ...product, label: product.title })
  })

  const [product, setProduct] = useState({})

  const getProduct = () => {
    if (product?.title) {
      delete product.label

      navigate('/review', { state: product })
    } else {
      alert('Please Select a Product')
    }
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={renderedList}
        style={{ width: "500px" }}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        onChange={(event, value) => setProduct(value)}
        renderInput={(params) => <TextField {...params} label="Products" />}
      />
      <Button
        variant="contained"
        style={{ margin: "40px 0 0 0" }}
        onClick={getProduct}
      >
        Search
      </Button>
    </div>

  )
}

export default Search

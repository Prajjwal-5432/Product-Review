import { TextField, Button, List, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from "../../actions/GetComments"

const Comment = props => {
    const { id } = props

    const comments = useSelector(state => state.comments)
    const [newComment, setNewComment] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        if (newComment.length === 0) return
        dispatch(addComment(id, newComment))
    }

    return (
        <div style={{ padding: "20px" }}>
            <TextField
                label="Comment"
                placeholder="Enter a review"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
            />
            <Button
                variant="contained"
                style={{ margin: "10px" }}
                onClick={() => { handleClick(); setNewComment(''); }}
            >
                Post
            </Button>
            <List sx={{ width: '100%', maxWidth: 1000 }}>
                {
                    comments[id].map((val, ind) => {
                        return (<li key={ind} sx={{ padding: "10px" }}>
                            <Typography variant="body1">{val}</Typography>
                            <Divider />
                        </li>)
                    })
                }
            </List>
        </div>
    )
}

export default Comment

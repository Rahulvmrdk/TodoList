import { Delete } from '@mui/icons-material'
import { Grid, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const ProList = (props) => {
  const [line,setLine] = useState(false)
  const cutText = () =>{
    setLine(true)

}
  return (
    <Grid container spacing={1}columnSpacing={3}>
        
        <Grid container item spacing={3}>
        {/* <span><Delete style={{color:'red'}}/></span>&nbsp;&nbsp;&nbsp;
        <li style={{textDecoration:'line-through'}}>{props.text}</li> */}
        
        
            <ListItem style={{textDecoration:line ?'line-through':'none'}}>
                  <Delete onClick={cutText} style={{color:'red'}}/>&nbsp;
                  <Typography variant='h6'>{props.text.titleKey}</Typography>&nbsp;&nbsp;
                  <Typography variant='h6'>{props.text.qtyKey}</Typography>&nbsp;&nbsp;
                  <Typography variant='h6'>{props.text.desKey}</Typography>
                                
            </ListItem>
        
        </Grid>
        <br />
        <br />
    </Grid>
  )
}

export default ProList
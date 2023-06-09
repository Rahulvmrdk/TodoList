import { Button, Grid, ListItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';
import ProList from './ProList';

const TodoProducts = () => {
    const [title1,setTitle] = useState();
    const [qty,setQty] = useState();
    const [Description,setDescription] = useState()
    const [items,setItems] = useState([])
    const [line,setLine] = useState(false)

    const getTitle = (e) =>{
        setTitle(e.target.value);
    }

    const getQty = (e) =>{
        setQty(e.target.value);
    }

    const getDescription = (e) =>{
        setDescription(e.target.value);
    }

    const addItems = () =>{
        setItems((prevItems)=>{
            
                return [...prevItems,{titleKey:title1,qtyKey:qty,desKey:Description}]
        })
        setTitle('');
        setQty('');
        setDescription('');
    }

    const cutText = () =>{
        setLine(true)

    }
  return (
    

    <div className='main-div' style={{backgroundColor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'center'}}>
        <br />
        <div className='center_div' style={{background:'#cfe8fc',height:'80vh',width:'50%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px'}}>
            <br />
            <Typography variant='h4'>ToDo List</Typography>
            <br />
            <TextField variant='standard' value={title1} placeholder='Todo Title' onChange={getTitle} />&nbsp;
            <TextField variant='standard' value={qty} placeholder='Quantity' onChange={getQty}/>&nbsp;
            <TextField variant='standard' value={Description} placeholder='Description' onChange={getDescription}/><br />
            <br />
            {/* <Button variant='contained' color='success' onClick={addItems}>Add</Button> */}
            <Button variant='contained' color='success' onClick={addItems} style={{ borderColor:'transparent',fontSize:'40px',border:'none',outline:'none',marginRight:'10px',boxShadow:'5px 5px 15px -5px rgba(0,0,0,0.3)'}}>
                <AddIcon/>
            </Button>
            <br />
            
            
            
            <ol>
                {items.map((value,index)=>{
                    return(
                    <ProList key = {index} text = {value} />
                        
                    )
                })}
            </ol>

        </div>
        
    </div>
  )
}

export default TodoProducts
import { Box, Button, Container, Icon, SvgIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom';


const Todo = () => {
    const [items,setItems] = useState()
    const [newItem,setNewItem] = useState([])
    const itemEvent = (e) =>{
        setItems(e.target.value);
    }
    const addItem = () =>{

        setNewItem((prevValue) =>{
            return [...prevValue,items]
        })
        setItems('');
    }
    
  return (
    <div className='main-div' style={{backgroundColor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'center'}}>
        <br />
        <div className='center_div' style={{background:'#cfe8fc',height:'80vh',width:'25%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px'}}>
            <br />
            <Typography variant='h3'>ToDo List</Typography>
            <br />
            <TextField variant='standard' value={items} placeholder='
            Add an Items' onChange={itemEvent}/>&nbsp;&nbsp;
            <Button variant='contained' color='success' onClick={addItem} style={{ borderColor:'transparent',fontSize:'40px',border:'none',outline:'none',marginRight:'10px',boxShadow:'5px 5px 15px -5px rgba(0,0,0,0.3)'}}>
                <AddIcon/>
            </Button>
            <br />
            <br />
            <ol>
                
                {newItem.map((val,index) =>{
                    return(<ListCom key = {index} text = {val} />)
                    
                })}
            </ol>

        </div>
        
    </div>
    
  )
}

export default Todo
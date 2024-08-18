import React from 'react'
import { Button, Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({selectedcategory,setselectedcategory}) => 
   (
    <Stack
    direction='row'
    sx={{
        overflowY: 'auto',
        height:{
            sx: 'auto',md: '95%'
        },
        flexDirection: { 
            md:'column' , sx: 'row'
        }
    }}>
        {
            categories.map((category)=>(
                <Button className='category-btn'
                onClick={()=>setselectedcategory(category.name)}
                style={
                    {
                        background: category.name === selectedcategory && '#fc1503',
                        color:'white', borderRadius:'30px'
                    }
                }
                    key={category.name}
                >
                    <span
                    style={{
                        color: category.name === selectedcategory ? 'white' : 'red',
                        marginRight:'15px'
                    }}
                    >{category.icon}</span>
                    <span
                    style={{
                        opacity : category.name === selectedcategory ? '1' : '0.5',
                        color:'white'
                    }}
                    >{category.name}</span>
                </Button>
            ))
        }
    </Stack>
  )

export default Sidebar
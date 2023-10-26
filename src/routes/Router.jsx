import React from 'react'
import Home from '../views/Home'
import { Container, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Tour from '../views/Tour'

const Routers = () => {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={2}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guitar/:id' element={<Tour />} />
          </Routes>
        </Grid>
      </Container>
    </div>
  )
}

export default Routers
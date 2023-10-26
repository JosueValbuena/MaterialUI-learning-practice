import React from 'react'
import { Paper, Box, Grid, Rating, Typography, createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const TourCard = ({ data }) => {

  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: 'body2'
            },
            style: {
              fontSize: 13,
            }
          },
          {
            props: {
              variant: 'body3'
            },
            style: {
              fontSize: 9,
            }
          }
        ]
      }
    }
  });

  const handleClickNavigate = () => {
    navigate(`/guitar/${data.id}`)
  };

  const navigate = useNavigate();

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} onClick={handleClickNavigate}>
          <img
            className='img'
            src={data.img}
            alt="" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {data.name}
            </Typography>

            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component="p" marginLeft={0.5}>
                {data.price > 150 ? 'Envío Gratis Hoy' : 'Se Envía hoy por 10$'}
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
            }}
              marginTop={3}>
              <Rating
                value={data.rating}
                precision={0.5}
                readOnly
                size='small'
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {data.rating}
              </Typography>
              <Typography variant='body2' component='p' marginLeft={1.5}>
                ({data.reviews} reviews)
              </Typography>

            </Box>

            <Box>
              <Typography variant='h6' component='p' marginTop={1.5}>
                From ${data.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard
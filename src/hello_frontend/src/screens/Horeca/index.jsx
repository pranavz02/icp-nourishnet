import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FaPhone, FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa' // Import the icons
import Header from '../../components/Header'
import styled from 'styled-components' // Import styled-components
import { demoRestaurant } from '../../assets/main.js'

const StyledCard = styled(Card)`
  width: 275px;
  margin-bottom: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #f7f7f7; /* Light background color on hover */
  }
`

const StyledIcon = styled.span`
  position: relative;
  top: -2px;
  margin-right: 8px;
  transition: color 0.3s;

  ${StyledCard}:hover & {
    color: #4cceac; /* Change hover color to a complementary color */
  }
`

const StyledRestaurantName = styled(Typography)`
  margin-bottom: 8px;
  font-weight: bold; /* Emphasize restaurant name */
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Horeca = () => {
  const horecaData = [
    {
      image: demoRestaurant, //image URL from cloudinary
      name: 'Hotel Centella',
      location: '123 Mittal Road, Gwalior',
      distance: '2.5 km',
      phoneNumber: '123-456-7890',
    },
    {
      image: demoRestaurant,
      name: 'Burger Budds',
      location: '456 Tulsi Nagar, Gwalior',
      distance: '1.8 km',
      phoneNumber: '987-654-3210',
    },
    {
      image: demoRestaurant,
      name: 'Cafe Connection',
      location: '789 Naya Bada Chauraha, Gwalior',
      distance: '3.2 km',
      phoneNumber: '555-123-4567',
    },
  ]

  return (
    <Box m='20px'>
      <Header
        title='All Restaurants'
        subtitle='Collect Food from where it is surplus'
      />

      <Box display='flex' flexWrap='wrap' gap='20px'>
        {horecaData.map((item, index) => (
          <StyledCard key={index} variant='outlined'>
            <CardMedia
              component='img'
              height='140'
              image={item.image}
              alt={item.name}
              style={{ borderRadius: '15px 15px 0 0' }}
            />
            <CardContent style={{ padding: '16px', marginTop: '8px' }}>
              <StyledRestaurantName variant='h5'>
                {item.name}
              </StyledRestaurantName>
              <div style={{ marginTop: '10px' }}>
                <ContentWrapper>
                  <StyledIcon as={FaMapMarkedAlt} />
                  <Typography>{item.location}</Typography>
                </ContentWrapper>
              </div>
              <div style={{ marginTop: '10px' }}>
                <ContentWrapper>
                  <StyledIcon as={FaMapMarkerAlt} />
                  <Typography>{item.distance}</Typography>
                </ContentWrapper>
              </div>
              <div style={{ marginTop: '10px' }}>
                <ContentWrapper>
                  <StyledIcon as={FaPhone} />
                  <Typography>{item.phoneNumber}</Typography>
                </ContentWrapper>
              </div>
            </CardContent>
          </StyledCard>
        ))}
      </Box>
    </Box>
  )
}

export default Horeca

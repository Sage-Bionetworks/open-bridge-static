import StyledLink from '@components/widgets/StyledLink';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; //vs mui/styles
import theme from '@style/theme';
import React, { FunctionComponent } from 'react';

const AboutContainer = styled(Box)(({theme}) => ({

}))

const About: FunctionComponent<{}> = () => {
  return (
    <AboutContainer>
      <Typography  variant="h2" mb={10}>About Us</Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 4, lg: 10 }}
       >
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h3" color={theme.palette.text.secondary} mb={10}>
            The Bridge Digital Health business unit was formed by Sage Bionetworks
            in 2023 to develop our Digital Health platform and expertise into a 
            turnkey service for academia and industry. Open Bridge is the result 
            of that effort.
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <StyledLink  to="">See Our Team</StyledLink>
          </Box>
        </Grid>
      </Grid>
    </AboutContainer>
  )
}

export default About

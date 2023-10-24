import pensate from '@assets/about/pennstatelogo.svg'
import {ReactComponent as Northwestern_Logo} from '@assets/northwestern_logo.svg'
import {ReactComponent as SageBio_Logo} from '@assets/sage_bio_logo.svg'
import {Box, Button, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'
import React, {FunctionComponent} from 'react'

const PartnersContainer = styled(Box)(({theme}) => ({}))

const Partners: FunctionComponent<{}> = () => {
  return (
    <PartnersContainer>
      <Typography variant="h2" color={colors.neutralsBlack} mb={10}>
        Our Contributors
      </Typography>
      <Typography variant="body1" maxWidth={'600px'} component="p" mb={25}>
        Open Bridge comprises a team of clinical colleagues, cognition 
        researchers, measurement scientists and technical experts with 
        proven success in multiple large-scale validation and development projects. 
        Dr. Mike Kellen leads the development of the 
        Mobile Toolbox platform at Sage Bionetworks. 
      </Typography>
      <Grid container rowSpacing={15} columnSpacing={{xs: 4, lg: 10}} mb={10}>
        <Grid item xs={12} lg={4} textAlign="center">
          <SageBio_Logo />
        </Grid>
\        <Grid item xs={12} textAlign="center">
          <Button color="primary" variant="contained" href="/about-us">
            View Our Contributors
          </Button>
        </Grid>
      </Grid>

      {}
    </PartnersContainer>
  )
}

export default Partners

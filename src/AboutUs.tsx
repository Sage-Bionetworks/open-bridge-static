import MKellen from '@assets/about/mkellen.png'
import sagebio_logo from '@assets/sage_bio_logo.svg'
import PageShell from '@components/widgets/PageShell'
import {Section} from '@components/widgets/Styled'
import {
  DialogTitle,
  DialogTitleProps,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import {alpha, styled} from '@mui/material/styles' //vs mui/styles
import {Box} from '@mui/system'
import {colors, latoFont} from '@style/theme'
import {FunctionComponent} from 'react'

const orgImages: Map<string, string> = new Map([
  [sagebio_logo, 'Sage Bionetworks'],
])

const ContributorContainer = styled('div')(({theme}) => ({
  display: 'flex',
  border: '1px solid #DCDCDC',
  height: '450px',
}))

const StyledH1 = styled('h1')(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#353A3F',
  marginBottom: theme.spacing(10),
}))

//styleName: Body/Body Text 1;
const BodyText1 = styled('p')(({theme}) => ({
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'left',
  color: '#000',
}))

const StyledH2 = styled('h2')(({theme}) => ({
  fontFamily: latoFont,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  marginBottom: theme.spacing(10),
  color: '#000',
}))

const LogoContainer = styled('div')<{rowIndex: number}>(
  ({theme, rowIndex}) => ({
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(10),
    '&> img, > svg': {
      margin: theme.spacing(0, 11),
      flexGrow: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: rowIndex == 1 ? theme.spacing(0) : theme.spacing(10),
      flexDirection: rowIndex == 1 ? 'column' : 'row',
      flexWrap: 'wrap',
      '&> img, > svg': {
        margin: theme.spacing(5, 2),
        flexGrow: 0,
      },
    },
  })
)
const StyledAvatar = styled(Avatar)(({theme}) => ({
  width: '156px',
  height: '156px',
  border: '4px solid #EDEEF2',
  margin: '0 auto',
}))

const StyledSelect = styled(TextField)(({theme}) => ({
  margin: '0 auto',
  border: 'none',
  minWidth: '300px',
  '& .MuiOutlinedInput-notchedOutline': {
    // border: '1px solid #515359',
    border: 'none',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    //  border: '1px solid #515359',
  },

  '& .MuiOutlinedInput-root': {
    border: '1px solid #515359',
    '& :hover': {
      //  border: '1px solid #515359',
    },
  },

  '& .MuiSelect-select': {
    color: '#515359',
  },
}))
const StyledMenuItem = styled(MenuItem)(({theme}) => ({
  color: 'black',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: alpha('#D7665A', 0.15),

    '& > .MuiListItemText-root': {
      // color: '#515359',
    },
  },
}))

const OrgList = styled('div')(({theme}) => ({
  borderRight: '1px solid #DCDCDC',
  marginTop: theme.spacing(5),
  width: theme.spacing(64),
  flexShrink: 0,

  '& .MuiList-root': {
    paddingTop: 0,

    '& > .MuiButtonBase-root': {
      '& > .MuiListItemText-root': {
        color: '#515359',
      },
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: alpha('#D7665A', 0.15),

        '& > .MuiListItemText-root': {
          // color: '#515359',
        },
      },
    },
  },
}))

const Contributors = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
  backgroundColor: '#FBFBFC',
  overflow: 'scroll',
}))

const StyledTitle = styled(({className, ...props}: DialogTitleProps) => (
  <DialogTitle {...props} classes={{root: className}} />
))(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  color: '#4A5056',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(1),

  '&> div': {
    borderBottom: '1px solid #EAECEE',
    paddingBottom: theme.spacing(3),
  },

  '& strong': {
    fontSize: '18px',
    color: '#22252A',
  },
  '& i': {
    fontWeight: 400,
    color: '#22252A',
  },
  '& .MuiIconButton-root': {
    top: '10px',
    right: '10px',
    position: 'absolute',
    padding: theme.spacing(1),
  },
}))

const AboutUs: FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  return (
    <PageShell islight={true} onJoin={onJoin}>
      <Section>
        <Typography variant="h2" textAlign="left" mb={6}>
          About Us
        </Typography>
        <Typography variant="body1" maxWidth="700px" mb={6}>
          The Bridge Digital Health business unit was formed by Sage Bionetworks
          in 2023 to develop our Digital Health platform and expertise into a 
          turnkey service for academia and industry. Open Bridge is the result 
          of that effort.
        </Typography>
      </Section>
      <Box bgcolor={colors.purpleTransparency2}>
        <Section mb={13}>
          <Typography variant="h3" textAlign="center" mb={10}>
            Our Partners
          </Typography>
          <LogoContainer rowIndex={1}>
            {Array.from(orgImages.keys())
              .slice(0, 3)
              .map((src, index) => (
                <img
                  src={src}
                  alt={orgImages.get(src)}
                  key={src}
                  height={orgImages.get(src) === 'Penn State' ? '65px' : 'auto'}
                />
              ))}
          </LogoContainer>
          <LogoContainer rowIndex={2}>
            {Array.from(orgImages.keys())
              .slice(3, 9)
              .map((src, index) => (
                <img src={src} alt={orgImages.get(src)} key={src} />
              ))}
          </LogoContainer>
        </Section>
      </Box>

      <Section>
        <Typography variant="h3" textAlign="center" mb={12}>
          Our Leadership Team
        </Typography>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={MKellen} alt="Michael Kellen" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Michael Kellen leads the Digital Health Business Unit at
              Sage Bionetworks. Since 2009, the technology platforms and 
              services team at Sage has supported open projects and challenges 
              in the collaborative analysis of human health data through the 
              development of the Synapse platform, and by providing support with
              data hosting, curation, and analysis. The team has also supported 
              the collection of human phenotypic data though the development of 
              the Bridge platform. In 2023 the Digital Health work at Sage was
              spun out into its own business unit with the vision of developing
              it into a turnkey service for academia and industry. 
              </p><p>
              Michael has over 10 years experience developing software for 
              academic and corporate users in the life sciences, and has brought
              several award-winning products to market in this space covering 
              simulation, data capture and analysis workflow, data integration, 
              and team collaboration. Prior to Sage, Michael held a variety of 
              positions with Teranode corporation since joining as the company’s 
              first employee in 2002, covering product development, field 
              consulting, product management, and development management. 
              Michael completed a doctorate in bioengineering at the University 
              of Washington in 2002 with a focus in computational biology where 
              he also helped develop scientific modeling and simulation 
              technology subsequently licensed by Teranode.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </PageShell>
  )
}

export default AboutUs

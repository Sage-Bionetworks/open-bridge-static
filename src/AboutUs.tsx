import MKellen from '@assets/about/mkellen.png'
import EMounts from '@assets/about/EMounts.png'
import DJeng from '@assets/about/DJeng.png'
import SYoung from '@assets/about/SYoung.png'
import NBrown from '@assets/about/NBrown.png'
import ACampton from '@assets/about/ACampton.png'
import JNelson from '@assets/about/JNelson.png'
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
      {/*<Box bgcolor={colors.purpleTransparency2}>
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
              </Box>*/}

      <Section>
        <Typography variant="h3" textAlign="center" mb={12}>
          Our Team
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
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={EMounts} alt="Erin Mounts" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Erin Mounts started her professional career in software development 
              in 1983 and in the ensuing decades has developed everything from 
              hardware drivers to e-commerce applications, on everything from 
              Arduino to IBM mainframes, in languages from 6502 assembler to Swift.
              Over the course of her career she has been a full-time employee of
              8 different startups, and contracted or consulted with several others,
              in addition to working at a number of more-established companies.
              She developed her first iPhone app in 2008 and has been managing a 
              crack team of iOS, Android, Web, and AWS cloud server engineers building 
              mobile research applications since 2018. 
              </p>
              <p>
              Erin is currently the Technical Director of the Digital Health 
              Business Unit at Sage Bionetworks. She received her BS in 
              Computer & Information Sciences from Oakland University in 1983 and 
              lives with her family in Seattle.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={DJeng} alt="Dwayne Jeng" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Dwayne Jeng has previously worked at Microsoft and Amazon and now 
              works at Sage Bionetworks as a software engineer with a focus on 
              webservices, back-end engineering, and dev-ops. 
              </p>
              <p>
              Dwayne has 2 cats and loves video games, board games, fencing, 
              playing the piano, and baking cookies.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={SYoung} alt="Shannon Young" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Shannon Young joined Sage Bionetworks in 2015 and since then, she has 
              worked on the research and development of various software tools and 
              mobile applications used in research studies. These tools include new 
              assessments, communication with services, assessment modeling, and a 
              shared library of UI/UX elements. She has been developing software 
              applications for iOS since 2010 when she led the development of an 
              award-winning app for a major retailer built for the newly-released 
              Gen 1 iPad.
              </p>
              <p>
              Shannon graduated from the University of Virginia in 1996 with her MS 
              in Mechanical & Aerospace Engineering. She spent many years working 
              in mechanical engineering and design before accepting that robotics 
              was more fun as a hobby than a career.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={NBrown} alt="Nathaniel Brown" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Nathaniel Brown joined Sage in 2018 as a mobile developer focused on 
              Android development. He has worked on the development of 
              cross-platform frameworks for building mobile research applications. 
              Prior to Sage, Nathaniel worked at Cozi, starting as the company’s 
              first Android developer to eventually managing the software 
              engineering team. 
              </p>
              <p>
              Nathaniel graduated from the University of 
              Washington with degrees in both computer engineering and physics.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={ACampton} alt="Ann Campton" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Ann Campton is a Senior Technical Program and Product Manager 
              supporting digital health studies at Sage Bionetworks. Ann's role is 
              to drive technology forward in parallel with scientific studies and 
              methodologies. Her experience includes driving technical and 
              science-based requirements, quality assurance, release management, 
              and stakeholder engagement for the implementation of web, mobile, and
              server systems to execute clinical studies.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={{xs: 8, lg: 25}}
          mb={8}
          columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <StyledAvatar src={JNelson} alt="Jack Nelson" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              <p>
              Jack Nelson joined Sage Bionetworks in 2021 as a Software Engineer 
              for back-end development. In his previous career as a production 
              manager, he learned programming to create tools for inventory and 
              labor planning. After completing a database migration to SAP, Jack 
              decided to follow his new interest to Code Fellows where he 
              completed a program in full-stack development with a focus on Java.
              </p>
              <p>
              In his spare time, Jack enjoys hiking and attempting home improvement
              projects with varied success.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </PageShell>
  )
}

export default AboutUs

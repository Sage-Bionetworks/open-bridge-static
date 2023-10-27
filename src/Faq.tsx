import PageShell from '@components/widgets/PageShell'
import { Section } from '@components/widgets/Styled'
import { styled, Typography } from '@mui/material'
import { FunctionComponent } from 'react'

const QuestionStyled = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '20px',
    textAlign: 'left',
    marginBottom: theme.spacing(3),
}))

const AnswerStyled = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0px',
    textAlign: 'left',
    paddingBottom: theme.spacing(4),
    borderBottom: '1px solid #EAECEE',
    marginBottom: theme.spacing(4),
}))

const Faq: FunctionComponent<{ onJoin: () => void }> = ({ onJoin }) => {
    return (
        <PageShell islight={true} onJoin={onJoin}>
            <Section sx={{ maxWidth: '800px' }}>
                <Typography variant="h2" textAlign="left" mb={6}>
                    FAQs
                </Typography>

                <QuestionStyled>When can I use Open Bridge?</QuestionStyled>
                <AnswerStyled>
                    Open Bridge is completing its Beta release phase through October 2023.
                    Open Bridge will onboard a limited number of early adopters
                    beginning November 2023.
                </AnswerStyled>
                <QuestionStyled>
                    How can I receive updates about Open Bridge?
                </QuestionStyled>
                <AnswerStyled>
                    Sign up for our <a href="https://forms.gle/CgAWzq8j48PBvo1H7" target="_blank">mailing list</a> to receive updates and announcements.
                </AnswerStyled>
                <QuestionStyled>How much does Open Bridge cost?</QuestionStyled>
                <AnswerStyled>
                    The cost for Open Bridge for Beta contributors and early adopters
                    is currently subsidized by existing development projects but will
                    transition to a tiered cost model. The app is and will always be free
                    for download and use by study participants. There are no in-app
                    purchases or advertising.
                </AnswerStyled>
                <QuestionStyled>What devices can my participants use?</QuestionStyled>
                <AnswerStyled>
                    The Open Bridge App is freely available for both iPhone and Android
                    smartphones. The app is accessible through the Apple App Store and the
                    Google Play Store using an Apple or Google Account. We recommend that
                    participants use iPhone devices running at least iOS 16 and Android 
                    devices running at least Android 7. Note that Google Play Store is not 
                    compatible with some Huawei devices.
                </AnswerStyled>
                <QuestionStyled>
                    What are the data sharing policies for Open Bridge studies?
                </QuestionStyled>
                <AnswerStyled>
                    All Open Bridge data will be shared through a two-tier model. Tier
                    1 will share data from all Open Bridge studies as part of a
                    "population" dataset in aggregate. This data will be released yearly,
                    and will contain data that was collected at least 6 months prior to
                    data release. Data will be highly de-identified and will not include
                    information about disease state unless shared by the study PI. Summary
                    statistics and the distribution of scores for sub-populations will be
                    shared 6 months after completion of data collection for all studies.
                    Tier 2 will share curated, study specific data using the Sage
                    Bionetworks Digital Health Knowledge Portal at <a href="https://dhealth.synapse.org" target="_blank">https://dhealth.synapse.org</a>. All data can be requested through an
                    established governance procedure modeled on the Sage Bionetworks
                    qualified researcher process and data use statements. All data is
                    retained on the Synapse platform indefinitely.
                </AnswerStyled>
                <QuestionStyled>
                    Will data sharing help me comply with NIH requirements?
                </QuestionStyled>
                <AnswerStyled>
                    With a greater demand for open sharing by funding agencies (e.g.
                    genomic data sharing policy of NIH and Open access mandates) providing
                    an easy path for scientists to share their data in a standardized way
                    through the infrastructure being built for Open Bridge and <a href="https://dhealth.synapse.org" target="_blank">https://dhealth.synapse.org</a> can ease these requirements. These include
                    automatic generation of doi:s for the data, providing standard
                    licenses and infrastructure that is already accepted by several
                    journals as a public repository.
                </AnswerStyled>
                <QuestionStyled>
                    What security requirements does Open Bridge adhere to?
                </QuestionStyled>
                <AnswerStyled>
                    Amazon Web Services (AWS) provides the base layer for all Open
                    Bridge Services. AWS is the world-wide leader in cloud computing and
                    provides security measures at the physical and network layers that
                    comply with strict federal requirements including the standards of
                    HIPAA (<a href="http://aws.amazon.com/compliance" target="_blank">http://aws.amazon.com/compliance</a>). Account information is
                    encrypted at rest, as documented in Encrypting Amazon RDS Resources
                    (<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html" target="_blank">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html</a>).
                    Database connections must use SSL.
                </AnswerStyled>
                <QuestionStyled>
                    What data governance checks are in place?
                </QuestionStyled>
                <AnswerStyled>
                    Open Bridge and Synapse operate under a strict governance process
                    that includes <a href="https://studies.bridgedigital.health/MTB-ToS-v2-210923.pdf" target="_blank">Terms of Service</a> guidelines and operating procedures for
                    handling data, data security measures with strict information and
                    privacy-enhancing technologies, as well as the right of audit and
                    external reviews (WIRB 20112068). The Privacy-Enhancing Technologies
                    options include login requirement, data, and communication encryption
                    via Secure Sockets Layers (SSL) when transmitting data or command,
                    firewalls for both ingress and egress, and authentication and
                    authorization of users who access data on Synapse
                    (<a href="http://docs.synapse.org/articles/governance.html" target="_blank">http://docs.synapse.org/articles/governance.html</a>). Study consents
                    must include agreements for data storage and sharing and must be
                    transparent and explicit in the intent of studies to share data with
                    qualified researchers..
                </AnswerStyled>
                <QuestionStyled>How is participant PII managed?</QuestionStyled>
                <AnswerStyled>
                    No PII is currently collected through Open Bridge or the Open 
                    Bridge App. Participants are given a unique identifier by
                    researchers. Only the researcher holds the linkage between the unique
                    identifier and participant PII. The unique identifiers are carried
                    through the Open Bridge platform, along with an internal
                    identifier. Should a participant withdraw from a study, the unique
                    identifier is severed from the account and only the internal
                    identifier remains to connect data to a consent tag.
                </AnswerStyled>
                <QuestionStyled>
                    Can I consent my participants through Open Bridge App?
                </QuestionStyled>
                <AnswerStyled>
                    No mechanism exists to consent participants through the smartphone
                    app. All participants must be consented outside of the App, and then
                    given login information to join your study within the App. Once a
                    participant joins the study by logging into the App, they are assumed
                    to be consented and are tagged as consented within the Open Bridge
                    platform.
                </AnswerStyled>
                <QuestionStyled>
                    Can I deliver custom Patient Reported Outcomes or other surveys to
                    study participants?
                </QuestionStyled>
                <AnswerStyled>
                    Yes, Open Bridge provides a way to author custom PROs or other surveys.
                    Note that any PII collected through these surveys will end up in the 
                    returned data and thus will be linked to the participants' unique identifier
                    for anyone with access to the data. It is the researchers' responsibility
                    to ensure this is handled with proper security.
                </AnswerStyled>
                <QuestionStyled>
                    Can I use Open Bridge for studies outside the US?
                </QuestionStyled>
                <AnswerStyled>
                    No. Open Bridge currently supports US-based research studies only.
                </AnswerStyled>
                <QuestionStyled>
                    Does Open Bridge support languages besides English?
                </QuestionStyled>
                <AnswerStyled>
                    Open Bridge is English only. Open Bridge Spanish-language App
                    and Assessments are in active development.
                </AnswerStyled>
                <QuestionStyled>
                    How will participants know which study to join?
                </QuestionStyled>
                <AnswerStyled>
                    Study coordinators will provide a Study ID and a unique login ID to
                    each participant. Researchers have the option of customizing the App
                    with their own logo, colors, welcome message, notifications, and study
                    information that is displayed to participants when they open up the
                    App on their phone.
                </AnswerStyled>
                <QuestionStyled>How can I provide feedback?</QuestionStyled>
                <AnswerStyled>
                    If you have feedback, questions, or feature requests you can provide
                    them in our <a href="https://forms.gle/x1gJeJkw3zMrmQT96" target="_blank">Feedback form</a>. The Feedback form will not generate a
                    response to your question, but you may see an update to our FAQs or
                    receive an update from our <a href="https://forms.gle/CgAWzq8j48PBvo1H7" target="_blank">mailing list</a>.
                </AnswerStyled>
                <QuestionStyled>
                    What studies are currently using Open Bridge?
                </QuestionStyled>
                <AnswerStyled>
                {/*  TODO: figure out what text should go here */}

                    <p>
                        Lorem etc. etc.
                    </p>
                </AnswerStyled>
            </Section>
        </PageShell>
    )
}

export default Faq

import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

/**
 * Shadow me to add your own content
 */

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

export default props => {
  const data = useStaticQuery(aboutQuery)
  const image = getImage(data.avatar)

  return (
    <Layout {...props}>
      <Seo title='About' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='About Me'
            subheader='My Awesomea and Exciting Journey as a Software Developer'
          />
          <Divider />
          <Box sx={styles.imageWrapper}>
            <Img image={image} />
            <Button sx={styles.button} as={Link} to='/contact'>
              Contact Me
            </Button>
          </Box>
          <Divider />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title='My Story'>
                <Text variant='p'>
                  I am an experienced and accomplished IT professional based in
                  Canada with over 13 years of experience looking to leverage
                  extensive Web Development and Server Administration
                  background. With a specialization in SharePoint(On-Premise and
                  O365), Javascript and Cloud development and administration.
                  Dedicated and motivated in learning new technology.
                </Text>
                <Text variant='p'>
                  Dedicated and motivated in learning new and better technology.
                  I started as C# .Net developer in a Japanese
                  telecommunications company while completing my College Thesis.
                  After a year of working as a .Net Developer, I got interested
                  in SharePoint and landed a job as SharePoint Specialist. I'm
                  currently using ReactJS or Angular to develop different web
                  applications. Most of my background involves SharePoint
                  Development, but I also used ReactJS to create SPA for
                  non-SharePoint Projects. I sharpened my Web designing skills
                  throughout my free time by volunteering my skills and
                  knowledge to non-profit organizations in Canada by creating
                  websites and applications using the latest versions of
                  CSS(Sass), Bootstrap, ReactJS and HTML.
                </Text>
              </Section>
              <Divider />

              <Section title='My Work Experience'>
                <Text variant='p'>
                  <Text variant='h2'>
                    <a
                      href='https://itfo.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      ITFO
                    </a>
                  </Text>
                  Lead the SharePoint Development project in one of their
                  biggest clients. Using AngularJS, I was able to create a SPA
                  that saves tons of money for the client. Instead of using
                  third-party software and services, the client was able to
                  maximize their existing O365 SharePoint because I could
                  develop a tailor-fit application. Currently, I am working with
                  them to create an Enterprise-wide application using ReactJS to
                  track all their assets and their important campaign
                  initiatives inside SharePoint.
                  <ul>
                    <li>
                      I am working in ITFO as a SharePoint Developer with one of
                      their biggest Client (this company is part of Fortune 500
                      last 2020). I spearheaded and architected the whole
                      concept of utilizing their Existing O365 infrastructure by
                      moving and staying away from Subscription-based online to
                      a custom form in O365 using AngularJS, which was
                      eventually converted to ReactJS for easier maintenance and
                      better performance. Their whole marketing department uses
                      this application to keep track of marketing campaigns
                      through different mediums like company website, email and
                      social media interactions. We also utilized PowerBI to
                      create Graphs and Reports to help executives decide what
                      campaign is working for the Client.
                    </li>
                    <ul>
                      <li>
                        With the success of the application I developed, ITFO
                        signed more contracts with this Client and built more
                        sophisticated O365 forms.
                      </li>
                      <li>
                        Due to the popularity of this application, we ended up
                        moving our Data to Azure SQL and creating REST API using
                        .Net Core. We hosted in Azure Function to be consumed by
                        a custom application in SharePoint. This REST API is
                        protected using AAD Authentication so that only verified
                        users can access the data.
                      </li>
                    </ul>
                    <li>
                      I also helped the Client set up the Search Center for all
                      the site collection. We added Metadata tags attached to
                      each site collection, and we used those tags to help
                      end-users find site collection much easier through search
                      refiners and search pages.
                    </li>
                    <li>
                      I was also taking care of their SQL Database that stored
                      all their PowerBI information and data. I created SSIS
                      packages that Extract data from a different source and
                      load it to their SQL Database.
                    </li>
                  </ul>
                </Text>
                <Text variant='p'>
                  <Text variant='h2'>
                    <a
                      href='https://www.bcit.ca/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      BCIT
                    </a>
                  </Text>
                  <b>SharePoint Administration Key highlights:</b>
                  <ul>
                    <li>
                      I am the one who takes care of the day-to-day maintenance
                      of BCIT’s SharePoint 2013 Infrastructure.
                    </li>

                    <ul>
                      <li>
                        Creating Backup site collection and moving them to our
                        Back Server using PowerShell.
                      </li>
                      <li>
                        Updating our SharePoint through installing CU and
                        Security Updates.
                      </li>
                      <li>
                        Doing yearly SharePoint RAP to make sure our whole
                        SharePoint is secured.
                      </li>
                      <li>
                        Checking of SharePoint Services, making sure they are
                        running and not encountering any error.
                      </li>
                      <li>Maintenance of Windows Server</li>
                      <li>
                        Creating PowerShell script to make getting information
                        more accessible.
                      </li>
                      <ul>
                        <li>
                          I created a PowerShell script that does a daily
                          harvest of the BCIT news site and posted it on a
                          SharePoint list to be consumed by the custom
                          application I built.
                        </li>
                        <li>
                          I created a script that finds out and compiles ULS
                          logs to different application servers to make finding
                          out the problem is much easier and faster.
                        </li>
                      </ul>
                      <li>
                        Changed the homepage intranet of BCIT to make it more
                        user-friendly and valuable to its users. I used ReactJS
                        and Sass for the design and displaying of data.
                      </li>
                    </ul>
                    <li>
                      This year we are upgrading our SharePoint Server from
                      SharePoint 2013 – SharePoint 2016. Next year we are
                      planning to move to cloud M365.
                    </li>

                    <ul>
                      <li>
                        With the current migration, I created a Migration Plan
                        to ensure that the users will have no or less impact on
                        the users.
                      </li>
                      <li>
                        Connecting with the site owners of each site collection
                        on what data or document would be left behind to
                      </li>
                    </ul>
                  </ul>
                  <b>SharePoint Development Key highlights:</b>
                  <ul>
                    <li>
                      Before I joined BCIT, they only Infopath to create
                      automated forms. But I wanted to show how powerful and
                      valuable SharePoint is to stakeholders in BCIT, so what I
                      did is I introduced to them how to create mobile-friendly,
                      user-friendly and limitless capability using ReactJS.
                      <ul>
                        <li> Introduced git as source control for code</li>
                        <li>
                          Make use of JIRA and implement Scrum methodology to
                          the whole process to ensure that development projects
                          are completed on schedule. .
                        </li>
                        <li>
                          I have implemented DevOps and automated testing for
                          the application we will build to ensure the Quality of
                          our projects is met and that we are not introducing
                          any new bugs every time we apply changes to the code.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Text>
                <Text variant='p'>
                  <Text variant='h2'>
                    <a
                      href='https://www.accenture.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accenture
                    </a>
                  </Text>
                  In Accenture, I was one of the SME(Subject Matter Expert) for
                  SharePoint to help Projects/clients who need close attention.
                  I am the one they are sending if the Client is complaining
                  about the Project with Accenture. I managed different teams in
                  Accenture from SharePoint Developers, Testers and also UI
                  Specialists. The following are the projects I have handled:
                  <ul>
                    <li>Migration Projects</li>
                    <ul>
                      <li>
                        I am fortunate enough to lead two different SharePoint
                        Migration Projects in Accenture. Due to the success of
                        this project, I am lucky to have gotten three client
                        awards in Accenture. To help with the migration, I
                        create a PowerShell that will help on scoping out how
                        big the migration project is and also, I am the one who
                        leads the execution of this migration to make sure that
                        the schedules I take place with are on target and
                        budget. We went for ShareGate and Metalogix as our tools
                        of choice for migrating our client data to SharePoint
                        Online.
                      </li>
                      <li>
                        Aside from migrating the clients' data from their
                        different SharePoint farms (2007,2010,2013) to O365, I
                        am also responsible for the client's custom features
                        being ready and migrated to SharePoint Online. During
                        that time, we migrated this feature to an App-Based
                        model solution using Angular.
                      </li>
                    </ul>
                    <li>Development Projects</li>
                    <ul>
                      <li>
                        I got another project in Accenture. We create a
                        SharePoint Hosted app in SharePoint Online that, when
                        installed, will install the Client’s SharePoint Object,
                        Custom Web part, Layout, MasterPage and Branding to
                        target Site Collection. The custom app helps the Client
                        make sure their site collection is uniform across their
                        whole SharePoint.
                      </li>
                      <li>
                        I got another project in Accenture. We create a
                        SharePoint Hosted app in SharePoint Online that, when
                        installed, will install the Client’s SharePoint Object,
                        Custom Web part, Layout, MasterPage and Branding to
                        target Site Collection. The custom app helps the Client
                        make sure their site collection is uniform across their
                        whole SharePoint.
                      </li>
                    </ul>
                    <li>
                      Certification – During my stay in Accenture, I earned the
                      following certifications:
                    </li>

                    <ul>
                      <li>
                        Exam 488: Developing Microsoft SharePoint Server 2013
                        Core Solutions
                      </li>
                      <li>Exam 532: Developing Microsoft Azure Solutions</li>
                      <li>MCSA: Cloud Platform - Certified 2016</li>
                      <li>
                        Exam 533: Implementing Microsoft Azure Infrastructure
                        Solutions
                      </li>
                      <li>Exam 534: Architecting Microsoft Azure Solutions</li>
                      <li>
                        MCSE: Cloud Platform and Infrastructure — Certified 2016
                      </li>
                      <li>Certified ScrumMaster® (scrumalliance.org)</li>
                    </ul>
                  </ul>
                </Text>
              </Section>
            </Box>
            {/* <Box sx={styles.column}>
              <Section title='ITFO'>
                <Card variant='paper'>
                  During the brainstorming process, art directors, co-workers,
                  and clients are engaged in imagining what the finished piece
                  or scene might look like.
                </Card>
              </Section>
              <Divider />
              <Section title='Creative Designing'>
                <Card variant='paper'>
                  A core responsibility of the designer's job is to present
                  information in a way that is both accessible and memorable.
                </Card>
              </Section>
            </Box> */}
          </Flex>
        </Main>
      </Stack>
    </Layout>
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/about.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1140
          height: 500
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`

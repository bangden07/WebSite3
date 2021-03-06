import React from 'react'
import { Link } from 'gatsby'
import { Button, Box, Heading, Text } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  author: {
    display: `inline-block`,
    color: `alpha`
  },
  occupation: {
    mb: 4
  },
  specialty: {
    color: `text`,
    mb: 4
  }
}

export default () => (
  <>
    <Heading variant='h1'>
      Hi, I'm <Text sx={styles.author}>Billy Peralta</Text>.
    </Heading>
    <Heading variant='h1' sx={styles.occupation}>
      System Developer
    </Heading>
    <Heading variant='h3' sx={styles.specialty}>
      Specialized in M365, SharePoint Online, Cloud and Javascript Development
    </Heading>
    <Box variant='buttons.group'>
      <Button as={Link} to='/contact'>
        Contact Me
      </Button>
      <Button variant='white' as={Link} to='/about'>
        About Me
      </Button>
    </Box>
  </>
)

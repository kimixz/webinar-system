import React from 'react'

// @material-ui/core
import { Box } from '@material-ui/core'

// components
import HelmetWrapper from 'components/Homepage/HelmetWrapper'
import Banner from 'components/Homepage/Banner'
import Features from 'components/Features/Features'
import Social from 'components/Social/Social'
import GoldWebinar from 'components/Webinar/GoldWebinar'
import FeaturedWebinar from 'components/Webinar/FeaturedWebinar'

function Homepage() {
  return (
    <>
      <HelmetWrapper
        title="سامانه وبینارهای آنلاین"
        description="سامانه وبینارهای آنلاین"
        keyword="سامانه وبینارهای آنلاین"
      />
      <Box component="main">
        <Banner />
        <Features />
        <GoldWebinar
          title="وبینار های طلایی"
          articleChapterCount={4}
          isFeatured
        />
        <Social />
        <FeaturedWebinar
          title="جدیدترین وبینار‌ها"
          articleChapterCount={4}
          isFeatured
          moreBtn
          moreBtnLink="/webinar"
        />
      </Box>
    </>
  )
}

export default Homepage

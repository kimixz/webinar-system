import React from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Typography } from '@material-ui/core'

// @material-ui/icons
import CompareOutlined from '@material-ui/icons/CompareOutlined'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import LocalLibraryOutlined from '@material-ui/icons/LocalLibraryOutlined'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'

// components
import FeatureItem from 'components/Features/FeatureItem'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
  },
  rootBg: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  featuresMainTitle: {
    textAlign: 'center',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    padding: `0 ${theme.spacing(3)}px`,
  },
}))

function Features() {
  const classes = useStyles()

  return (
    <Box component="section" className={classes.root}>
      <Box component="div" className={classes.rootBg}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            className={classes.featuresMainTitle}
          >
            خدمات سامانه برگزاری وبینار‌ها
          </Typography>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text="استفاده از به روزترین تکنولوژی‌ها"
                icon={<CompareOutlined />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text="دسترسی به ویدیو و فایل‌های وبینار"
                icon={<CloudDownloadIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text=" انتشار وبینار به صورت آنلاین و افلاین"
                icon={<OfflineBoltIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text="امنیت اطلاعات"
                icon={<VerifiedUserOutlined />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text="سطوح مختلف اسپانسری وبینار‌ها"
                icon={<MonetizationOnIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem
                text="دسته بندی دقیق وبینار‌ها"
                icon={<LocalLibraryOutlined />}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Features

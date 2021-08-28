import React from 'react'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

// @material-ui/icons
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'

// components
import FooterListItem from 'components/Footer/FooterListItem'

// utils
import { toFaDigit } from 'utils/commonUtils'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
  footerSectionListItemText: {
    '& span': {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: '400',
      color: '#fff',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
  },
  footerIcon: {
    color: theme.palette.secondary.main,
  },
  socialIconWrapper: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  socialIcon: {
    marginRight: theme.spacing(1),
    '& svg': {
      transform: 'rotateZ(0deg)',
      transition: `all ${theme.transitions.easing.easeInOut}`,
      transitionDuration: theme.transitions.duration.complex,
    },
    '&:hover svg': {
      transform: 'rotateZ(360deg)',
    },
  },
  copyright: {
    backgroundColor: 'rgb(0,0,0,0.4)',
    borderTopLeftRadius: '60px',
    borderTopRightRadius: '60px',
  },
  copyrightText: {
    color: '#fff',
    textAlign: 'center',
    padding: `${theme.spacing(1.5)}px 0`,
  },
  copyrightLink: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.root}>
      <Box component="div">
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="تماس با ما"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>

                <FooterListItem
                  type="tel-email"
                  text={toFaDigit('021-22222222')}
                  link="tel:02122222222"
                  icon={
                    <CallIcon fontSize="small" className={classes.footerIcon} />
                  }
                />

                <FooterListItem
                  type="tel-email"
                  text="info@webinar.com"
                  link="mailto:info@webinar.com"
                  icon={
                    <EmailIcon
                      fontSize="small"
                      className={classes.footerIcon}
                    />
                  }
                />
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="لینک های مفید"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>
                <FooterListItem type="inner" text="وبینار‌ها" link="/webinar" />
                <FooterListItem
                  type="inner"
                  text="درخواست برگزاری وبینار"
                  link="/requestwebinar"
                />
                <FooterListItem type="inner" text="ثبت‌نام" link="/register" />
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List component="div">
                <ListItem>
                  <ListItemText
                    primary="مطالب جدید"
                    className={classes.footerSectionListItemText}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="div" className={classes.copyright}>
        <Container maxWidth="lg">
          <Typography
            variant="caption"
            component="p"
            className={classes.copyrightText}
          >
            کلیه حقوق این سایت برای
            <a
              href="https://www.webinarsystem.com"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.copyrightLink}
            >
              {` سامانه برگزاری وبینار‌ها `}
            </a>
            محفوظ است. ۱۳۹۹©
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer

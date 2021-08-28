import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
} from '@material-ui/core'

// react router
import { useLocation, Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  topInfo: {
    textAlign: 'center',
  },
  divider: {
    borderBottom: '1px solid #cdcdcd',
  },
  expandIconWrapper: {
    minWidth: 'unset',
    margin: theme.spacing(-1.5),
  },
  firstChild: {
    backgroundColor: '#eee',
  },
  nestedChild: {
    paddingLeft: theme.spacing(5),
  },
  nestedGrandChild: {
    paddingLeft: theme.spacing(8),
  },
  parentText: {
    '& span': {
      fontSize: '15px',
    },
  },
  childText: {
    '& span': {
      fontSize: '15px',
    },
  },
  grandChildText: {
    '& span': {
      fontSize: '14px',
      color: theme.palette.text.secondary,
    },
  },
}))

function MobileMenuItem({ setMenuDrawer }) {
  const { pathname } = useLocation()
  const classes = useStyles()

  const urlFirstPart = pathname.slice(1).split('/')[0]

  return (
    <>
      <List
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.topInfo}
          >
            آرشیو مد
            <div className={classes.divider} />
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem
          button
          component={Link}
          to="/"
          selected={urlFirstPart === ''}
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="خانه" className={classes.parentText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/news"
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="اخبار" className={classes.parentText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/articles"
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="مقالات" className={classes.parentText} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/FAQ"
          selected={urlFirstPart === 'FA'}
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText
            primary="سوالات متداول"
            className={classes.parentText}
          />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/contact-us"
          selected={urlFirstPart === 'contact-us'}
          onClick={() => setMenuDrawer(false)}
          onKeyDown={() => setMenuDrawer(false)}
        >
          <ListItemText primary="تماس با ما" className={classes.parentText} />
        </ListItem>
        <MuiLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://panel.archivemed.com/"
        >
          <ListItem
            button
            component="div"
            selected={urlFirstPart === 'https://panel.archivemed.com/'}
            onClick={() => setMenuDrawer(false)}
            onKeyDown={() => setMenuDrawer(false)}
          >
            <ListItemText
              primary="ورود به پنل آرشیومد"
              className={classes.parentText}
            />
          </ListItem>
        </MuiLink>
        <MuiLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://panel.archivemed.com/fast-register-doctor"
        >
          <ListItem
            button
            component="div"
            selected={
              urlFirstPart ===
              'https://panel.archivemed.com/fast-register-doctor'
            }
            onClick={() => setMenuDrawer(false)}
            onKeyDown={() => setMenuDrawer(false)}
          >
            <ListItemText primary="ثبت نام" className={classes.parentText} />
          </ListItem>
        </MuiLink>
      </List>
    </>
  )
}

MobileMenuItem.propTypes = {
  setMenuDrawer: PropTypes.func.isRequired,
}

export default MobileMenuItem

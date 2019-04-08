import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconButton, Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Menu } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: (theme.palette.type === 'dark') ? "#1e1e1e": "#blue",
    opacity: 0.85,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: "white",
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  cardLink: {
    textDecoration: 'none',
    color: (theme.palette.type === 'dark') ? "#fbfbfb": "#1e1e1e",
  },
}));

/**
 * AppBarChild
 * @type {{toggle: Boolean, setToggle: Function}}
 */
AppBarChild.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

function AppBarChild ({ toggle, setToggle}) {
  const classes = useStyles();
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, toggle && classes.appBarShift)}
    >
      <Toolbar disableGutters={!toggle} variant="dense">
        <IconButton
          aria-label="Open drawer"
          onClick={setToggle}
          className={classNames(classes.menuButton, toggle && classes.hide)}
        >
          <Menu/>
        </IconButton>
        PSE - 2019
      </Toolbar>
    </AppBar>
  )
}

export default AppBarChild

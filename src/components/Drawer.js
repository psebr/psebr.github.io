import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { IconButton, Divider, List, Drawer, ListItem, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import imgPseRj from 'assets/PSE_RJ-1.png'
// import svgQrCode from '../assets/qrcode-scan.svg'

import {
  HomeOutlined,
  ScheduleOutlined,
  GradeOutlined,
  InfoOutlined,
  ChevronLeft,
} from '@material-ui/icons'

const QrCodeIcon = () => (
  <SvgIcon fontSize="small">
      <path fill="#000000" d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z" />
  </SvgIcon>
)

const WorkIcon = () => (
  <SvgIcon fontSize="small">
    <path fill="#000000" d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z" />    )
  </SvgIcon>
)

/**
 * menus
 * @type {Array}
 * @value [0: mainMenu, 1: sideMenu]
 */
const menus = [
  [
    {
      children: <HomeOutlined/>,
      label: 'Tela inicial',
      route: '/'
    },
    {
      children: <ScheduleOutlined/>,
      label: 'Programação',
      route: '/programacao'
    },
    {
      // children: svgQrCode,
      children: <QrCodeIcon />,
      label: 'Avaliar trabalho',
      route: '/avaliar-trabalho'
    },
    {
      children: <WorkIcon />,
      label: 'Trabalhos',
      route: '/trabalhos'
    },
    {
      children: <GradeOutlined />,
      label: 'Favoritos',
      route: '/favoritos'
    },
    {
      children: <InfoOutlined />,
      label: 'Informações',
      route: '/infos'
    }
  ],
]

const Menus = ({menus, toggle}) => (
  <>
    {menus.map(menu => (
        <Link to={menu.route} key={menu.label} style={{textDecoration: 'none'}}>
          <ListItem button onClick={toggle}>
            <ListItemIcon>
              {menu.children}
            </ListItemIcon>
            <ListItemText primary={menu.label}/>
          </ListItem>
        </Link>
      )
    )}
  </>
)

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    whiteSpace: 'nowrap',
    backgroundColor: (theme.palette.type === 'dark') ? '#212121' : '#ffffff',
    opacity: 0.95,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80,
  },
  imgPseRj: {
    height: 80,
  },
}))

/**
 * DrawerChild
 * @type {{toggle: Boolean, setToggle: Function}}
 */
DrawerChild.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

function DrawerChild ({toggle, setToggle}) {
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, toggle || classes.drawerPaperClose),
      }}
      open={toggle}
    >
      <div className={classes.toolbar}>
        <img src={imgPseRj} alt="PSE" className={classes.imgPseRj}/>
        {
          toggle && <IconButton aria-label="Close drawer" onClick={setToggle}>
            <ChevronLeft/>
          </IconButton>
        }
      </div>
      {menus.map((value, key) => (
        <Fragment key={key}>
          <Divider/>
          <List component="nav"><Menus menus={value} toggle={setToggle}/></List>
        </Fragment>
      ))}
    </Drawer>
  )
}

export default DrawerChild

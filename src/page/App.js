import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Drawer, AppBar, Loading } from 'components'
import { useToggle } from 'utils'
import Favoritos from './trabalhos/favoritos';
import Trabalhos from './trabalhos';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    backgroundColor: (theme.palette.type === 'dark') ? '#191919' : '#fafafa',
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 48,
  },
}))

const routes = [
  {
    path: '/',
    component: withRouter(lazy(() => import('./inicial')))
  },
  {
    path: '/avaliar-trabalho',
    render: withRouter(lazy(() => import('./avaliar-trabalho')))
  },
  // {
  //   path: '/trabalhos',
  //   render: withRouter(lazy(() => import('./trabalhos')))
  // },
  // {
  //   path: '/favoritos',
  //   // render: withRouter(lazy(() => import('./trabalhos/favoritos')))
  //   render: (props) => <Favoritos {...props}/>
  // },
  {
    path: '/infos',
    render: withRouter(lazy(() => import('./infos')))
  },
  {
    path: '/home',
    render: withRouter(lazy(() => import('./home')))
  },
  {
    path: '/statistics',
    render: withRouter(lazy(() => import('./statistics')))
  },
  {
    path: '/comment',
    render: withRouter(lazy(() => import('./comment')))
  },
  {
    path: '(.*)',
    render: withRouter(lazy(() => import('./error')))
  },
]

function App () {
  const classes = useStyles()
  const _useToggle = useToggle()
  const [favorites, setFavorites] = useState([])

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar {..._useToggle}/>
        <Drawer{..._useToggle}/>

        <main className={classes.content}>
          <div className={classes.toolbar}/>
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Route key="favorites" exact path="/favoritos"
                render={(props) => (<Favoritos {...props}
                favorites={favorites} setFavorites={setFavorites}/>)} />
              <Route key="trabalhos" exact path="/trabalhos"
                render={(props) => (<Trabalhos {...props}
                  favorites={favorites} setFavorites={setFavorites} />)} />
              {routes.map((route, key) => <Route key={key} exact {...route}/>)}
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App

import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import csvFileName from 'data/worklist.csv'
import { dsv } from 'd3-fetch'

import { Drawer, AppBar, Loading } from 'components'
import { useToggle } from 'utils'

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
    component: withRouter(lazy(() => import('./avaliar-trabalho')))
  },
  {
    path: '/trabalhos',
    component: withRouter(lazy(() => import('./trabalhos')))
  },
  {
    path: '/favoritos',
    component: withRouter(lazy(() => import('./trabalhos/favoritos')))
  },
  {
    path: '/infos',
    component: withRouter(lazy(() => import('./infos')))
  },
  {
    path: '/home',
    component: withRouter(lazy(() => import('./home')))
  },
  {
    path: '/statistics',
    component: withRouter(lazy(() => import('./statistics')))
  },
  {
    path: '/comment',
    component: withRouter(lazy(() => import('./comment')))
  },
  {
    path: '(.*)',
    component: withRouter(lazy(() => import('./error')))
  },
]

// const favoritesInitial = []

export const WorksContext = React.createContext();
export const FavoritesContext = React.createContext();

function App() {
  const classes = useStyles()
  const _useToggle = useToggle()
  const [works, setWorks] = useState(null)
  const [favorites, setFavorites] = useState([])

  useEffect(
    () => {
      dsv(';', csvFileName, (loadedData) => {
        Object.keys(loadedData).map(function (key, val) {
          loadedData[key] = loadedData[key].trim();
        });
        return loadedData
      }).then((data) => {
        console.log(data)
        setWorks(data)
      }).catch(err => console.log(err)) //To Notify!
    },
    [],
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar {..._useToggle} />
        <Drawer{..._useToggle} />

        <WorksContext.Provider value={works}>
          <FavoritesContext.Provider value={{favorites, setFavorites}}>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Suspense fallback={<Loading />}>
                <Switch>
                  {routes.map((route, key) => <Route key={key} exact {...route} />)}
                </Switch>
              </Suspense>
            </main>
          </FavoritesContext.Provider>
        </WorksContext.Provider>
      </div>
    </Router>
  )
}

export default App
